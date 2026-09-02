"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Map, 
  User, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronLeft, 
  UserCircle,
  MessageSquare,
  Bell,
  Volume2,
  VolumeX,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Clock,
  Phone,
  Mail
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { BASE_PATH, asset } from '@/lib/basePath';
import { playNotificationSound } from '@/lib/audioAlert';

interface NewEnquiryAlert {
  id: number;
  package_name: string;
  user_name: string;
  user_email: string;
  user_phone: string;
  details?: string | null;
  created_at: string;
}

export default function CMSLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  
  // Alert & Notification States
  const [pendingCount, setPendingCount] = useState<number>(0);
  const [notifications, setNotifications] = useState<NewEnquiryAlert[]>([]);
  const [unreadNotifCount, setUnreadNotifCount] = useState<number>(0);
  const [activeToast, setActiveToast] = useState<NewEnquiryAlert | null>(null);
  const [soundMuted, setSoundMuted] = useState<boolean>(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const notifDropdownRef = useRef<HTMLDivElement>(null);
  const lastMaxIdRef = useRef<number>(0);
  const isInitialFetchRef = useRef<boolean>(true);

  // Request browser desktop notification permission on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      if (Notification.permission === 'default') {
        Notification.requestPermission().catch(() => {});
      }
    }
  }, []);

  // Fetch admin profile
  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch(`${BASE_PATH}/api/admin/profile`);
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.profile) {
            setProfile(data.profile);
          }
        }
      } catch (err) {
        console.error('Failed to load profile in layout:', err);
      }
    }
    fetchProfile();
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Click outside detection for dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (notifDropdownRef.current && !notifDropdownRef.current.contains(event.target as Node)) {
        setNotifDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Listen for mark-read custom event (when user views/opens an enquiry or details page)
  useEffect(() => {
    const handleMarkRead = () => {
      setUnreadNotifCount(0);
      if (typeof document !== 'undefined') {
        document.title = 'Jobiho CMS Admin Portal';
      }
    };
    window.addEventListener('mark-enquiries-read', handleMarkRead);
    return () => window.removeEventListener('mark-enquiries-read', handleMarkRead);
  }, []);

  // -------------------------------------------------------------
  // REAL-TIME POLLING FOR NEW ENQUIRIES & ALERTS
  // -------------------------------------------------------------
  const checkNewEnquiries = async () => {
    try {
      const url = `${BASE_PATH}/api/admin/enquiries/check-new?lastId=${lastMaxIdRef.current}`;
      const res = await fetch(url);
      if (!res.ok) return;

      const data = await res.json();
      if (!data.success) return;

      // Update total pending count
      setPendingCount(data.pendingCount || 0);

      // Handle Initial Fetch vs Subsequent Updates
      if (isInitialFetchRef.current) {
        lastMaxIdRef.current = data.maxId || 0;
        isInitialFetchRef.current = false;
      } else {
        if (data.hasNew && Array.isArray(data.newEnquiries) && data.newEnquiries.length > 0) {
          lastMaxIdRef.current = data.maxId;

          const latestEnquiry = data.newEnquiries[0];
          
          // 1. Play synthesized audio chime (if sound not muted)
          if (!soundMuted) {
            playNotificationSound();
          }

          // 2. Show floating visual toast alert
          setActiveToast(latestEnquiry);

          // 3. Update notification list & unread count
          setNotifications(prev => [...data.newEnquiries, ...prev].slice(0, 15));
          setUnreadNotifCount(prev => prev + data.newEnquiries.length);

          // 4. Trigger Browser Desktop Notification if app is in background
          if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
            try {
              new Notification('🔔 New Enquiry Received!', {
                body: `${latestEnquiry.user_name} enquired for "${latestEnquiry.package_name}"`,
                icon: '/jobiho only logo.png'
              });
            } catch (e) {
              console.warn('Desktop notification error:', e);
            }
          }

          // 5. Flashing Document Title Alert
          document.title = `🔔 (${data.newEnquiries.length}) New Enquiry! - Jobiho Admin`;

          // 6. Broadcast custom event for admin pages
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('new-enquiry-received', { 
              detail: { newEnquiries: data.newEnquiries, pendingCount: data.pendingCount } 
            }));
          }
        }
      }
    } catch (err) {
      console.error('Error polling new enquiries:', err);
    }
  };

  useEffect(() => {
    // Immediate initial check
    checkNewEnquiries();

    // Poll every 8 seconds for real-time responsiveness
    const intervalId = setInterval(() => {
      checkNewEnquiries();
    }, 8000);

    return () => clearInterval(intervalId);
  }, [soundMuted]);

  // Reset tab title on focus
  useEffect(() => {
    const handleFocus = () => {
      document.title = 'Jobiho CMS Admin Portal';
    };
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const handleLogout = async () => {
    try {
      await fetch(`${BASE_PATH}/api/auth/logout`, { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch (err) {
      console.error('Failed to log out:', err);
    }
  };

  const handleMarkAllNotifsRead = () => {
    setUnreadNotifCount(0);
    if (typeof document !== 'undefined') {
      document.title = 'Jobiho CMS Admin Portal';
    }
  };

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Tour & Packages', path: '/admin/tour-packages', icon: Map },
    { 
      name: 'Enquiries', 
      path: '/admin/enquiries', 
      icon: MessageSquare,
      badge: unreadNotifCount > 0 ? unreadNotifCount : null
    },
    { name: 'Profile', path: '/admin/profile', icon: User },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  const currentMenuItem = menuItems.find(item => item.path === pathname) || menuItems[0];

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex font-body text-gray-800 antialiased">
      {/* ------------------------------------------------------------- */}
      {/* FLOATING LIVE ALERT TOAST NOTIFICATION                         */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {activeToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed top-5 right-5 z-[9999] w-full max-w-md bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white rounded-2xl shadow-2xl border border-amber-500/40 p-5 backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-gray-950 flex items-center justify-center font-bold shadow-md animate-bounce">
                  <Sparkles className="w-5 h-5 text-gray-950" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                      🔔 NEW ENQUIRY
                    </span>
                    <span className="text-xs text-gray-400 font-medium">Just Now</span>
                  </div>
                  <h4 className="text-base font-bold font-heading text-white mt-0.5">
                    {activeToast.package_name}
                  </h4>
                </div>
              </div>

              <button
                onClick={() => setActiveToast(null)}
                className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Dismiss"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-3.5 pt-3.5 border-t border-gray-700/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
              <div className="flex items-center gap-1.5 truncate">
                <User className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span className="font-semibold text-white truncate">{activeToast.user_name}</span>
              </div>
              <div className="flex items-center gap-1.5 truncate">
                <Phone className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span className="truncate">{activeToast.user_phone}</span>
              </div>
              <div className="flex items-center gap-1.5 truncate sm:col-span-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span className="truncate">{activeToast.user_email}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 pt-2">
              <button
                onClick={() => setSoundMuted(!soundMuted)}
                className="text-xs text-gray-400 hover:text-gray-200 flex items-center gap-1 transition-colors"
                title={soundMuted ? "Unmute notification sound" : "Mute notification sound"}
              >
                {soundMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
                <span>{soundMuted ? "Sound Muted" : "Sound On"}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveToast(null)}
                  className="px-3 py-1.5 text-xs font-semibold text-gray-300 hover:text-white transition-colors"
                >
                  Dismiss
                </button>
                <Link
                  href="/admin/enquiries"
                  onClick={() => {
                    setActiveToast(null);
                    setUnreadNotifCount(0);
                    if (typeof document !== 'undefined') {
                      document.title = 'Jobiho CMS Admin Portal';
                    }
                  }}
                  className="px-4 py-1.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-gray-950 font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1"
                >
                  View Enquiry
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. DESKTOP SIDEBAR */}
      <aside 
        className={`hidden md:flex flex-col bg-[#1F2937] text-gray-300 border-r border-gray-800 transition-all duration-300 h-screen sticky top-0 z-30 ${
          sidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-800">
          <Link href="/tours-packages" className="flex items-center gap-2 overflow-hidden">
            {sidebarOpen ? (
              <Image
                src={asset("/jobiho-logo.png")}
                alt="Jobiho Logo"
                width={120}
                height={44}
                style={{ width: 'auto', height: 'auto' }}
                className="object-contain h-10 w-auto"
                priority
              />
            ) : (
              <Image
                src={asset("/jobiho only logo.png")}
                alt="Jobiho"
                width={32}
                height={32}
                style={{ width: 'auto', height: 'auto' }}
                className="object-contain h-8 w-8 min-w-[32px]"
              />
            )}
          </Link>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
          >
            <ChevronLeft className={`w-4 h-4 transition-transform duration-300 ${!sidebarOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 py-6 px-4 space-y-1.5 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = pathname === item.path || (item.path !== '/admin' && pathname.startsWith(item.path));
            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => {
                  if (item.path === '/admin/enquiries') {
                    setUnreadNotifCount(0);
                    if (typeof document !== 'undefined') {
                      document.title = 'Jobiho CMS Admin Portal';
                    }
                  }
                }}
                className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all group relative ${
                  isActive 
                    ? 'bg-[#1565C0] text-white shadow-md shadow-[#1565C0]/15' 
                    : 'hover:bg-gray-800 text-gray-400 hover:text-gray-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`} />
                  {sidebarOpen && <span>{item.name}</span>}
                </div>

                {/* Sidebar Notification Counter Badge */}
                {item.badge !== null && item.badge !== undefined && (
                  <span className={`px-2 py-0.5 rounded-full text-xs font-extrabold ${
                    isActive ? 'bg-amber-400 text-gray-950' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  }`}>
                    {sidebarOpen ? item.badge : ''}
                  </span>
                )}

                {!sidebarOpen && (
                  <span className="absolute left-full ml-2 px-2.5 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-lg">
                    {item.name} {item.badge ? `(${item.badge})` : ''}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        {sidebarOpen && (
          <div className="p-4 border-t border-gray-800 text-center">
            <p className="text-[11px] text-gray-500 font-medium">Jobiho CMS Portal v1.0</p>
          </div>
        )}
      </aside>

      {/* 2. MOBILE DRAWER SIDEBAR */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />
            <motion.aside 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed inset-y-0 left-0 w-64 bg-[#1F2937] text-gray-300 z-50 flex flex-col md:hidden shadow-2xl border-r border-gray-800"
            >
              <div className="h-16 flex items-center justify-between px-6 border-b border-gray-800">
                <Link href="/tours-packages" className="flex items-center gap-2">
                  <Image
                    src={asset("/jobiho-logo.png")}
                    alt="Jobiho Logo"
                    width={120}
                    height={44}
                    className="object-contain h-10 w-auto"
                    priority
                  />
                </Link>
                <button 
                  onClick={() => setMobileOpen(false)}
                  className="p-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 py-6 px-4 space-y-1.5 overflow-y-auto">
                {menuItems.map((item) => {
                  const isActive = pathname === item.path || (item.path !== '/admin' && pathname.startsWith(item.path));
                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      onClick={() => {
                        if (item.path === '/admin/enquiries') {
                          setUnreadNotifCount(0);
                          if (typeof document !== 'undefined') {
                            document.title = 'Jobiho CMS Admin Portal';
                          }
                        }
                      }}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all ${
                        isActive 
                          ? 'bg-[#1565C0] text-white shadow-md shadow-[#1565C0]/15' 
                          : 'hover:bg-gray-800 text-gray-400 hover:text-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        <span>{item.name}</span>
                      </div>
                      {item.badge && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-gray-950">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>

              <div className="p-4 border-t border-gray-800 text-center">
                <p className="text-[11px] text-gray-500 font-medium">Jobiho CMS Portal v1.0</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* 3. MAIN WORKSPACE */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* TOP HEADER */}
        <header className="h-16 bg-white border-b border-gray-100 px-6 flex items-center justify-between sticky top-0 z-20 shadow-sm">
          {/* Left: Mobile hamburger & Page Title */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setMobileOpen(true)}
              className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 md:hidden transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-bold font-heading text-gray-800 hidden sm:block">
              {currentMenuItem.name}
            </h1>
          </div>

          {/* Right Header Utilities: Sound Toggle, Notification Bell & Profile Dropdown */}
          <div className="flex items-center gap-3">
            {/* Sound Mute/Unmute Quick Button */}
            <button
              onClick={() => setSoundMuted(!soundMuted)}
              className={`p-2 rounded-xl border transition-colors ${
                soundMuted 
                  ? 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100' 
                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
              }`}
              title={soundMuted ? "Sound alerts muted (Click to unmute)" : "Sound alerts active (Click to mute)"}
            >
              {soundMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
            </button>

            {/* NOTIFICATION BELL DROPDOWN */}
            <div className="relative" ref={notifDropdownRef}>
              <button
                onClick={() => {
                  setNotifDropdownOpen(!notifDropdownOpen);
                  setDropdownOpen(false);
                  setUnreadNotifCount(0);
                  if (typeof document !== 'undefined') {
                    document.title = 'Jobiho CMS Admin Portal';
                  }
                }}
                className="relative p-2 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors text-gray-700"
                title="Notifications"
              >
                <Bell className="w-5 h-5" />
                {unreadNotifCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center shadow-md animate-pulse">
                    {unreadNotifCount}
                  </span>
                )}
              </button>

              {/* Notification Menu Panel */}
              <AnimatePresence>
                {notifDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 1 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2.5 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 overflow-hidden z-50 origin-top-right"
                  >
                    <div className="px-4 pb-3 border-b border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-gray-900 font-heading">Enquiry Alerts</span>
                        {pendingCount > 0 && (
                          <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">
                            {pendingCount} Pending
                          </span>
                        )}
                      </div>
                      {unreadNotifCount > 0 && (
                        <button
                          onClick={handleMarkAllNotifsRead}
                          className="text-xs font-semibold text-[#1565C0] hover:underline"
                        >
                          Mark read
                        </button>
                      )}
                    </div>

                    <div className="max-h-80 overflow-y-auto divide-y divide-gray-50">
                      {notifications.length === 0 ? (
                        <div className="p-6 text-center text-gray-400 space-y-1">
                          <Bell className="w-7 h-7 mx-auto text-gray-300" />
                          <p className="text-xs font-semibold">No recent enquiry alerts</p>
                          <p className="text-[11px] text-gray-400">New customer package enquiries will appear here instantly.</p>
                        </div>
                      ) : (
                        notifications.map((item) => (
                          <Link
                            key={item.id}
                            href="/admin/enquiries"
                            onClick={() => {
                              setNotifDropdownOpen(false);
                              setUnreadNotifCount(0);
                              if (typeof document !== 'undefined') {
                                document.title = 'Jobiho CMS Admin Portal';
                              }
                            }}
                            className="p-3.5 hover:bg-gray-50 flex items-start gap-3 transition-colors block"
                          >
                            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1565C0] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <MessageSquare className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0 space-y-0.5">
                              <p className="text-xs font-bold text-gray-900 truncate">{item.package_name}</p>
                              <p className="text-xs text-gray-600 truncate">{item.user_name} ({item.user_phone})</p>
                              <p className="text-[10px] text-gray-400 font-medium">
                                {new Date(item.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </p>
                            </div>
                          </Link>
                        ))
                      )}
                    </div>

                    <div className="pt-2 px-3 border-t border-gray-100 bg-gray-50/50 text-center">
                      <Link
                        href="/admin/enquiries"
                        onClick={() => {
                          setNotifDropdownOpen(false);
                          setUnreadNotifCount(0);
                          if (typeof document !== 'undefined') {
                            document.title = 'Jobiho CMS Admin Portal';
                          }
                        }}
                        className="block w-full py-2 text-xs font-bold text-[#1565C0] hover:bg-blue-50 rounded-xl transition-colors"
                      >
                        View All Enquiries Page →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => {
                  setDropdownOpen(!dropdownOpen);
                  setNotifDropdownOpen(false);
                }}
                className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-gray-50 transition-colors text-left"
              >
                <div className="w-9 h-9 rounded-full bg-[#1565C0]/10 text-[#1565C0] flex items-center justify-center font-bold text-sm shadow-inner overflow-hidden">
                  {profile?.profileImage ? (
                    <img src={profile.profileImage} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    profile?.name ? profile.name.charAt(0).toUpperCase() : 'A'
                  )}
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold text-gray-800 leading-tight">
                    {profile?.name || 'Admin'}
                  </p>
                  <p className="text-[11px] text-gray-400 font-medium leading-none">
                    {profile?.role || 'Super Administrator'}
                  </p>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2.5 w-52 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 py-1.5 overflow-hidden z-50 origin-top-right"
                  >
                    <Link 
                      href="/admin/profile"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                    >
                      <UserCircle className="w-4 h-4 text-gray-400" />
                      Profile
                    </Link>
                    <Link 
                      href="/admin/settings"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                    >
                      <Settings className="w-4 h-4 text-gray-400" />
                      Settings
                    </Link>
                    <div className="h-px bg-gray-100 my-1" />
                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        handleLogout();
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
