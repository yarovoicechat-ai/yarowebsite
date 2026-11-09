'use client';

import { useEffect, useState, useRef } from 'react';
import type { SharePreview } from '@/lib/sharePreview';
import { Sparkles, Download, ArrowRight, Copy, Check, Users, Radio } from 'lucide-react';

export default function ShareLanding({ preview }: { preview: SharePreview }) {
  const isRoom = preview.kind === 'room';
  const path = `${isRoom ? 'room' : 'user'}/${encodeURIComponent(preview.id)}`;
  const referrer = `${isRoom ? 'room' : 'user'}_${encodeURIComponent(preview.id)}`;
  const storeUrl = `https://play.google.com/store/apps/details?id=yaro.vc.app&referrer=${referrer}`;
  const customSchemeUrl = `yaro://${path}`;
  const androidIntentUrl = `intent://${path}#Intent;scheme=yaro;package=yaro.vc.app;S.browser_fallback_url=${encodeURIComponent(storeUrl)};end`;

  const [copied, setCopied] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const hasTriggeredRef = useRef(false);

  const attemptOpenApp = (fallbackToStore = true) => {
    if (typeof window === 'undefined') return;

    const isAndroid = /android/i.test(navigator.userAgent);
    if (!isAndroid) {
      if (fallbackToStore) {
        window.location.href = storeUrl;
      }
      return;
    }

    setRedirecting(true);
    let appOpened = false;

    const onVisibilityChange = () => {
      if (document.hidden || (document as any).webkitHidden) {
        appOpened = true;
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    // Try custom scheme / intent
    window.location.href = androidIntentUrl;

    if (fallbackToStore) {
      setTimeout(() => {
        document.removeEventListener('visibilitychange', onVisibilityChange);
        if (!appOpened && !document.hidden) {
          window.location.href = storeUrl;
        } else {
          setRedirecting(false);
        }
      }, 1600);
    }
  };

  useEffect(() => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;

    const isAndroid = typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent);
    if (isAndroid) {
      attemptOpenApp(true);
    }
  }, []);

  const handleCopyId = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(String(preview.id)).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => {});
    }
  };

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center px-4 py-8 sm:py-14 overflow-hidden bg-[#0a0614] text-white">
      {/* Background glow effects */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-purple-600/30 via-pink-600/20 to-amber-500/10 blur-[130px] rounded-full -top-20 -left-20 pointer-events-none" />
      <div className="absolute w-[450px] h-[450px] bg-gradient-to-br from-pink-600/25 via-indigo-600/20 to-cyan-500/10 blur-[130px] rounded-full -bottom-20 -right-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/40 text-center space-y-6">
        {/* Top App Identity Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-xs font-semibold text-purple-300">
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span>Yaro Live Voice & Social</span>
        </div>

        {/* Profile / Room Visual Header */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 opacity-75 blur-sm animate-pulse" />
            <img
              src={preview.image}
              alt={preview.name}
              width={140}
              height={140}
              className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full object-cover border-2 border-white/40 shadow-xl bg-purple-950"
              onError={(e) => {
                if (!e.currentTarget.src.endsWith('/default-avatar.webp')) {
                  e.currentTarget.src = '/default-avatar.webp';
                }
              }}
            />
            {isRoom && (
              <span className="absolute bottom-1 right-1 flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold shadow-md">
                <Radio className="w-2.5 h-2.5 animate-pulse" />
                LIVE
              </span>
            )}
          </div>

          <h1 className="mt-5 text-2xl font-bold text-white tracking-tight break-words max-w-xs">
            {preview.name}
          </h1>

          <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300">
            <span>{isRoom ? 'Room ID' : 'User ID'}: <strong className="text-white font-mono">{preview.id}</strong></span>
            <button
              onClick={handleCopyId}
              className="hover:text-pink-400 transition-colors p-0.5"
              title="Copy ID"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {!isRoom && preview.followers !== undefined && (
            <div className="mt-3 flex items-center gap-4 text-xs text-zinc-400">
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-purple-400" />
                <strong className="text-white">{preview.followers}</strong> Followers
              </span>
              <span className="text-zinc-600">•</span>
              <span>
                <strong className="text-white">{preview.visitors ?? 0}</strong> Visitors
              </span>
            </div>
          )}

          <p className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-xs">
            {isRoom
              ? 'Join this party room for live voice chat, virtual gifts, and meet new friends.'
              : 'Connect, chat and enjoy voice calling with friends on Yaro.'}
          </p>
        </div>

        {/* Redirecting feedback banner */}
        {redirecting && (
          <div className="py-2 px-3 rounded-xl bg-purple-500/15 border border-purple-500/30 text-xs text-purple-200 animate-pulse flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-400 animate-ping" />
            <span>Opening Yaro app... Redirecting to Play Store if not installed.</span>
          </div>
        )}

        {/* Primary CTA Buttons */}
        <div className="space-y-3 pt-2">
          {/* Main Action: Open in Yaro App */}
          <button
            onClick={() => attemptOpenApp(true)}
            className="w-full py-3.5 px-6 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:opacity-95 transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            <span>{isRoom ? 'Join Room in Yaro' : 'Open Profile in Yaro'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary Action: Download on Google Play Store */}
          <a
            href={storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-6 rounded-2xl font-semibold text-xs sm:text-sm text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-pink-400" />
            <span>Download on Google Play Store</span>
          </a>
        </div>

        <p className="text-[11px] text-zinc-500 pt-1">
          Requires Android 7.0 or higher. Free download.
        </p>
      </div>
    </div>
  );
}
