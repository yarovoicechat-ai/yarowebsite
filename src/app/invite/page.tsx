'use client';

import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import Image from 'next/image';

function InviteContent() {
  const searchParams = useSearchParams();
  const rawRef = searchParams.get('ref') || searchParams.get('code') || 'OFFER25';
  const inviterCode = rawRef.trim().toUpperCase();

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
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

  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.umangchatlive";

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center px-4 py-12 overflow-hidden bg-slate-950 text-white">
      {/* Background glow effects */}
      <div className="absolute w-[450px] h-[450px] bg-gradient-to-tr from-pink-600/30 via-purple-600/20 to-transparent blur-[100px] rounded-full top-1/4 pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-300 font-semibold text-xs tracking-wider uppercase">
          ✨ Special Invitation
        </div>

        {/* Inviter Info Card */}
        <div className="flex items-center gap-4 bg-slate-800/50 border border-slate-700/60 rounded-2xl p-4 text-left">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-pink-500 bg-slate-800 shrink-0 relative">
            <Image
              src="/logo.png"
              alt="Meethi Chat"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-slate-100 text-base">A Friend</h4>
            <p className="text-xs text-purple-300">invited you to join Meethi Chat!</p>
          </div>
        </div>

        {/* Headline */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white via-pink-300 to-purple-400 bg-clip-text text-transparent leading-tight">
            Get 100 Free Welcome Coins!
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            Download Meethi Chat, complete your profile using referral code{' '}
            <span className="font-bold text-pink-400">{inviterCode}</span> & start live video & voice chatting!
          </p>
        </div>

        {/* Bonus Box */}
        <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 rounded-2xl p-5 shadow-lg shadow-pink-600/20 text-white relative overflow-hidden">
          <p className="text-[11px] font-extrabold uppercase tracking-widest text-pink-100">
            YOUR SIGN-UP BONUS REWARD
          </p>
          <p className="text-3xl font-black text-amber-300 drop-shadow mt-1">
            +100 WELCOME COINS
          </p>
        </div>

        {/* Code Box */}
        <div className="bg-slate-950/80 border-2 border-dashed border-pink-500/50 rounded-2xl p-4 flex items-center justify-between gap-3">
          <div className="text-left">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">REFERRAL CODE</p>
            <p className="text-xl sm:text-2xl font-black tracking-widest text-cyan-400">{inviterCode}</p>
          </div>
          <button
            onClick={handleCopy}
            className="px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95 shrink-0"
          >
            {copied ? 'COPIED! ✓' : 'COPY CODE'}
          </button>
        </div>

        {/* Official Google Play Store Button */}
        <a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full bg-black hover:bg-slate-950 border-2 border-slate-700 hover:border-cyan-400 text-white py-4 px-6 rounded-2xl font-bold text-base shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
        >
          <svg className="w-7 h-7" viewBox="0 0 512 512" fill="none">
            <path d="M325.8 243.8L61.4 382.4C44 391.6 32 376.6 32 355.6V156.4C32 135.4 44 120.4 61.4 129.6L325.8 268.2C338.4 274.8 338.4 287.2 325.8 293.8L325.8 243.8Z" fill="#00D2FF"/>
            <path d="M380.2 215.2L325.8 243.8L325.8 293.8L380.2 322.4C398.8 332.2 416 322.2 416 300.8V236.8C416 215.4 398.8 205.4 380.2 215.2Z" fill="#FFD000"/>
            <path d="M61.4 129.6L246 256L325.8 215.2L61.4 129.6Z" fill="#00F076"/>
            <path d="M61.4 382.4L325.8 296.8L246 256L61.4 382.4Z" fill="#FF3A44"/>
          </svg>
          Get it on Google Play
        </a>

        {/* 2-Step How it works */}
        <div className="bg-slate-950/40 border border-slate-800 rounded-2xl p-4 text-left space-y-3">
          <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">HOW IT WORKS</p>

          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-pink-500/20 border border-pink-500 text-pink-400 flex items-center justify-center font-extrabold text-xs shrink-0">
              1
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-200">Download App & Register</h5>
              <p className="text-[11px] text-slate-400">Install Meethi Chat & enter code <strong className="text-pink-300">{inviterCode}</strong> during setup for 100 Free Welcome Coins. Inviter gets 25 Coins!</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-pink-500/20 border border-pink-500 text-pink-400 flex items-center justify-center font-extrabold text-xs shrink-0">
              2
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-200">Talk 5 Minutes on Call</h5>
              <p className="text-[11px] text-slate-400">Enjoy live audio & video calls. When you talk 5 mins, your inviter earns +25 Bonus Coins!</p>
            </div>
          </div>
        </div>

      </div>

      {/* Toast Notification */}
      {copied && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-emerald-500 text-white font-bold text-xs px-6 py-3 rounded-full shadow-2xl animate-bounce">
          Referral Code {inviterCode} Copied!
        </div>
      )}
    </div>
  );
}

export default function InvitePage() {
  return (
    <Suspense fallback={
      <div className="min-h-[85vh] flex items-center justify-center text-slate-400 text-sm">
        Loading referral details...
      </div>
    }>
      <InviteContent />
    </Suspense>
  );
}
