'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import DownloadButton from './DownloadButton';
import { Menu, X } from 'lucide-react';

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
            <div className="relative">
              <img
                src="/logo.png"
                alt="Meethi Chat Logo"
                className="w-11 h-11 rounded-2xl border border-pink-500/30 shadow-lg shadow-pink-500/30 object-cover group-hover:scale-105 transition-transform"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#090912] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-gradient tracking-tight">
                Meethi Chat
              </span>
              <span className="text-[10px] text-pink-400 font-bold flex items-center gap-1.5 -mt-1">
                Voice Calling & Group
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
            <Link href="/#calculator" className="hover:text-pink-400 transition-colors py-1">
              Host Income
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
              href="/#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-200 font-semibold text-base py-2 hover:text-pink-400 border-b border-white/5"
            >
              Host Income Calculator
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
            <div className="pt-2">
              <DownloadButton variant="primary" className="w-full text-sm py-3" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
