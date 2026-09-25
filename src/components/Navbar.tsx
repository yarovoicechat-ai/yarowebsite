'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DownloadButton from './DownloadButton';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isReferralPage = pathname?.startsWith('/refer') || pathname?.startsWith('/invite');

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
        scrolled ? 'py-2.5 glass-nav shadow-2xl shadow-pink-500/10' : 'py-3.5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <img
                src="/logo.png"
                alt="Yaro Logo"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl border-2 border-pink-500/50 shadow-lg shadow-pink-500/30 object-cover group-hover:scale-105 transition-transform"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#080414] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold text-gradient tracking-tight">
                Yaro
              </span>
              <span className="text-[9px] sm:text-[10px] text-pink-400 font-bold -mt-0.5">
                Live Video & Voice
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          {!isReferralPage && (
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
              <Link href="/" className="hover:text-pink-400 transition-colors py-1">
                Home
              </Link>
              <Link href="/#features" className="hover:text-pink-400 transition-colors py-1">
                Features
              </Link>
              <Link href="/#store" className="hover:text-pink-400 transition-colors py-1">
                Virtual Store
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
          )}

          {/* Action Call to Action */}
          <div className="hidden md:flex items-center gap-4">
            <DownloadButton variant="navbar" />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-zinc-900/90 border border-white/15 text-zinc-200 hover:text-white transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-5 rounded-2xl glass border border-white/10 flex flex-col gap-3.5 animate-in slide-in-from-top-4 duration-300">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-200 font-semibold text-sm py-1.5 hover:text-pink-400 border-b border-white/5"
            >
              Home
            </Link>
            <Link
              href="/#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-200 font-semibold text-sm py-1.5 hover:text-pink-400 border-b border-white/5"
            >
              Features
            </Link>
            <Link
              href="/#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-200 font-semibold text-sm py-1.5 hover:text-pink-400 border-b border-white/5"
            >
              Host Income Calculator
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-200 font-semibold text-sm py-1.5 hover:text-pink-400 border-b border-white/5"
            >
              Contact Us
            </Link>
            <Link
              href="/delete-account"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-400 text-xs py-1.5 hover:text-rose-400 border-b border-white/5 flex items-center gap-1.5"
            >
              Delete Account Request
            </Link>
            <div className="pt-1">
              <DownloadButton variant="primary" className="w-full text-xs py-3" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
