import Link from 'next/link';
import { ShieldCheck, Heart, Lock, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050508] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden mt-32">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Meethi Chat Logo"
                className="w-12 h-12 rounded-2xl border border-pink-500/30 shadow-lg shadow-pink-500/30 object-cover"
              />
              <span className="text-xl font-extrabold text-gradient">
                Meethi Chat
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              The premier social entertainment platform for crystal-clear voice calls, live audio party rooms, virtual gifting, and vibrant global communities.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
              API Services 100% Operational
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/" className="hover:text-pink-400 transition-colors">Home Page</Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-pink-400 transition-colors">Core Features</Link>
              </li>
              <li>
                <Link href="/#calculator" className="hover:text-pink-400 transition-colors">Host Income Calculator</Link>
              </li>
              <li>
                <Link href="/#live-stats" className="hover:text-pink-400 transition-colors">Platform Statistics</Link>
              </li>
              <li>
                <a href="https://management.mithichat.live" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">Admin Portal</a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance Column */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Legal & Trust</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/privacy" className="hover:text-pink-400 transition-colors flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-pink-500" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-pink-400 transition-colors flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/delete-account" className="hover:text-pink-400 transition-colors flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Data Deletion Request
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pink-400 transition-colors">Help & Support</Link>
              </li>
            </ul>
          </div>

          {/* Security & Verification Column */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Security & Download</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Official Android package (APK v1.8.4) verified for virus-free, secure deployment.
            </p>
            <div className="p-3 rounded-2xl glass border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-zinc-200 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Play Protect Verified
              </div>
              <p className="text-[11px] text-zinc-400">
                100% Malware & Spyware Free • 256-bit TLS Encryption
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Meethi Chat Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-zinc-400">
            Built with <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 mx-1" /> for Global Voice Communities.
          </div>
        </div>
      </div>
    </footer>
  );
}
