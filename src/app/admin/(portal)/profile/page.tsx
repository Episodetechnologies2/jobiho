"use client";

import { useState, useEffect, useRef } from 'react';
import { Shield, Mail, Calendar, Edit2, Camera, Loader2, Save, X } from 'lucide-react';
import { toast } from 'sonner';

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [profileImage, setProfileImage] = useState('');
  
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await fetch('/api/admin/profile');
      const data = await res.json();
      if (res.ok && data.success) {
        setProfile(data.profile);
        setName(data.profile.name);
        setEmail(data.profile.email);
        setRole(data.profile.role);
        setProfileImage(data.profile.profileImage || '');
      } else {
        toast.error(data.message || 'Failed to load profile');
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to load profile data');
    } finally {
      setLoading(false);
    }
  };

  const handleAvatarClick = () => {
    if (isEditing && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setUploading(true);
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.url) {
        setProfileImage(data.url);
        toast.success('Image uploaded successfully!');
      } else {
        toast.error(data.error || 'Failed to upload image');
      }
    } catch (err) {
      console.error(err);
      toast.error('An error occurred during file upload');
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !role.trim()) {
      toast.error('All fields are required');
      return;
    }

    setSaving(true);
    try {
      const res = await fetch('/api/admin/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, role, profileImage }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setProfile(data.profile);
        setIsEditing(false);
        toast.success('Profile updated successfully!');
        
        // Reload page to refresh sidebar/header session data if key details changed
        if (email !== profile.email || name !== profile.name || role !== profile.role || profileImage !== (profile.profileImage || '')) {
          window.location.reload();
        }
      } else {
        toast.error(data.message || 'Failed to update profile');
      }
    } catch (err) {
      console.error(err);
      toast.error('An error occurred. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-2xl bg-white rounded-2xl border border-gray-100 shadow-sm p-12 flex flex-col items-center justify-center gap-3 font-semibold">
        <Loader2 className="w-8 h-8 text-[#1565C0] animate-spin" />
        <span className="text-sm text-gray-400">Loading profile configurations...</span>
      </div>
    );
  }

  return (
    <div className="max-w-2xl font-semibold text-gray-700">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Banner background */}
        <div className="h-32 bg-gradient-to-r from-[#1565C0] to-[#0D47A1] relative" />
        
        {/* Content area */}
        <div className="px-6 pb-6 relative">
          {/* Avatar floating */}
          <div 
            onClick={handleAvatarClick}
            className={`w-24 h-24 rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center overflow-hidden absolute top-[-48px] left-6 group ${
              isEditing ? 'cursor-pointer hover:opacity-90' : ''
            }`}
          >
            {uploading ? (
              <Loader2 className="w-8 h-8 text-[#1565C0] animate-spin" />
            ) : profileImage ? (
              <img src={profileImage} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-[#1565C0] flex items-center justify-center font-extrabold text-3xl text-white">
                {name ? name[0].toUpperCase() : 'A'}
              </div>
            )}
            
            {isEditing && !uploading && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-6 h-6 text-white" />
              </div>
            )}
          </div>

          {isEditing ? (
            /* Editing Mode Form */
            <form onSubmit={handleSave} className="pt-20 space-y-6">
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept="image/*" 
              />
              
              <div className="grid grid-cols-1 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0] font-semibold text-gray-800"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0] font-semibold text-gray-800"
                  />
                </div>

                {/* Account Privilege Role */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Account Privilege Role</label>
                  <input
                    type="text"
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0] font-semibold text-gray-800"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <button
                  type="submit"
                  disabled={saving || uploading}
                  className="bg-[#1565C0] hover:bg-[#0D47A1] disabled:bg-gray-300 text-white font-semibold py-2 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  {saving ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Save Changes
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setName(profile.name);
                    setEmail(profile.email);
                    setRole(profile.role);
                    setProfileImage(profile.profileImage || '');
                  }}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-all cursor-pointer border border-gray-200"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            /* Read-only Mode Display */
            <div className="pt-20 space-y-6">
              {/* Name & Edit Button */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold font-heading text-gray-800">{profile.name}</h3>
                  <p className="text-xs text-gray-400 font-medium">{profile.role}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="px-3.5 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl text-xs font-bold text-[#1565C0] flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  Edit Profile
                </button>
              </div>

              <div className="h-px bg-gray-100" />

              {/* Profile fields list */}
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 flex-shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Email Address</p>
                    <p className="text-sm font-semibold text-gray-800">{profile.email}</p>
                  </div>
                </div>

                {/* Role */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 flex-shrink-0">
                    <Shield className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Account Privilege Role</p>
                    <p className="text-sm font-semibold text-gray-800">{profile.role}</p>
                  </div>
                </div>

                {/* Member Since */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 flex-shrink-0">
                    <Calendar className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Member Since</p>
                    <p className="text-sm font-semibold text-gray-800">{profile.createdDate}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
