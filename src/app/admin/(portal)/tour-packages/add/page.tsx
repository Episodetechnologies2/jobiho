"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TourPackageForm from '@/components/cms/TourPackageForm';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

import { BASE_PATH } from '@/lib/basePath';

export default function AddTourPackagePage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (formData: any) => {
    setSubmitting(true);
    try {
      const res = await fetch(`${BASE_PATH}/api/tour-packages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to create tour package');
      }

      toast.success('Tour package added successfully!');
      router.push('/admin/tour-packages');
      router.refresh();
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong while saving');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/tour-packages" 
          className="p-2 rounded-xl hover:bg-white border border-transparent hover:border-gray-100 shadow-sm text-gray-500 hover:text-gray-800 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h2 className="text-xl font-bold font-heading text-gray-800">Add New Tour & Package</h2>
          <p className="text-xs text-gray-500 mt-0.5">Configure and publish a new package to the directory.</p>
        </div>
      </div>

      {/* Form */}
      <TourPackageForm 
        onSubmit={handleSubmit} 
        loading={submitting} 
        submitLabel="Create Tour Package" 
      />
    </div>
  );
}
