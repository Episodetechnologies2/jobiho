"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MapPin, Clock, Tag, CheckCircle2, AlertCircle, Loader2, Sparkles, User, Mail, Phone, MessageSquare } from 'lucide-react';

export interface PackageDetails {
  id?: number | string;
  name: string;
  slug?: string;
  country?: string;
  region?: string;
  duration?: string;
  price?: string;
  heroImage?: string;
  thumbnailImage?: string;
}

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageDetails: PackageDetails;
}

export default function EnquireModal({ isOpen, onClose, packageDetails }: EnquireModalProps) {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userPhone: '',
    details: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.userName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.userEmail.trim()) {
      setErrorMessage('Please enter your email address.');
      return;
    }
    if (!formData.userPhone.trim()) {
      setErrorMessage('Please enter your phone number.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userName: formData.userName,
          userEmail: formData.userEmail,
          userPhone: formData.userPhone,
          details: formData.details,
          packageId: packageDetails.id,
          packageName: packageDetails.name,
          packageSlug: packageDetails.slug,
          packageDuration: packageDetails.duration,
          packagePrice: packageDetails.price,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err) {
      console.error('Enquiry submission error:', err);
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setErrorMessage('');
    setFormData({ userName: '', userEmail: '', userPhone: '', details: '' });
    onClose();
  };

  if (!isOpen) return null;

  const bgImage = packageDetails.heroImage || packageDetails.thumbnailImage || '/images/default-tour.jpg';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="fixed inset-0 bg-black/65 backdrop-blur-md transition-opacity"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-100 my-8"
        >
          {/* Close Button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header with Package Banner */}
          <div className="relative h-44 bg-gradient-to-r from-[#1565C0] to-[#0D47A1] text-white p-6 flex flex-col justify-end overflow-hidden">
            {bgImage && (
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
                style={{ backgroundImage: `url(${bgImage})` }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D47A1] via-[#0D47A1]/60 to-transparent" />
            
            <div className="relative z-10 space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-amber-300 text-xs font-semibold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                Package Enquiry
              </div>
              <h2 className="text-2xl font-bold font-heading leading-tight text-white">
                {packageDetails.name}
              </h2>
              
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-xs pt-1">
                {packageDetails.country && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {packageDetails.country} {packageDetails.region ? `(${packageDetails.region})` : ''}
                  </span>
                )}
                {packageDetails.duration && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {packageDetails.duration}
                  </span>
                )}
                {packageDetails.price && (
                  <span className="flex items-center gap-1 font-semibold text-amber-300">
                    <Tag className="w-3.5 h-3.5 text-amber-400" />
                    ₹{packageDetails.price}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 bg-white">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-gray-900">Enquiry Submitted!</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-gray-800">{formData.userName}</strong>. Your enquiry details for <strong>"{packageDetails.name}"</strong> have been sent to our travel experts at <span className="text-[#1565C0] font-semibold">info@jobiho.com</span>. We will reach out to you shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleResetAndClose}
                    className="px-6 py-2.5 bg-[#1565C0] hover:bg-[#0D47A1] text-white text-sm font-semibold rounded-xl transition-all shadow-md shadow-[#1565C0]/20"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-500" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#1565C0]" />
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="userName"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.userName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/15 outline-none text-sm transition-all bg-gray-50/50 focus:bg-white text-gray-900"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#1565C0]" />
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="userEmail"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.userEmail}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/15 outline-none text-sm transition-all bg-gray-50/50 focus:bg-white text-gray-900"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#1565C0]" />
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="userPhone"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.userPhone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/15 outline-none text-sm transition-all bg-gray-50/50 focus:bg-white text-gray-900"
                  />
                </div>

                {/* Enquiry Details */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#1565C0]" />
                    Trip Details & Special Requirements
                  </label>
                  <textarea
                    name="details"
                    rows={3}
                    placeholder="Tell us about your preferred travel dates, group size, budget, or custom requests..."
                    value={formData.details}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/15 outline-none text-sm transition-all bg-gray-50/50 focus:bg-white text-gray-900 resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-3 flex items-center justify-end gap-3 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2.5 bg-gradient-to-r from-[#FFC107] to-[#FF8F00] hover:from-[#FFB300] hover:to-[#FF6F00] text-gray-900 font-bold font-heading rounded-xl transition-all shadow-md flex items-center gap-2 text-sm disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-gray-900" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Enquiry
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
