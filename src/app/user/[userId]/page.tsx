'use client';

import { use, useEffect, useState } from 'react';
import { User, PhoneCall, Sparkles, ShieldCheck, Download, Heart } from 'lucide-react';

export default function UserProfilePage({ params }: { params: Promise<{ userId: string }> }) {
  const resolvedParams = use(params);
  const userId = String(resolvedParams?.userId || '').trim();

  const [attempted, setAttempted] = useState(false);

  const playStoreUrl = `https://play.google.com/store/apps/details?id=yaro.vc.app&referrer=user_${encodeURIComponent(userId)}`;
  const customSchemeUrl = `yaro://user/${userId}`;
  const androidIntentUrl = `intent://user/${userId}#Intent;scheme=yaro;package=yaro.vc.app;S.browser_fallback_url=${encodeURIComponent(playStoreUrl)};end`;

  useEffect(() => {
    if (typeof window === 'undefined' || !userId) return;

    setAttempted(true);
    const isAndroid = /android/i.test(navigator.userAgent);
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

    if (isAndroid) {
      window.location.href = androidIntentUrl;
    } else if (isIOS) {
      window.location.href = customSchemeUrl;
      const timer = setTimeout(() => {
        window.location.href = playStoreUrl;
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        window.location.href = playStoreUrl;
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [userId, androidIntentUrl, customSchemeUrl, playStoreUrl]);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center px-4 py-8 sm:py-12 overflow-hidden bg-[#090912] text-white">
      {/* Dynamic Animated Ambient Lights */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-cyan-600/30 via-indigo-600/25 to-pink-500/15 blur-[120px] rounded-full top-1/4 -left-32 pointer-events-none animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-pink-500/20 via-purple-600/15 to-transparent blur-[100px] rounded-full bottom-10 -right-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg bg-slate-900/85 backdrop-blur-2xl border border-slate-700/60 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-indigo-500/10 text-center space-y-6">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-wide animate-pulse">
          <User className="w-3.5 h-3.5 text-cyan-400" />
          YARO USER PROFILE
        </div>

        {/* User Avatar & Header */}
        <div>
          <div className="w-20 h-20 mx-auto rounded-3xl p-1 bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-500 shadow-xl shadow-pink-500/30 flex items-center justify-center mb-4">
            <img src="/logo.png" alt="Yaro" className="w-full h-full rounded-[22px] object-cover" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Connect with Yaro Friend
          </h1>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Check out User Profile <span className="font-mono font-extrabold text-cyan-300 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">ID: {userId || 'YARO'}</span> and start 1-on-1 audio & video calls!
          </p>
        </div>

        {/* Status Notification Box */}
        <div className="bg-slate-950/90 border border-cyan-500/40 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-inner">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
          <p className="text-xs sm:text-sm font-semibold text-slate-200">
            {attempted ? 'Opening profile in Yaro App...' : 'Connecting to profile...'}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          {/* Primary: Official Google Play Store Button */}
          <a
            href={playStoreUrl}
            className="flex items-center justify-center gap-3 w-full bg-slate-950 hover:bg-black border-2 border-slate-700 hover:border-cyan-500 text-white py-4 px-6 rounded-2xl font-extrabold text-base shadow-2xl transition-all hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <svg className="w-7 h-7 group-hover:scale-110 transition-transform" viewBox="0 0 512 512" fill="none">
              <path d="M325.8 243.8L61.4 382.4C44 391.6 32 376.6 32 355.6V156.4C32 135.4 44 120.4 61.4 129.6L325.8 268.2C338.4 274.8 338.4 287.2 325.8 293.8L325.8 243.8Z" fill="#00D2FF"/>
              <path d="M380.2 215.2L325.8 243.8L325.8 293.8L380.2 322.4C398.8 332.2 416 322.2 416 300.8V236.8C416 215.4 398.8 205.4 380.2 215.2Z" fill="#FFD000"/>
              <path d="M61.4 129.6L246 256L325.8 215.2L61.4 129.6Z" fill="#00F076"/>
              <path d="M61.4 382.4L325.8 296.8L246 256L61.4 382.4Z" fill="#FF3A44"/>
            </svg>
            Get it on Google Play
          </a>

          {/* Secondary: Direct In-App Open Button */}
          <a
            href={androidIntentUrl}
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white py-3.5 px-6 rounded-2xl font-bold text-sm shadow-xl transition-all"
          >
            <PhoneCall className="w-4 h-4 text-cyan-200" />
            Already have App? Tap to View Profile
          </a>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2.5 text-center">
            <PhoneCall className="w-4 h-4 text-pink-400 mx-auto" />
            <div className="text-[10px] font-bold text-slate-200 mt-1">1-on-1 Calls</div>
          </div>
          <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2.5 text-center">
            <Heart className="w-4 h-4 text-cyan-400 mx-auto" />
            <div className="text-[10px] font-bold text-slate-200 mt-1">Make Friends</div>
          </div>
          <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2.5 text-center">
            <Sparkles className="w-4 h-4 text-amber-400 mx-auto" />
            <div className="text-[10px] font-bold text-slate-200 mt-1">Send Gifts</div>
          </div>
        </div>

        {/* Trust Footer */}
        <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-semibold pt-1">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          Verified Safe on Google Play • Free Signup
        </div>

      </div>
    </div>
  );
}
