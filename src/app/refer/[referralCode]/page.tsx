'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, use } from 'react';
import { Copy, Check, ShieldCheck, Sparkles, PhoneCall, Gift, Users, Trophy } from 'lucide-react';

export default function ReferPage({ params }: { params: Promise<{ referralCode: string }> }) {
  const resolvedParams = use(params);
  const searchParams = useSearchParams();
  
  const rawCode = resolvedParams?.referralCode || searchParams.get('ref') || searchParams.get('code') || '';
  const inviterCode = String(rawCode).trim().toUpperCase();

  const [copied, setCopied] = useState(false);

  // Validate code syntax (alphanumeric, 3-20 chars)
  const isValidCode = /^[A-Z0-9_-]{3,20}$/.test(inviterCode);

  const playStoreUrl = isValidCode
    ? `https://play.google.com/store/apps/details?id=yaro.vc.app&referrer=utm_source%3Dyaro%26utm_medium%3Dreferral%26utm_campaign%3Drefer_and_earn%26referralCode%3D${encodeURIComponent(inviterCode)}`
    : `https://play.google.com/store/apps/details?id=yaro.vc.app`;

  const customSchemeUrl = `yaro://refer/${inviterCode}`;
  const androidIntentUrl = `intent://refer/${inviterCode}#Intent;scheme=yaro;package=yaro.vc.app;S.browser_fallback_url=${encodeURIComponent(playStoreUrl)};end`;

  useEffect(() => {
    if (typeof window === 'undefined' || !isValidCode) return;

    const isAndroid = /android/i.test(navigator.userAgent);
    if (isAndroid) {
      window.location.href = androidIntentUrl;
    }
  }, [isValidCode, androidIntentUrl]);

  const handleCopy = () => {
    if (!isValidCode) return;
    navigator.clipboard.writeText(inviterCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      const input = document.createElement('input');
      input.value = inviterCode;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center px-4 py-8 sm:py-12 overflow-hidden bg-[#090912] text-white">
      {/* Dynamic Animated Ambient Lights */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-pink-600/30 via-purple-600/25 to-cyan-500/15 blur-[120px] rounded-full top-1/4 -left-32 pointer-events-none animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-amber-500/20 via-pink-600/15 to-transparent blur-[100px] rounded-full bottom-10 -right-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg bg-slate-900/85 backdrop-blur-2xl border border-slate-700/60 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-pink-500/10 text-center space-y-6">
        
        {/* Top Floating Badge & Logo */}
        <div className="flex flex-col items-center gap-3">
          <img
            src="/logo.png"
            alt="Yaro Logo"
            className="w-16 h-16 rounded-2xl border-2 border-pink-500/50 shadow-xl shadow-pink-500/30 object-cover"
          />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            OFFICIAL YARO INVITATION
          </div>
        </div>

        {/* Hero Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            You've Been Invited to <span className="bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">Yaro</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            Download Yaro App, enter referral code{' '}
            <span className="font-mono font-extrabold text-cyan-300 px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">{inviterCode || 'YARO'}</span> & claim your welcome bonus!
          </p>
        </div>

        {/* Sign-Up Reward Highlight Banner */}
        <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-2xl p-4 sm:p-5 shadow-xl shadow-pink-600/25 text-white relative overflow-hidden border border-pink-400/30">
          <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-amber-400/20 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-center justify-between gap-3 relative z-10">
            <div className="text-left">
              <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-pink-200">
                YOUR SIGN-UP BONUS REWARD
              </p>
              <p className="text-2xl sm:text-3xl font-black text-amber-300 drop-shadow-md mt-0.5 tracking-tight">
                +100 WELCOME COINS
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 font-bold text-2xl shrink-0 shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
              🪙
            </div>
          </div>
        </div>

        {/* Referral Code Box with 1-Tap Copy */}
        <div className="bg-slate-950/90 border-2 border-dashed border-cyan-500/60 rounded-2xl p-4 flex items-center justify-between gap-3 shadow-inner">
          <div className="text-left min-w-0">
            <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">REFERRAL CODE</p>
            <p className="text-xl sm:text-2xl font-mono font-black tracking-widest text-cyan-300 truncate">{inviterCode}</p>
          </div>
          <button
            onClick={handleCopy}
            className={`px-4 py-2.5 rounded-xl font-extrabold text-xs flex items-center gap-1.5 transition-all active:scale-95 shrink-0 shadow-md ${
              copied
                ? 'bg-emerald-500 text-white border border-emerald-400'
                : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" /> COPIED!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" /> COPY CODE
              </>
            )}
          </button>
        </div>

        {/* Official Google Play Store Button */}
        <a
          href={playStoreUrl}
          className="flex items-center justify-center gap-3 w-full bg-slate-950 hover:bg-black border-2 border-slate-700 hover:border-pink-500 text-white py-4 px-6 rounded-2xl font-extrabold text-base shadow-2xl transition-all hover:-translate-y-0.5 active:translate-y-0 group"
        >
          <svg className="w-7 h-7 group-hover:scale-110 transition-transform" viewBox="0 0 512 512" fill="none">
            <path d="M325.8 243.8L61.4 382.4C44 391.6 32 376.6 32 355.6V156.4C32 135.4 44 120.4 61.4 129.6L325.8 268.2C338.4 274.8 338.4 287.2 325.8 293.8L325.8 243.8Z" fill="#00D2FF"/>
            <path d="M380.2 215.2L325.8 243.8L325.8 293.8L380.2 322.4C398.8 332.2 416 322.2 416 300.8V236.8C416 215.4 398.8 205.4 380.2 215.2Z" fill="#FFD000"/>
            <path d="M61.4 129.6L246 256L325.8 215.2L61.4 129.6Z" fill="#00F076"/>
            <path d="M61.4 382.4L325.8 296.8L246 256L61.4 382.4Z" fill="#FF3A44"/>
          </svg>
          Get it on Google Play
        </a>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2.5 text-center">
            <PhoneCall className="w-4 h-4 text-pink-400 mx-auto" />
            <div className="text-[10px] font-bold text-slate-200 mt-1">HD Video Calls</div>
          </div>
          <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2.5 text-center">
            <Users className="w-4 h-4 text-cyan-400 mx-auto" />
            <div className="text-[10px] font-bold text-slate-200 mt-1">Live Audio Party</div>
          </div>
          <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2.5 text-center">
            <Gift className="w-4 h-4 text-amber-400 mx-auto" />
            <div className="text-[10px] font-bold text-slate-200 mt-1">3D Virtual Gifts</div>
          </div>
        </div>

        {/* Trust Footer Badge */}
        <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-semibold pt-1">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          Verified Google Play Protect Safe • 100% Free Signup
        </div>

      </div>

      {/* Floating Toast Notification */}
      {copied && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-emerald-500 text-white font-black text-xs px-6 py-3 rounded-full shadow-2xl animate-bounce flex items-center gap-2 border border-emerald-300">
          <Check className="w-4 h-4" /> Referral Code {inviterCode} Copied!
        </div>
      )}
    </div>
  );
}
