"use client";

import { UserCircle, Shield, Mail, Calendar } from 'lucide-react';

export default function ProfilePage() {
  const profile = {
    name: 'Administrator',
    email: 'admin@jobiho.com',
    role: 'Super Administrator',
    createdDate: 'August 15, 2026'
  };

  return (
    <div className="max-w-2xl font-semibold text-gray-700">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Banner banner background */}
        <div className="h-32 bg-gradient-to-r from-[#1565C0] to-[#0D47A1] relative" />
        
        {/* Content area */}
        <div className="px-6 pb-6 relative">
          {/* Avatar floating */}
          <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center font-extrabold text-3xl text-[#1565C0] absolute top-[-48px] left-6">
            A
          </div>

          <div className="pt-20 space-y-6">
            {/* Title / Name */}
            <div>
              <h3 className="text-xl font-bold font-heading text-gray-800">{profile.name}</h3>
              <p className="text-xs text-gray-400 font-medium">{profile.role}</p>
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
        </div>
      </div>
    </div>
  );
}
