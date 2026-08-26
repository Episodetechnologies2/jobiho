"use client";

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import TourPackageForm from '@/components/cms/TourPackageForm';
import { ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';
import { BASE_PATH } from '@/lib/basePath';

interface EditPageProps {
  params: Promise<{ id: string }>;
}

export default function EditTourPackagePage({ params }: EditPageProps) {
  const router = useRouter();
  const { id } = use(params);
  const [tourData, setTourData] = useState<any>(null);
  const [fetching, setFetching] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Load existing data
  useEffect(() => {
    const fetchTourData = async () => {
      try {
        setFetching(true);
        const res = await fetch(`${BASE_PATH}/api/tour-packages/${id}`);
        if (!res.ok) throw new Error('Failed to fetch package details');
        const data = await res.json();
        setTourData(data);
      } catch (err: any) {
        toast.error(err.message || 'Could not load package details');
        router.push('/admin/tour-packages');
      } finally {
        setFetching(false);
      }
    };
    fetchTourData();
  }, [id, router]);

  const handleSubmit = async (formData: any) => {
    setSubmitting(true);
    try {
      const res = await fetch(`${BASE_PATH}/api/tour-packages/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to update tour package');
      }

      toast.success('Tour package updated successfully!');
      router.push('/admin/tour-packages');
      router.refresh();
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong while saving changes');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 font-semibold text-gray-700">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/tour-packages" 
          className="p-2 rounded-xl hover:bg-white border border-transparent hover:border-gray-100 shadow-sm text-gray-500 hover:text-gray-800 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h2 className="text-xl font-bold font-heading text-gray-800">Edit Tour & Package</h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Modify details for {fetching ? 'loading...' : tourData ? `"${tourData.name}"` : ''}.
          </p>
        </div>
      </div>

      {fetching ? (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 flex flex-col items-center justify-center gap-3">
          <Loader2 className="w-8 h-8 text-[#1565C0] animate-spin" />
          <p className="text-sm font-semibold text-gray-500">Loading package details...</p>
        </div>
      ) : tourData ? (
        <TourPackageForm 
          initialData={tourData}
          onSubmit={handleSubmit} 
          loading={submitting} 
          submitLabel="Save Changes" 
        />
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 text-center text-gray-400">
          Package not found.
        </div>
      )}
    </div>
  );
}
