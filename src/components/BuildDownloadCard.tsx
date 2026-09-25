'use client';

import DownloadButton from './DownloadButton';
import { ShieldCheck, CheckCircle2, Smartphone, FileCode, Mic } from 'lucide-react';

export default function BuildDownloadCard() {
  return (
    <div className="glass p-8 sm:p-12 rounded-3xl border border-pink-500/20 bg-gradient-to-br from-pink-950/30 via-zinc-900/80 to-purple-950/40 relative overflow-hidden space-y-8 shadow-2xl">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
        <div className="flex items-start gap-4">
          <img
            src="/logo.png"
            alt="Yaro Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-pink-500/50 shadow-2xl shadow-pink-500/40 object-cover shrink-0"
          />
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold tracking-wide">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              Official Verified Android App • Yaro
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Yaro Android <span className="text-gradient">v0.0.2</span>
            </h3>
            <p className="text-zinc-300 text-sm max-w-xl leading-relaxed">
              Experience real-time Ultra HD audio calls, 9-seat voice party lounges, luxury 3D animated gifts, and fast creator earnings. 100% Google Play Protect safe.
            </p>
          </div>
        </div>

        <div className="shrink-0 flex flex-col items-center md:items-end gap-3">
          <DownloadButton variant="primary" className="py-4 px-10 text-base font-extrabold shadow-2xl">
            Download Yaro App
          </DownloadButton>
          <div className="text-[11px] text-zinc-400 font-medium flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Play Protect Verified • Virus Free
          </div>
        </div>
      </div>

      {/* Specification Badges Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs relative z-10">
        <div className="bg-zinc-950/80 p-4 rounded-2xl border border-white/5 space-y-1 hover:border-pink-500/30 transition">
          <span className="text-zinc-400 block text-[11px] font-semibold">Latest Build</span>
          <span className="text-white font-extrabold flex items-center gap-1.5 text-sm">
            <FileCode className="w-4 h-4 text-pink-400" /> v0.0.2 Stable
          </span>
        </div>

        <div className="bg-zinc-950/80 p-4 rounded-2xl border border-white/5 space-y-1 hover:border-purple-500/30 transition">
          <span className="text-zinc-400 block text-[11px] font-semibold">Package Size</span>
          <span className="text-white font-extrabold flex items-center gap-1.5 text-sm">
            <Smartphone className="w-4 h-4 text-purple-400" /> 69.77 MB
          </span>
        </div>

        <div className="bg-zinc-950/80 p-4 rounded-2xl border border-white/5 space-y-1 hover:border-cyan-500/30 transition">
          <span className="text-zinc-400 block text-[11px] font-semibold">Voice Quality</span>
          <span className="text-white font-extrabold flex items-center gap-1.5 text-sm">
            <Mic className="w-4 h-4 text-cyan-400" /> Ultra HD Voice
          </span>
        </div>

        <div className="bg-zinc-950/80 p-4 rounded-2xl border border-white/5 space-y-1 hover:border-emerald-500/30 transition">
          <span className="text-zinc-400 block text-[11px] font-semibold">Security Level</span>
          <span className="text-emerald-400 font-extrabold flex items-center gap-1.5 text-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Encrypted
          </span>
        </div>
      </div>
    </div>
  );
}
