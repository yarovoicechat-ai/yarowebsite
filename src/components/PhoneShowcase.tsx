'use client';

import { useState, useEffect } from 'react';
import { Mic, Volume2, Gift, Sparkles, PhoneOff, PhoneCall, ShieldCheck } from 'lucide-react';

export default function PhoneShowcase() {
  const [micMuted, setMicMuted] = useState(false);
  const [giftCount, setGiftCount] = useState(150);
  const [callSeconds, setCallSeconds] = useState(165); // 02:45

  useEffect(() => {
    const timer = setInterval(() => {
      setCallSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSec: number) => {
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const handleSendGift = () => {
    setGiftCount(prev => prev + 1);
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] group">
      {/* Glow aura behind phone */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-pink-600 via-purple-600 to-cyan-400 rounded-[50px] opacity-35 blur-2xl group-hover:opacity-55 transition duration-700 animate-pulse-glow" />

      {/* Phone Body Container */}
      <div className="relative rounded-[42px] bg-[#0c0c14] border-4 border-zinc-800/80 p-4 shadow-2xl shadow-purple-950/50 backdrop-blur-xl overflow-hidden">
        {/* Top Notch / Camera pill */}
        <div className="mx-auto w-32 h-5 bg-black rounded-full mb-3 flex items-center justify-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-800" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
        </div>

        {/* Live Voice Call Header */}
        <div className="bg-gradient-to-r from-pink-950/50 via-purple-950/50 to-zinc-900/70 p-3 rounded-2xl border border-pink-500/30 flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl border border-pink-500/50 flex items-center justify-center overflow-hidden shadow-md shadow-pink-500/30 shrink-0">
              <img src="/logo.png" alt="Yaro" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1">
                Yaro Live Party
                <Sparkles className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              </div>
              <div className="text-[10px] text-emerald-400 font-bold font-mono">
                Connected • {formatTime(callSeconds)}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-1 rounded-full text-[10px] font-bold text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            ENCRYPTED
          </div>
        </div>

        {/* Equalizer Audio Waves */}
        <div className="bg-zinc-950/90 p-2.5 rounded-2xl border border-white/5 flex items-center justify-between gap-2 mb-4">
          <span className="text-[10px] text-zinc-400 font-medium">Ultra HD Audio:</span>
          <div className="flex items-end gap-1 h-6">
            <span className="w-1 bg-pink-500 rounded-full sound-bar-1" />
            <span className="w-1 bg-purple-500 rounded-full sound-bar-2" />
            <span className="w-1 bg-cyan-400 rounded-full sound-bar-3" />
            <span className="w-1 bg-pink-400 rounded-full sound-bar-4" />
            <span className="w-1 bg-purple-400 rounded-full sound-bar-5" />
            <span className="w-1 bg-yellow-400 rounded-full sound-bar-2" />
            <span className="w-1 bg-pink-500 rounded-full sound-bar-1" />
          </div>
          <span className="text-[10px] text-emerald-400 font-mono font-bold">24ms Latency</span>
        </div>

        {/* 1-on-1 Voice Callers Display */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* Caller 1 */}
          <div className="bg-gradient-to-b from-pink-950/40 to-zinc-950 p-4 rounded-2xl border border-pink-500/30 flex flex-col items-center text-center space-y-2 relative">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-400 p-[2px] shadow-xl ring-4 ring-pink-500/30 ring-offset-2 ring-offset-zinc-950 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-lg font-extrabold text-white">
                  👑
                </div>
              </div>
              <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-400 border-2 border-zinc-950" />
            </div>
            <div className="space-y-0.5">
              <span className="text-xs font-extrabold text-white block">Angel</span>
              <span className="text-[9px] text-pink-400 font-semibold px-2 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/20">
                Official Host 👑
              </span>
            </div>
          </div>

          {/* Caller 2 */}
          <div className="bg-gradient-to-b from-purple-950/40 to-zinc-950 p-4 rounded-2xl border border-purple-500/30 flex flex-col items-center text-center space-y-2 relative">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-400 p-[2px] shadow-xl ring-4 ring-purple-500/30 ring-offset-2 ring-offset-zinc-950 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-lg font-extrabold text-white">
                  ⭐
                </div>
              </div>
              <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-400 border-2 border-zinc-950" />
            </div>
            <div className="space-y-0.5">
              <span className="text-xs font-extrabold text-white block">Rahul</span>
              <span className="text-[9px] text-purple-400 font-semibold px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                VIP Caller ⭐
              </span>
            </div>
          </div>
        </div>

        {/* Live Gifting Feed Overlay */}
        <div className="bg-gradient-to-r from-pink-900/40 via-purple-900/40 to-zinc-900/60 p-2.5 rounded-xl border border-pink-500/30 flex items-center justify-between mb-4 animate-in fade-in duration-500">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-pink-500/20 flex items-center justify-center">
              <Gift className="w-4 h-4 text-pink-400" />
            </div>
            <div className="text-[10px]">
              <span className="font-bold text-pink-300">Rahul</span> sent <span className="font-bold text-yellow-300">Dragon Crown 👑</span> x1
            </div>
          </div>
          <span className="text-[10px] font-extrabold text-gradient-gold">+{giftCount}</span>
        </div>

        {/* Voice Call Action Controls */}
        <div className="flex items-center justify-around bg-zinc-950/90 p-2.5 rounded-2xl border border-white/10">
          <button
            onClick={() => setMicMuted(!micMuted)}
            className={`p-3 rounded-xl transition ${
              micMuted ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'bg-zinc-800 text-zinc-200 hover:text-white'
            }`}
            title="Mute Mic"
          >
            <Mic className="w-4 h-4" />
          </button>

          <button
            onClick={handleSendGift}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-lg shadow-pink-500/30 hover:scale-105 transition"
          >
            <Gift className="w-4 h-4" />
            Send Gift
          </button>

          <button
            className="p-3 rounded-xl bg-rose-600 text-white hover:bg-rose-700 transition shadow-lg shadow-rose-600/30"
            title="End Call"
          >
            <PhoneOff className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
