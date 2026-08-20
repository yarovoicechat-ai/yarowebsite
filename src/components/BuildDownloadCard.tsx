'use client';

import { useState } from 'react';
import DownloadButton from './DownloadButton';
import { ShieldCheck, CheckCircle2, Copy, Check, Smartphone, FileCode, Cpu } from 'lucide-react';

export default function BuildDownloadCard() {
  const [copied, setCopied] = useState(false);
  const directLink = 'https://github.com/bajpeyigroupdev/management_Panel/raw/main/public/releases/MeethiChat-v1.8.3.apk';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(directLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="glass p-8 sm:p-10 rounded-3xl border border-pink-500/20 bg-gradient-to-br from-pink-950/20 via-zinc-900/60 to-purple-950/30 relative overflow-hidden space-y-6">
      {/* Decorative Top Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            Official Verified Android Build
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Meethi Chaat Android App <span className="text-gradient">v1.8.4</span>
          </h3>
          <p className="text-zinc-400 text-sm max-w-xl">
            Download the official high-performance APK build directly to your Android device. Includes full HD Agora RTC voice engine, low latency call routing, and 3D animated gifts.
          </p>
        </div>

        <div className="shrink-0 flex flex-col gap-3">
          <DownloadButton variant="primary" className="py-4 px-10 text-base" />
          <button
            onClick={handleCopyLink}
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-semibold border border-white/10 transition"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Direct Link Copied!' : 'Copy Direct Download URL'}
          </button>
        </div>
      </div>

      {/* Specification Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs">
        <div className="bg-zinc-950/60 p-3.5 rounded-2xl border border-white/5 space-y-1">
          <span className="text-zinc-500 block text-[11px] font-medium">Build Version</span>
          <span className="text-white font-bold flex items-center gap-1.5">
            <FileCode className="w-3.5 h-3.5 text-pink-400" /> v1.8.4 (Code 23)
          </span>
        </div>

        <div className="bg-zinc-950/60 p-3.5 rounded-2xl border border-white/5 space-y-1">
          <span className="text-zinc-500 block text-[11px] font-medium">Package Size</span>
          <span className="text-white font-bold flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-purple-400" /> 69.77 MB (Full APK)
          </span>
        </div>

        <div className="bg-zinc-950/60 p-3.5 rounded-2xl border border-white/5 space-y-1">
          <span className="text-zinc-500 block text-[11px] font-medium">Compatibility</span>
          <span className="text-white font-bold flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Android 7.0+
          </span>
        </div>

        <div className="bg-zinc-950/60 p-3.5 rounded-2xl border border-white/5 space-y-1">
          <span className="text-zinc-500 block text-[11px] font-medium">Security Check</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Play Protect Safe
          </span>
        </div>
      </div>
    </div>
  );
}
