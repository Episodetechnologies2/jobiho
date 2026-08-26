"use client";

import { useState } from 'react';
import { Settings, Shield, Bell, Database, Save } from 'lucide-react';
import { toast } from 'sonner';

export default function SettingsPage() {
  const [siteName, setSiteName] = useState('Jobiho Tours & Packages');
  const [enableMaintenance, setEnableMaintenance] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState('24h');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Configuration settings saved successfully!');
  };

  return (
    <div className="max-w-2xl font-semibold text-gray-700">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden p-6 space-y-6">
        <div className="flex items-center gap-3 border-b border-gray-50 pb-4">
          <Settings className="w-5 h-5 text-[#1565C0]" />
          <div>
            <h3 className="text-base font-bold font-heading text-gray-800">Portal Configurations</h3>
            <p className="text-xs text-gray-400 font-medium">Manage CMS system preferences and configurations.</p>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-5">
          {/* General Site Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Portal Branding Title</label>
            <input
              type="text"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Session Expiry */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Admin Session Expiry</label>
              <select
                value={sessionTimeout}
                onChange={(e) => setSessionTimeout(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0] font-semibold text-gray-700"
              >
                <option value="2h">2 Hours</option>
                <option value="12h">12 Hours</option>
                <option value="24h">24 Hours (Recommended)</option>
                <option value="7d">7 Days</option>
              </select>
            </div>

            {/* DB Port (Read-only) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Active DB Port connection</label>
              <input
                type="text"
                disabled
                value="3307 (MySQL)"
                className="w-full px-4 py-2.5 bg-gray-100 border border-gray-200 rounded-xl text-sm text-gray-400 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Toggle Maintenance Mode */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
            <div className="space-y-0.5">
              <p className="text-sm font-bold text-gray-800">Under Maintenance Mode</p>
              <p className="text-xs text-gray-400 font-medium">Temporarily disable public access to map packages while updating.</p>
            </div>
            <button
              type="button"
              onClick={() => setEnableMaintenance(!enableMaintenance)}
              className={`w-12 h-6 rounded-full p-0.5 transition-colors focus:outline-none ${
                enableMaintenance ? 'bg-[#1565C0]' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  enableMaintenance ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-[#1565C0] hover:bg-[#0D47A1] text-white font-semibold py-2.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <Save className="w-4.5 h-4.5" />
            Save Configurations
          </button>
        </form>
      </div>
    </div>
  );
}
