'use client';

import { useState } from 'react';
import { Mic, Volume2, Gift, Sparkles, Heart, Crown, UserCheck } from 'lucide-react';

export default function PhoneShowcase() {
  const [micMuted, setMicMuted] = useState(false);
  const [giftCount, setGiftCount] = useState(148);

  const handleSendGift = () => {
    setGiftCount(prev => prev + 1);
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] group">
      {/* Glow aura behind phone */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-pink-600 via-purple-600 to-cyan-400 rounded-[50px] opacity-30 blur-2xl group-hover:opacity-50 transition duration-700 animate-pulse-glow" />

      {/* Phone Body Container */}
      <div className="relative rounded-[42px] bg-[#0c0c14] border-4 border-zinc-800/80 p-4 shadow-2xl shadow-purple-950/50 backdrop-blur-xl overflow-hidden">
        {/* Top Notch / Camera pill */}
        <div className="mx-auto w-32 h-5 bg-black rounded-full mb-3 flex items-center justify-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-800" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80 animate-ping" />
        </div>

        {/* Live Audio Room Header */}
        <div className="bg-gradient-to-r from-pink-950/40 via-purple-950/40 to-slate-900/60 p-3 rounded-2xl border border-white/10 flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-400 p-[1.5px]">
                <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-xs font-bold text-white">
                  👑
                </div>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-zinc-900" />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1">
                VIP Voice Lounge
                <Sparkles className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              </div>
              <div className="text-[10px] text-pink-300 font-medium">Room #8892 • 1.4K Online</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-pink-500/20 border border-pink-500/30 px-2.5 py-1 rounded-full text-[10px] font-bold text-pink-400">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-ping" />
            LIVE
          </div>
        </div>

        {/* Equalizer Audio Waves */}
        <div className="bg-zinc-950/80 p-3 rounded-2xl border border-white/5 flex items-center justify-between gap-2 mb-4">
          <span className="text-[10px] text-zinc-400 font-medium">HD Audio Wave:</span>
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

        {/* 6-Seat Speaker Grid */}
        <div className="grid grid-cols-3 gap-2.5 mb-4">
          {[
            { name: "Angel", role: "Host 👑", color: "from-pink-500 to-rose-600", active: true },
            { name: "Rahul", role: "Co-Host ⭐", color: "from-purple-500 to-indigo-600", active: true },
            { name: "Aanya", role: "VIP Speaker", color: "from-cyan-500 to-blue-600", active: true },
            { name: "Dev", role: "Speaker", color: "from-amber-500 to-orange-600", active: false },
            { name: "Priya", role: "Speaker", color: "from-emerald-500 to-teal-600", active: true },
            { name: "Take Seat", role: "Open Seat", color: "from-zinc-700 to-zinc-800", active: false, empty: true },
          ].map((seat, idx) => (
            <div
              key={idx}
              className={`p-2.5 rounded-2xl flex flex-col items-center justify-center text-center transition-all ${
                seat.empty
                  ? 'border border-dashed border-zinc-700 bg-zinc-950/40 hover:border-pink-500/50 cursor-pointer'
                  : 'bg-zinc-900/90 border border-white/10'
              }`}
            >
              <div className="relative mb-1">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-tr ${seat.color} p-[1.5px] flex items-center justify-center shadow-lg ${
                    seat.active ? 'ring-2 ring-pink-500/50 ring-offset-2 ring-offset-zinc-950' : ''
                  }`}
                >
                  <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-xs font-bold text-white">
                    {seat.empty ? '+' : seat.name.slice(0, 1)}
                  </div>
                </div>
                {seat.active && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-zinc-950" />
                )}
              </div>
              <span className="text-[11px] font-bold text-white truncate max-w-[70px]">{seat.name}</span>
              <span className="text-[9px] text-zinc-400 truncate">{seat.role}</span>
            </div>
          ))}
        </div>

        {/* Live Gifting Feed Overlay */}
        <div className="bg-gradient-to-r from-pink-900/40 via-purple-900/40 to-zinc-900/60 p-2.5 rounded-xl border border-pink-500/30 flex items-center justify-between mb-4 animate-in fade-in duration-500">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-pink-500/20 flex items-center justify-center">
              <Gift className="w-4 h-4 text-pink-400" />
            </div>
            <div className="text-[10px]">
              <span className="font-bold text-pink-300">Aanya</span> sent <span className="font-bold text-yellow-300">Dragon Crown 👑</span> x1
            </div>
          </div>
          <span className="text-[10px] font-extrabold text-gradient-gold">+{giftCount}</span>
        </div>

        {/* Room Action Control Buttons */}
        <div className="flex items-center justify-around bg-zinc-950/90 p-2 rounded-2xl border border-white/10">
          <button
            onClick={() => setMicMuted(!micMuted)}
            className={`p-2.5 rounded-xl transition ${
              micMuted ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'bg-zinc-800 text-zinc-200 hover:text-white'
            }`}
          >
            <Mic className="w-4 h-4" />
          </button>
          <button
            onClick={handleSendGift}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-pink-500/30 hover:scale-105 transition"
          >
            <Gift className="w-3.5 h-3.5" />
            Send Gift
          </button>
          <button className="p-2.5 rounded-xl bg-zinc-800 text-zinc-200 hover:text-white">
            <Volume2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
