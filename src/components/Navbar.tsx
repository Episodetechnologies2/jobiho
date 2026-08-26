"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image"; // if you're using Next.js
import { asset } from "@/lib/basePath";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Tours & Packages", href: "/tours-packages" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const activeLink = pathname === "/" ? "/" : pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-[#0d47a1] backdrop-blur-md shadow-lg border-b border-gray-100"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-25">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src={asset("/jobiho-logo.png")}
              alt="Jobiho Logo"
              width={120}
              height={70}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium font-heading rounded-lg transition-all duration-200 group ${isScrolled
                  ? activeLink === link.href
                    ? "text-[#FFC107]"
                    : "text-white/90 hover:text-white"
                  : activeLink === link.href
                    ? "text-[#FFC107]"
                    : "text-white/90 hover:text-white"
                  }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-200 ${activeLink === link.href ? "w-4/5 bg-[#FFC107]" : "w-0 bg-[#FFC107] group-hover:w-4/5"
                    }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/tours-packages"
                className="inline-block px-5 py-2.5 bg-[#FFC107] hover:bg-[#FF8F00] text-[#1F2937] font-semibold font-heading text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                Explore Tours
              </Link>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-white hover:bg-gray-100" : "text-white hover:bg-white/20"
              }`}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`block text-left px-4 py-3 rounded-xl font-medium font-heading text-sm transition-colors ${activeLink === link.href
                      ? "bg-[#1565C0]/10 text-[#1565C0]"
                      : "text-gray-700 hover:bg-gray-50"
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="mt-2"
              >
                <Link
                  href="/tours-packages"
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-3 bg-[#FFC107] text-[#1F2937] font-semibold font-heading text-sm rounded-xl text-center"
                >
                  Explore Tours
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
