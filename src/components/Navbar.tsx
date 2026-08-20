'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import DownloadButton from './DownloadButton';
import { Menu, X, Sparkles, Shield, Radio, Layers } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 glass-nav shadow-2xl shadow-pink-500/5' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 p-[1px] shadow-lg shadow-pink-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0d0d14] rounded-[15px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-pink-500 animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-gradient tracking-tight">
                Meethi Chaat
              </span>
              <span className="text-[10px] text-zinc-400 font-medium flex items-center gap-1.5 -mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                Live Voice Social
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <Link href="/" className="hover:text-pink-400 transition-colors py-1">
              Home
            </Link>
            <Link href="/#features" className="hover:text-pink-400 transition-colors py-1">
              Features
            </Link>
            <Link href="/#live-stats" className="hover:text-pink-400 transition-colors py-1">
              Live Stats
            </Link>
            <Link href="/#safety" className="hover:text-pink-400 transition-colors py-1">
              Safety & Security
            </Link>
            <Link href="/contact" className="hover:text-pink-400 transition-colors py-1">
              Contact
            </Link>
          </nav>

          {/* Action Call to Action */}
          <div className="hidden md:flex items-center gap-4">
            <DownloadButton variant="navbar" />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <DownloadButton variant="navbar" className="px-4 py-1.5 text-[10px]" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-200 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-6 rounded-2xl glass border border-white/10 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-200 font-semibold text-base py-2 hover:text-pink-400 border-b border-white/5"
            >
              Home
            </Link>
            <Link
              href="/#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-200 font-semibold text-base py-2 hover:text-pink-400 border-b border-white/5"
            >
              Features
            </Link>
            <Link
              href="/#live-stats"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-200 font-semibold text-base py-2 hover:text-pink-400 border-b border-white/5"
            >
              Live Stats
            </Link>
            <Link
              href="/#safety"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-200 font-semibold text-base py-2 hover:text-pink-400 border-b border-white/5"
            >
              Safety & Security
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-200 font-semibold text-base py-2 hover:text-pink-400 border-b border-white/5"
            >
              Contact Us
            </Link>
            <Link
              href="/terms"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-400 text-sm py-1 hover:text-white"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-400 text-sm py-1 hover:text-white"
            >
              Privacy Policy
            </Link>
            <div className="pt-2">
              <DownloadButton variant="primary" className="w-full text-sm py-3" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
