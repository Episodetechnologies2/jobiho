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
  UserCircle 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { BASE_PATH, asset } from '@/lib/basePath';

export default function CMSLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fetch admin profile for dynamic header info
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

  // Click outside detection for user dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
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

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Tour & Packages', path: '/admin/tour-packages', icon: Map },
    { name: 'Profile', path: '/admin/profile', icon: User },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  const currentMenuItem = menuItems.find(item => item.path === pathname) || menuItems[0];

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex font-body text-gray-800 antialiased">
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
              <>
                <Image
                  src={asset("/jobiho-logo.png")}
                  alt="Jobiho Logo"
                  width={120}
                  height={44}
                  className="object-contain h-10 w-auto"
                  priority
                />
              </>
            ) : (
              <Image
                src={asset("/jobiho only logo.png")}
                alt="Jobiho"
                width={32}
                height={32}
                className="object-contain h-8 w-8 min-w-[32px]"
                priority
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
                className={`flex items-center gap-4 px-3.5 py-3 rounded-xl text-sm font-semibold transition-all group relative ${
                  isActive 
                    ? 'bg-[#1565C0] text-white shadow-md shadow-[#1565C0]/15' 
                    : 'hover:bg-gray-800 text-gray-400 hover:text-gray-200'
                }`}
              >
                <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`} />
                {sidebarOpen && <span>{item.name}</span>}
                {!sidebarOpen && (
                  <span className="absolute left-full ml-2 px-2.5 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-lg">
                    {item.name}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer / Quick Info */}
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
                      className={`flex items-center gap-4 px-3.5 py-3 rounded-xl text-sm font-semibold transition-all ${
                        isActive 
                          ? 'bg-[#1565C0] text-white shadow-md shadow-[#1565C0]/15' 
                          : 'hover:bg-gray-800 text-gray-400 hover:text-gray-200'
                      }`}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      <span>{item.name}</span>
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

          {/* Right: Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
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
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
