"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Plus, 
  Search, 
  MapPin, 
  Clock, 
  DollarSign, 
  Eye, 
  Edit3, 
  Trash2, 
  Globe, 
  FileEdit,
  Loader2,
  AlertTriangle,
  Check,
  X
} from 'lucide-react';
import { toast } from 'sonner';
import { BASE_PATH, asset } from '@/lib/basePath';

interface TourPackage {
  id: number;
  slug: string;
  name: string;
  country: string;
  region: string;
  tag: string;
  tag_color: string;
  thumbnail_image: string;
  status: 'published' | 'draft';
  price: string;
  duration: string;
  updated_at: string;
}

export default function TourPackagesPage() {
  const [tours, setTours] = useState<TourPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [regionFilter, setRegionFilter] = useState('all');

  // Delete modal state
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [tourToDelete, setTourToDelete] = useState<TourPackage | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Dynamic regions list & modal states
  const [regionsList, setRegionsList] = useState<{ id: number; name: string }[]>([]);
  const [manageRegionsOpen, setManageRegionsOpen] = useState(false);
  const [newRegionName, setNewRegionName] = useState('');
  const [addRegionLoading, setAddRegionLoading] = useState(false);
  
  // Region editing states
  const [editingRegionId, setEditingRegionId] = useState<number | null>(null);
  const [editingRegionName, setEditingRegionName] = useState('');
  const [saveRegionLoading, setSaveRegionLoading] = useState(false);

  // Region deleting state
  const [deletingRegionId, setDeletingRegionId] = useState<number | null>(null);
  const [deleteRegionLoading, setDeleteRegionLoading] = useState(false);

  const fetchRegions = async () => {
    try {
      const res = await fetch(`${BASE_PATH}/api/regions`);
      if (!res.ok) throw new Error('Failed to fetch regions');
      const data = await res.json();
      setRegionsList(data);
    } catch (err: any) {
      console.error('Failed to load regions:', err);
    }
  };

  // Fetch all tours
  const fetchTours = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_PATH}/api/tour-packages`);
      if (!res.ok) throw new Error('Failed to fetch packages');
      const data = await res.json();
      setTours(data);
    } catch (err: any) {
      toast.error(err.message || 'Could not load tour packages');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
    fetchRegions();
  }, []);

  const handleAddRegion = async () => {
    if (!newRegionName.trim()) return;
    setAddRegionLoading(true);
    try {
      const res = await fetch(`${BASE_PATH}/api/regions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newRegionName })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to add region');
      }
      toast.success(`Region "${newRegionName}" added successfully!`);
      setNewRegionName('');
      fetchRegions();
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong while adding region');
    } finally {
      setAddRegionLoading(false);
    }
  };

  const handleRenameRegion = async (id: number) => {
    if (!editingRegionName.trim()) return;
    setSaveRegionLoading(true);
    try {
      const res = await fetch(`${BASE_PATH}/api/regions/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: editingRegionName })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to rename region');
      }
      toast.success(`Region renamed to "${editingRegionName}" successfully!`);
      setEditingRegionId(null);
      setEditingRegionName('');
      fetchRegions();
      fetchTours();
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong while renaming region');
    } finally {
      setSaveRegionLoading(false);
    }
  };

  const handleDeleteRegion = async (id: number) => {
    setDeleteRegionLoading(true);
    try {
      const res = await fetch(`${BASE_PATH}/api/regions/${id}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to delete region');
      }
      toast.success('Region deleted successfully!');
      setDeletingRegionId(null);
      fetchRegions();
      fetchTours();
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong while deleting region');
    } finally {
      setDeleteRegionLoading(false);
    }
  };

  // Filter handlers
  const filteredTours = tours.filter((tour) => {
    const matchesSearch = 
      tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.region.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || tour.status === statusFilter;
    const matchesRegion = regionFilter === 'all' || tour.region === regionFilter;

    return matchesSearch && matchesStatus && matchesRegion;
  });

  // Unique regions for filter dropdown (includes loaded database regions + any ad-hoc package regions)
  const uniqueRegions = Array.from(new Set([
    ...regionsList.map((r) => r.name),
    ...tours.map((t) => t.region).filter(Boolean)
  ])).filter(Boolean).sort();

  // Toggle status (published <-> draft)
  const handleToggleStatus = async (tour: TourPackage) => {
    const newStatus = tour.status === 'published' ? 'draft' : 'published';
    try {
      const res = await fetch(`${BASE_PATH}/api/tour-packages/${tour.id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });

      if (!res.ok) throw new Error('Failed to update status');

      // Update state local copy
      setTours(prev => prev.map(t => t.id === tour.id ? { ...t, status: newStatus } : t));
      toast.success(`Package "${tour.name}" is now ${newStatus}`);
    } catch (err: any) {
      toast.error('Failed to change package status');
    }
  };

  // Trigger delete modal
  const openDeleteModal = (tour: TourPackage) => {
    setTourToDelete(tour);
    setDeleteModalOpen(true);
  };

  // Perform delete operation
  const handleDelete = async () => {
    if (!tourToDelete) return;
    setDeleteLoading(true);
    try {
      const res = await fetch(`${BASE_PATH}/api/tour-packages/${tourToDelete.id}`, {
        method: 'DELETE'
      });

      if (!res.ok) throw new Error('Failed to delete package');

      setTours(prev => prev.filter(t => t.id !== tourToDelete.id));
      toast.success(`Package "${tourToDelete.name}" deleted successfully`);
      setDeleteModalOpen(false);
      setTourToDelete(null);
    } catch (err: any) {
      toast.error(err.message || 'Failed to delete package');
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold font-heading text-gray-800">Tour & Packages</h2>
          <p className="text-sm text-gray-500 mt-1">Manage all tour and package content displayed on the website.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setManageRegionsOpen(true)}
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 text-sm font-semibold px-4.5 py-3 rounded-xl shadow-sm transition-all whitespace-nowrap cursor-pointer"
          >
            <Globe className="w-4 h-4 text-gray-500" />
            Manage Regions
          </button>
          <Link 
            href="/admin/tour-packages/add"
            className="inline-flex items-center gap-2 bg-[#1565C0] hover:bg-[#0D47A1] text-white text-sm font-semibold px-4.5 py-3 rounded-xl shadow-sm transition-all whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            Add Tour & Package
          </Link>
        </div>
      </div>

      {/* 2. SEARCH & FILTER CONTROLS */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 w-4 h-4 self-center" />
          <input
            type="text"
            placeholder="Search by tour name, country, or region..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0] text-gray-800 font-medium"
          />
        </div>

        {/* Region Filter */}
        <div className="w-full md:w-48">
          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0] text-gray-700 font-semibold"
          >
            <option value="all">All Regions</option>
            {uniqueRegions.map((region) => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div className="w-full md:w-44">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0] text-gray-700 font-semibold"
          >
            <option value="all">All Statuses</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>

      {/* 3. TABLE / CARD GRID */}
      {loading ? (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 flex flex-col items-center justify-center gap-3">
          <Loader2 className="w-8 h-8 text-[#1565C0] animate-spin" />
          <p className="text-sm font-semibold text-gray-500">Loading tour packages...</p>
        </div>
      ) : filteredTours.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 text-center">
          <p className="text-gray-400 font-medium">No tour packages match your filters.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-xs font-bold uppercase tracking-wider text-gray-500">
                  <th className="px-6 py-4 w-20">Thumbnail</th>
                  <th className="px-6 py-4">Tour Name</th>
                  <th className="px-6 py-4">Destination</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Duration</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Last Updated</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-gray-600 font-semibold">
                {filteredTours.map((tour) => (
                  <tr key={tour.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 border border-gray-100 relative">
                        <img 
                          src={asset(tour.thumbnail_image || '/images/hero-destinations.jpg')} 
                          alt={tour.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-3 text-gray-800 font-bold">{tour.name}</td>
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                        <span>{tour.country}, {tour.region}</span>
                      </div>
                    </td>
                    <td className="px-6 py-3">
                      <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${tour.tag_color ? `${tour.tag_color} text-white` : 'bg-slate-100 text-slate-700'}`}>
                        {tour.tag || 'N/A'}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-xs">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        <span>{tour.duration || 'N/A'}</span>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-xs text-[#1565C0]">
                      {tour.price ? (
                        <div className="flex items-center">
                          <span>{tour.price}</span>
                        </div>
                      ) : (
                        <span className="text-gray-400">N/A</span>
                      )}
                    </td>
                    <td className="px-6 py-3">
                      <button
                        onClick={() => handleToggleStatus(tour)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-all border cursor-pointer hover:scale-105 ${
                          tour.status === 'published' 
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100' 
                            : 'bg-amber-50 text-amber-700 border-amber-100 hover:bg-amber-100'
                        }`}
                      >
                        {tour.status === 'published' ? (
                          <>
                            <Globe className="w-3.5 h-3.5" />
                            Published
                          </>
                        ) : (
                          <>
                            <FileEdit className="w-3.5 h-3.5" />
                            Draft
                          </>
                        )}
                      </button>
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-400 font-normal">
                      {new Date(tour.updated_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-3">
                      <div className="flex items-center justify-center gap-2">
                        {/* View public page */}
                        <Link
                          href={`/tours-packages/${tour.slug}`}
                          target="_blank"
                          className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-[#1565C0] transition-colors"
                          title="View on site"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        {/* Edit */}
                        <Link
                          href={`/admin/tour-packages/edit/${tour.id}`}
                          className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-amber-600 transition-colors"
                          title="Edit"
                        >
                          <Edit3 className="w-4 h-4" />
                        </Link>
                        {/* Delete */}
                        <button
                          onClick={() => openDeleteModal(tour)}
                          className="p-1.5 rounded-lg hover:bg-red-50 text-gray-500 hover:text-red-600 transition-colors cursor-pointer"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Grid/Card View */}
          <div className="block lg:hidden divide-y divide-gray-100">
            {filteredTours.map((tour) => (
              <div key={tour.id} className="p-4 flex flex-col gap-4 font-semibold text-gray-700">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 border border-gray-100 flex-shrink-0 relative">
                    <img 
                      src={asset(tour.thumbnail_image || '/images/hero-destinations.jpg')} 
                      alt={tour.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-gray-800 truncate">{tour.name}</h4>
                    <p className="text-xs text-gray-400 mt-0.5">{tour.country}, {tour.region}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${tour.tag_color ? `${tour.tag_color} text-white` : 'bg-slate-100 text-slate-700'}`}>
                        {tour.tag || 'N/A'}
                      </span>
                      <span className="text-[11px] text-gray-500 font-medium">{tour.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-gray-50 rounded-xl p-2.5">
                  <div className="text-xs">
                    <span className="text-gray-400 font-normal">Price: </span>
                    <span className="text-[#1565C0] font-bold">{tour.price || 'N/A'}</span>
                  </div>
                  <button
                    onClick={() => handleToggleStatus(tour)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border cursor-pointer ${
                      tour.status === 'published' 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                        : 'bg-amber-50 text-amber-700 border-amber-100'
                    }`}
                  >
                    {tour.status === 'published' ? 'Published' : 'Draft'}
                  </button>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <Link
                    href={`/tours-packages/${tour.slug}`}
                    target="_blank"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    View
                  </Link>
                  <Link
                    href={`/admin/tour-packages/edit/${tour.id}`}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    Edit
                  </Link>
                  <button
                    onClick={() => openDeleteModal(tour)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-red-100 bg-red-50 text-xs font-semibold text-red-600 hover:bg-red-100 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. DESTRUCTIVE DELETE CONFIRMATION MODAL */}
      {deleteModalOpen && tourToDelete && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-gray-100 relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center gap-3.5 mb-4 text-red-600">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-gray-800">Delete Tour & Package?</h3>
            </div>

            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Are you sure you want to delete <span className="font-bold text-gray-800">"{tourToDelete.name}"</span>?
              This action will remove the package and all its itineraries, things to do, tips, and images. This action cannot be undone.
            </p>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setDeleteModalOpen(false)}
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={deleteLoading}
                onClick={handleDelete}
                className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white text-sm font-semibold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
              >
                {deleteLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. MANAGE REGIONS MODAL */}
      {manageRegionsOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-gray-100 relative animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3 text-[#1565C0]">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-[#1565C0]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-gray-800">Manage Regions</h3>
                  <p className="text-xs text-gray-400 font-medium">Add, rename or delete travel regions</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setManageRegionsOpen(false);
                  setEditingRegionId(null);
                  setDeletingRegionId(null);
                }}
                className="p-1.5 hover:bg-gray-100 text-gray-400 hover:text-gray-600 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Add Inline Form */}
            <div className="py-4 border-b border-gray-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Add New Region</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. Oceania, Central America"
                  value={newRegionName}
                  onChange={(e) => setNewRegionName(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0] text-gray-800 font-medium"
                />
                <button
                  type="button"
                  disabled={addRegionLoading || !newRegionName.trim()}
                  onClick={handleAddRegion}
                  className="px-4 py-2.5 rounded-xl bg-[#1565C0] hover:bg-[#0D47A1] disabled:bg-gray-300 text-white text-sm font-semibold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer whitespace-nowrap"
                >
                  {addRegionLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                  Add
                </button>
              </div>
            </div>

            {/* Regions List (Scrollable) */}
            <div className="flex-1 overflow-y-auto py-4 space-y-2 max-h-[40vh] pr-1">
              {regionsList.length === 0 ? (
                <div className="text-center py-8 text-gray-400 font-medium text-sm">
                  No regions configured yet.
                </div>
              ) : (
                regionsList.map((r) => {
                  const isEditing = editingRegionId === r.id;
                  const isDeleting = deletingRegionId === r.id;

                  return (
                    <div
                      key={r.id}
                      className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors"
                    >
                      {isEditing ? (
                        <div className="flex items-center gap-2 flex-1 mr-2">
                          <input
                            type="text"
                            value={editingRegionName}
                            onChange={(e) => setEditingRegionName(e.target.value)}
                            className="flex-1 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:border-[#1565C0] font-medium"
                          />
                          <button
                            type="button"
                            disabled={saveRegionLoading || !editingRegionName.trim()}
                            onClick={() => handleRenameRegion(r.id)}
                            className="p-1.5 hover:bg-emerald-50 text-emerald-600 rounded-lg transition-colors cursor-pointer"
                            title="Save"
                          >
                            {saveRegionLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setEditingRegionId(null);
                              setEditingRegionName('');
                            }}
                            className="p-1.5 hover:bg-red-50 text-red-600 rounded-lg transition-colors cursor-pointer"
                            title="Cancel"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : isDeleting ? (
                        <div className="flex items-center justify-between flex-1">
                          <span className="text-xs text-red-600 font-semibold leading-tight pr-2">
                            Delete "{r.name}"? Tours will be set to empty region.
                          </span>
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              disabled={deleteRegionLoading}
                              onClick={() => handleDeleteRegion(r.id)}
                              className="px-2.5 py-1.5 bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white rounded-lg text-xs font-semibold cursor-pointer flex items-center gap-1"
                            >
                              {deleteRegionLoading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                              Confirm
                            </button>
                            <button
                              type="button"
                              onClick={() => setDeletingRegionId(null)}
                              className="px-2.5 py-1.5 border border-gray-200 bg-white hover:bg-gray-50 text-gray-500 rounded-lg text-xs font-semibold cursor-pointer"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <span className="text-sm font-bold text-gray-800">{r.name}</span>
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => {
                                setEditingRegionId(r.id);
                                setEditingRegionName(r.name);
                                setDeletingRegionId(null);
                              }}
                              className="p-1.5 hover:bg-gray-100 text-gray-500 hover:text-amber-600 rounded-lg transition-colors cursor-pointer"
                              title="Rename"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setDeletingRegionId(r.id);
                                setEditingRegionId(null);
                              }}
                              className="p-1.5 hover:bg-red-50 text-gray-500 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-gray-100 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setManageRegionsOpen(false);
                  setEditingRegionId(null);
                  setDeletingRegionId(null);
                }}
                className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
