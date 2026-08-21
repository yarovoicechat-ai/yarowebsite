'use client';

import { useState } from 'react';
import { Coins, Sparkles, Crown, ArrowRight, DollarSign, Award, Heart } from 'lucide-react';

export default function HostEarningsCalculator() {
  const [dailyHours, setDailyHours] = useState(2);
  const [giftTier, setGiftTier] = useState(3); // 1 to 5 scale

  // Earnings calculation logic
  const baseMonthlyDiamonds = [50000, 150000, 400000, 1000000, 2500000];
  const diamonds = baseMonthlyDiamonds[giftTier - 1] * (dailyHours / 2);
  const estimatedINR = Math.round(diamonds * 0.08); // INR estimate
  const estimatedUSD = Math.round(estimatedINR / 86);

  return (
    <section id="calculator" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass p-8 sm:p-12 rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-yellow-950/20 via-zinc-900/80 to-purple-950/30 relative overflow-hidden space-y-8 shadow-2xl">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-extrabold uppercase tracking-wider">
              <Crown className="w-3.5 h-3.5 fill-yellow-400" /> Host & Creator Income Calculator
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Estimate Your Monthly <span className="text-gradient-gold">Host Earnings</span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Host live audio party rooms, receive 3D animated luxury gifts, and cash out your diamond earnings directly to your bank account or UPI every week.
            </p>
          </div>

          {/* Interactive Calculator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 pt-4">
            {/* Left Sliders Column */}
            <div className="lg:col-span-7 space-y-6 bg-zinc-950/80 p-6 sm:p-8 rounded-2xl border border-white/5">
              {/* Slider 1: Daily Hours */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-white flex items-center gap-2">
                    ⏱️ Daily Live Hosting Time:
                  </span>
                  <span className="font-extrabold text-pink-400 text-base">{dailyHours} Hours / Day</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="1"
                  value={dailyHours}
                  onChange={(e) => setDailyHours(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-pink-500"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-semibold">
                  <span>1 Hour</span>
                  <span>4 Hours</span>
                  <span>8 Hours</span>
                </div>
              </div>

              {/* Slider 2: Room Popularity & Gift Volume */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-white flex items-center gap-2">
                    🎁 Room Popularity & Gift Volume:
                  </span>
                  <span className="font-extrabold text-yellow-400 text-base">
                    {giftTier === 1 && '⭐ Rising Star'}
                    {giftTier === 2 && '🌟 Popular Room'}
                    {giftTier === 3 && '🔥 VIP Top Host'}
                    {giftTier === 4 && '👑 Crown Superstar'}
                    {giftTier === 5 && '💎 Legend Diamond Host'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={giftTier}
                  onChange={(e) => setGiftTier(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-semibold">
                  <span>Starter</span>
                  <span>VIP Host</span>
                  <span>Diamond Legend</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-zinc-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>100% Weekly Payouts • Direct UPI / Bank Transfer • Zero Minimum Delay</span>
              </div>
            </div>

            {/* Right Result Card Column */}
            <div className="lg:col-span-5 bg-gradient-to-tr from-yellow-500/10 via-pink-500/10 to-purple-600/10 p-8 rounded-2xl border border-yellow-500/30 flex flex-col justify-between items-center text-center space-y-6 shadow-xl">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">Estimated Monthly Earnings</span>
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight pt-1">
                  ₹{estimatedINR.toLocaleString('en-IN')}
                </div>
                <div className="text-xs font-bold text-zinc-400">
                  (~${estimatedUSD.toLocaleString('en-US')} USD / Month)
                </div>
              </div>

              <div className="bg-zinc-950/90 w-full py-3 px-4 rounded-xl border border-white/10 text-xs font-semibold text-zinc-300 space-y-1">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Estimated Diamonds:</span>
                  <span className="text-yellow-400 font-extrabold">{Math.round(diamonds).toLocaleString('en-IN')} 💎</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Host Royalty Rate:</span>
                  <span className="text-emerald-400 font-extrabold">Highest in Industry</span>
                </div>
              </div>

              <a
                href="mailto:agency@mithichat.live?subject=Official%20Host%20Application"
                className="btn-gold w-full py-3.5 rounded-full text-sm font-extrabold flex items-center justify-center gap-2"
              >
                Apply for Official Host Badge
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
