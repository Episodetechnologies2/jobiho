"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { asset } from "@/lib/basePath";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Tours & Packages", href: "/tours-packages" },
    { label: "Partners", href: "/partners" },
    { label: "Contact Us", href: "/contact" },
  ],
  toursPackages: [
    { label: "Tokyo", href: "/tours-packages/tokyo" },
    { label: "Bali", href: "/tours-packages/bali" },
    { label: "Paris", href: "/tours-packages/paris" },
    { label: "Dubai", href: "/tours-packages/dubai" },
    { label: "Machu Picchu", href: "/tours-packages/machu-picchu" },
    { label: "Serengeti", href: "/tours-packages/serengeti" },
    { label: "Rome", href: "/tours-packages/rome" },
    { label: "Banff", href: "/tours-packages/banff" },
    { label: "Cape Town", href: "/tours-packages/cape-town" },
    { label: "View All", href: "/tours-packages" },
  ],
  support: [
    { label: "Help Center", href: "/contact" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Partner Program", href: "/partners" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-500" },
  { icon: Twitter, href: "#", label: "Twitter / X", color: "hover:text-sky-400" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D47A1] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="flex items-center mb-4 group">
              <Image
                src={asset("/jobiho-logo.png")}
                alt="Jobiho"
                width={160}
                height={60}
                className="h-16 w-auto object-contain transition-opacity group-hover:opacity-95"
                priority={false}
              />
            </Link>

            <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
              Your global experience marketplace. Discover, plan, and book travel, adventure,
              dining & lifestyle experiences — all in one place.
            </p>

            <p className="text-[#FFC107] font-heading text-sm font-semibold italic mb-6">
              &ldquo;Discover Whatever There Is&rdquo;
            </p>

            {/* Contact */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm font-body">
                <Mail className="w-4 h-4 text-[#FFC107]" />
                <span>info@jobiho.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm font-body">
                <Phone className="w-4 h-4 text-[#FFC107]" />
                <span>+91 72176 43550</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm font-body">
                <MapPin className="w-4 h-4 text-[#FFC107]" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Links - Company */}
          <div>
            <h4 className="font-bold font-heading text-white mb-5 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#FFC107] font-body text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Tours & Packages */}
          <div className="lg:col-span-2">
            <h4 className="font-bold font-heading text-white mb-5 text-sm uppercase tracking-wider">
              Tours & Packages
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {footerLinks.toursPackages.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#FFC107] font-body text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Support */}
          <div>
            <h4 className="font-bold font-heading text-white mb-5 text-sm uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#FFC107] font-body text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 font-body text-sm text-center sm:text-left">
            © 2025 Jobiho.com — Discover Whatever There Is. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className={`w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200`}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
