"use client";

import { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Search, 
  Filter, 
  RefreshCw, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  CheckCircle, 
  Clock3, 
  Archive, 
  Trash2, 
  Eye, 
  X, 
  Send,
  ExternalLink,
  ChevronRight,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Enquiry {
  id: number;
  package_id: number | null;
  package_name: string;
  package_slug: string | null;
  package_duration: string | null;
  package_price: string | null;
  user_name: string;
  user_email: string;
  user_phone: string;
  details: string | null;
  status: 'pending' | 'reviewed' | 'contacted' | 'archived';
  notes: string | null;
  created_at: string;
  updated_at: string;
}

interface Stats {
  total: number;
  pending: number;
  reviewed: number;
  contacted: number;
  archived: number;
}

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, pending: 0, reviewed: 0, contacted: 0, archived: 0 });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [adminNotes, setAdminNotes] = useState('');
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [newlyArrivedIds, setNewlyArrivedIds] = useState<number[]>([]);

  const fetchEnquiries = async (showLoading = true) => {
    if (showLoading) setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.append('search', search);
      if (statusFilter !== 'all') params.append('status', statusFilter);

      const res = await fetch(`/api/admin/enquiries?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setEnquiries(data.enquiries);
          setStats(data.stats);
        }
      }
    } catch (err) {
      console.error('Error fetching enquiries:', err);
    } finally {
      if (showLoading) setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries(true);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('mark-enquiries-read'));
    }
  }, [statusFilter]);

  // Listen for real-time enquiry broadcast from CMSLayout
  useEffect(() => {
    const handleNewEnquiryEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      fetchEnquiries(false);
      if (customEvent.detail?.newEnquiries && Array.isArray(customEvent.detail.newEnquiries)) {
        const newIds = customEvent.detail.newEnquiries.map((item: any) => item.id);
        setNewlyArrivedIds(prev => [...prev, ...newIds]);
        // Remove highlight after 12 seconds
        setTimeout(() => {
          setNewlyArrivedIds(prev => prev.filter(id => !newIds.includes(id)));
        }, 12000);
      }
    };

    window.addEventListener('new-enquiry-received', handleNewEnquiryEvent);
    return () => window.removeEventListener('new-enquiry-received', handleNewEnquiryEvent);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchEnquiries(true);
  };

  const handleStatusUpdate = async (id: number, newStatus: string, notesToSave?: string) => {
    setActionLoading(true);
    try {
      const res = await fetch(`/api/admin/enquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          status: newStatus, 
          notes: notesToSave !== undefined ? notesToSave : adminNotes 
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setNotification({ type: 'success', message: `Enquiry status updated to ${newStatus}` });
        if (selectedEnquiry && selectedEnquiry.id === id) {
          setSelectedEnquiry(prev => prev ? { ...prev, status: newStatus as any, notes: notesToSave !== undefined ? notesToSave : adminNotes } : null);
        }
        fetchEnquiries(false);
      } else {
        setNotification({ type: 'error', message: data.error || 'Failed to update enquiry' });
      }
    } catch (err) {
      console.error('Error updating enquiry status:', err);
      setNotification({ type: 'error', message: 'Failed to update enquiry' });
    } finally {
      setActionLoading(false);
      setTimeout(() => setNotification(null), 3000);
    }
  };

  const handleDeleteEnquiry = async (id: number) => {
    if (!confirm('Are you sure you want to delete this enquiry? This action cannot be undone.')) {
      return;
    }
    setActionLoading(true);
    try {
      const res = await fetch(`/api/admin/enquiries/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (res.ok && data.success) {
        setNotification({ type: 'success', message: 'Enquiry deleted successfully' });
        if (selectedEnquiry?.id === id) setSelectedEnquiry(null);
        fetchEnquiries(false);
      } else {
        setNotification({ type: 'error', message: data.error || 'Failed to delete enquiry' });
      }
    } catch (err) {
      console.error('Error deleting enquiry:', err);
      setNotification({ type: 'error', message: 'Failed to delete enquiry' });
    } finally {
      setActionLoading(false);
      setTimeout(() => setNotification(null), 3000);
    }
  };

  const openDetailModal = (enquiry: Enquiry) => {
    setSelectedEnquiry(enquiry);
    setAdminNotes(enquiry.notes || '');
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('mark-enquiries-read'));
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200"><Clock3 className="w-3.5 h-3.5" /> Pending</span>;
      case 'reviewed':
        return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200"><Eye className="w-3.5 h-3.5" /> Reviewed</span>;
      case 'contacted':
        return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200"><CheckCircle className="w-3.5 h-3.5" /> Contacted</span>;
      case 'archived':
        return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold border border-gray-200"><Archive className="w-3.5 h-3.5" /> Archived</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">{status}</span>;
    }
  };

  return (
    <div className="space-y-8 w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-[#1565C0] font-semibold mb-1">
            <MessageSquare className="w-4 h-4" />
            Customer Relations
          </div>
          <h1 className="text-3xl font-bold font-heading text-gray-900">Tour Package Enquiries</h1>
          <p className="text-gray-500 text-sm mt-1">
            Review, manage, and respond to incoming customer package inquiries sent via jobiho.com
          </p>
        </div>

        <button
          onClick={() => fetchEnquiries(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl text-sm font-semibold transition-all shadow-sm self-start md:self-auto"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh List
        </button>
      </div>

      {/* Toast Notification */}
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-xl text-sm font-semibold flex items-center justify-between shadow-md ${
            notification.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            {notification.message}
          </div>
          <button onClick={() => setNotification(null)} className="text-gray-500 hover:text-gray-700"><X className="w-4 h-4" /></button>
        </motion.div>
      )}

      {/* Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Enquiries</p>
          <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
        </div>

        <div 
          onClick={() => setStatusFilter('pending')}
          className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-1 ${
            statusFilter === 'pending' ? 'bg-amber-500 text-white border-amber-500 shadow-lg shadow-amber-500/20' : 'bg-white border-amber-100 hover:border-amber-300'
          }`}
        >
          <p className={`text-xs font-semibold uppercase tracking-wider ${statusFilter === 'pending' ? 'text-white/80' : 'text-amber-600'}`}>Pending Action</p>
          <p className={`text-2xl font-bold ${statusFilter === 'pending' ? 'text-white' : 'text-amber-900'}`}>{stats.pending}</p>
        </div>

        <div 
          onClick={() => setStatusFilter('reviewed')}
          className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-1 ${
            statusFilter === 'reviewed' ? 'bg-[#1565C0] text-white border-[#1565C0] shadow-lg shadow-[#1565C0]/20' : 'bg-white border-blue-100 hover:border-blue-300'
          }`}
        >
          <p className={`text-xs font-semibold uppercase tracking-wider ${statusFilter === 'reviewed' ? 'text-white/80' : 'text-blue-600'}`}>Reviewed</p>
          <p className={`text-2xl font-bold ${statusFilter === 'reviewed' ? 'text-white' : 'text-blue-900'}`}>{stats.reviewed}</p>
        </div>

        <div 
          onClick={() => setStatusFilter('contacted')}
          className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-1 ${
            statusFilter === 'contacted' ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-600/20' : 'bg-white border-emerald-100 hover:border-emerald-300'
          }`}
        >
          <p className={`text-xs font-semibold uppercase tracking-wider ${statusFilter === 'contacted' ? 'text-white/80' : 'text-emerald-600'}`}>Contacted</p>
          <p className={`text-2xl font-bold ${statusFilter === 'contacted' ? 'text-white' : 'text-emerald-900'}`}>{stats.contacted}</p>
        </div>

        <div 
          onClick={() => setStatusFilter('archived')}
          className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-1 ${
            statusFilter === 'archived' ? 'bg-gray-800 text-white border-gray-800 shadow-lg shadow-gray-800/20' : 'bg-white border-gray-200 hover:border-gray-300'
          }`}
        >
          <p className={`text-xs font-semibold uppercase tracking-wider ${statusFilter === 'archived' ? 'text-white/80' : 'text-gray-500'}`}>Archived</p>
          <p className={`text-2xl font-bold ${statusFilter === 'archived' ? 'text-white' : 'text-gray-900'}`}>{stats.archived}</p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <form onSubmit={handleSearchSubmit} className="relative w-full md:w-96">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by client name, email, phone, or package..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1565C0] focus:bg-white text-gray-900 transition-all"
          />
        </form>

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {['all', 'pending', 'reviewed', 'contacted', 'archived'].map((tab) => (
            <button
              key={tab}
              onClick={() => setStatusFilter(tab)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                statusFilter === tab
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-12 text-center space-y-3">
            <RefreshCw className="w-8 h-8 animate-spin text-[#1565C0] mx-auto" />
            <p className="text-gray-500 text-sm font-semibold">Loading enquiries...</p>
          </div>
        ) : enquiries.length === 0 ? (
          <div className="p-12 text-center space-y-3">
            <MessageSquare className="w-10 h-10 text-gray-300 mx-auto" />
            <p className="text-gray-800 text-base font-bold font-heading">No enquiries found</p>
            <p className="text-gray-500 text-sm max-w-sm mx-auto">
              There are no package enquiries matching your current search or status filter.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-100 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  <th className="py-4 px-6">Client Info</th>
                  <th className="py-4 px-6">Package Enquired</th>
                  <th className="py-4 px-6">Date & Time</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                {enquiries.map((enquiry) => {
                  const isJustIn = newlyArrivedIds.includes(enquiry.id);
                  return (
                    <tr 
                      key={enquiry.id} 
                      className={`transition-colors group cursor-pointer ${
                        isJustIn 
                          ? 'bg-amber-50/90 hover:bg-amber-100/90 border-l-4 border-l-amber-500' 
                          : 'hover:bg-gray-50/80'
                      }`}
                      onClick={() => openDetailModal(enquiry)}
                    >
                      <td className="py-4 px-6">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <p className="font-bold text-gray-900">{enquiry.user_name}</p>
                            {isJustIn && (
                              <span className="px-2 py-0.5 bg-amber-500 text-white text-[10px] font-extrabold rounded-full animate-pulse uppercase tracking-wider">
                                JUST IN
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-gray-400" /> {enquiry.user_email}</span>
                            <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-gray-400" /> {enquiry.user_phone}</span>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-6">
                        <div>
                          <p className="font-bold text-[#1565C0]">{enquiry.package_name}</p>
                          {enquiry.package_duration && (
                            <p className="text-xs text-gray-500">{enquiry.package_duration}</p>
                          )}
                        </div>
                      </td>

                      <td className="py-4 px-6 text-xs text-gray-500 whitespace-nowrap">
                        {new Date(enquiry.created_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>

                      <td className="py-4 px-6 whitespace-nowrap">
                        {getStatusBadge(enquiry.status)}
                      </td>

                      <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => openDetailModal(enquiry)}
                          className="p-2 rounded-lg bg-blue-50 text-[#1565C0] hover:bg-blue-100 transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        
                        <button
                          onClick={() => handleDeleteEnquiry(enquiry.id)}
                          className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                          title="Delete Enquiry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Enquiry Details Modal */}
      <AnimatePresence>
        {selectedEnquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEnquiry(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-8 border border-gray-100"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#1F2937] to-[#111827] text-white p-6 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Enquiry Details #{selectedEnquiry.id}
                  </div>
                  <h2 className="text-xl font-bold font-heading">{selectedEnquiry.package_name}</h2>
                  <p className="text-gray-400 text-xs mt-1">
                    Received on {new Date(selectedEnquiry.created_at).toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedEnquiry(null)}
                  className="p-1.5 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
                {/* Client Contact Box */}
                <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-5 space-y-3">
                  <h3 className="text-xs font-bold text-[#1565C0] uppercase tracking-wider">Client Contact Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-xs text-gray-500 font-semibold">Full Name</p>
                      <p className="font-bold text-gray-900">{selectedEnquiry.user_name}</p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 font-semibold">Email Address</p>
                      <a 
                        href={`mailto:${selectedEnquiry.user_email}`}
                        className="font-bold text-[#1565C0] hover:underline flex items-center gap-1"
                      >
                        {selectedEnquiry.user_email}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 font-semibold">Phone Number</p>
                      <a 
                        href={`tel:${selectedEnquiry.user_phone}`}
                        className="font-bold text-[#1565C0] hover:underline flex items-center gap-1"
                      >
                        {selectedEnquiry.user_phone}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Enquiry Details Message */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Customer Message / Requirements</h3>
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
                    {selectedEnquiry.details || 'No additional message was provided by the customer.'}
                  </div>
                </div>

                {/* Status Management */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Update Enquiry Status</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { key: 'pending', label: 'Pending', color: 'hover:bg-amber-50 hover:text-amber-700' },
                      { key: 'reviewed', label: 'Reviewed', color: 'hover:bg-blue-50 hover:text-blue-700' },
                      { key: 'contacted', label: 'Contacted', color: 'hover:bg-emerald-50 hover:text-emerald-700' },
                      { key: 'archived', label: 'Archived', color: 'hover:bg-gray-100 hover:text-gray-700' }
                    ].map((st) => (
                      <button
                        key={st.key}
                        disabled={actionLoading}
                        onClick={() => handleStatusUpdate(selectedEnquiry.id, st.key)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                          selectedEnquiry.status === st.key
                            ? 'bg-gray-900 text-white border-gray-900 shadow-sm'
                            : `bg-white text-gray-600 border-gray-200 ${st.color}`
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Admin Internal Notes */}
                <div className="space-y-2 pt-2">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Admin Internal Notes</h3>
                  <textarea
                    rows={3}
                    placeholder="Add private staff notes regarding phone calls, quotes sent, or next follow-up dates..."
                    value={adminNotes}
                    onChange={(e) => setAdminNotes(e.target.value)}
                    className="w-full p-3.5 rounded-xl border border-gray-200 focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/15 text-sm outline-none text-gray-800"
                  />
                  <div className="flex justify-end">
                    <button
                      disabled={actionLoading}
                      onClick={() => handleStatusUpdate(selectedEnquiry.id, selectedEnquiry.status, adminNotes)}
                      className="px-4 py-2 bg-[#1565C0] hover:bg-[#0D47A1] text-white text-xs font-bold rounded-xl transition-all shadow-sm"
                    >
                      Save Admin Notes
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal Footer Quick Reply Options */}
              <div className="p-5 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => handleDeleteEnquiry(selectedEnquiry.id)}
                  className="px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                >
                  Delete Enquiry
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${selectedEnquiry.user_phone}`}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call Client
                  </a>
                  <a
                    href={`mailto:${selectedEnquiry.user_email}?subject=RE: Enquiry for ${encodeURIComponent(selectedEnquiry.package_name)}`}
                    className="px-4 py-2 bg-[#1565C0] hover:bg-[#0D47A1] text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Send Email
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
