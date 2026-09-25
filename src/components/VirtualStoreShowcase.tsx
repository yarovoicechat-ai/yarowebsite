'use client';

import React, { useState } from 'react';
import { ShoppingBag, Sparkles, Crown, Zap, Radio, Car, Tag, Palette, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface StoreShowcaseItem {
  id: string;
  name: string;
  category: string;
  price: string;
  validity: string;
  tag: string;
  color: string;
  gradient: string;
  desc: string;
  highlight: string;
}

const SHOWCASE_ITEMS: StoreShowcaseItem[] = [
  {
    id: 'uid-1',
    name: '88888 (Fortune Gold)',
    category: 'Unique ID',
    price: '50,000',
    validity: 'Permanent',
    tag: 'ROYAL GOLD',
    color: '#F59E0B',
    gradient: 'from-amber-500/20 via-yellow-600/10 to-transparent',
    desc: 'Elite 5-digit lucky fortune ID with golden profile shine & room entrance broadcast.',
    highlight: '88888',
  },
  {
    id: 'mic-1',
    name: 'Golden Pulse Wave',
    category: 'Mic Wave',
    price: '2,500',
    validity: '30 Days',
    tag: 'HOT SOUND',
    color: '#10B981',
    gradient: 'from-emerald-500/20 via-teal-600/10 to-transparent',
    desc: 'Dynamic audio pulse rings expanding rhythmically around your mic chair in voice parties.',
    highlight: 'Pulse Waves',
  },
  {
    id: 'frame-1',
    name: 'Rose Sovereign Frame',
    category: 'Avatar Frame',
    price: '3,500',
    validity: '30 Days',
    tag: 'EXCLUSIVE',
    color: '#EC4899',
    gradient: 'from-pink-500/20 via-rose-600/10 to-transparent',
    desc: 'Romantic floral frame with blooming roses and glowing sparkle petals around your avatar.',
    highlight: 'Rose Frame',
  },
  {
    id: 'entry-1',
    name: 'Royal Phantom Rolls',
    category: 'Entry Ride',
    price: '15,000',
    validity: '30 Days',
    tag: 'VIP CAR',
    color: '#8B5CF6',
    gradient: 'from-purple-500/20 via-indigo-600/10 to-transparent',
    desc: 'Luxury limousine rolls into the room with headlights flashing and horn fanfare.',
    highlight: 'Phantom Rolls',
  },
  {
    id: 'bubble-1',
    name: 'Cyberpunk Glow Bubble',
    category: 'Chat Bubble',
    price: '1,500',
    validity: '30 Days',
    tag: 'NEON HUD',
    color: '#06B6D4',
    gradient: 'from-cyan-500/20 via-sky-600/10 to-transparent',
    desc: 'Futuristic electric cyan chat bubble with holographic border on every room message.',
    highlight: 'Neon Glow',
  },
  {
    id: 'vip-1',
    name: 'SVIP Sovereign Crown',
    category: 'VIP Club',
    price: '35,000',
    validity: '90 Days',
    tag: 'SUPREME',
    color: '#EAB308',
    gradient: 'from-yellow-500/20 via-amber-600/10 to-transparent',
    desc: 'Emperor privileges: 1,000 daily diamonds, dragon entrance, stealth mode, and concierge.',
    highlight: 'SVIP Tier',
  },
];

export default function VirtualStoreShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Unique ID', 'Mic Wave', 'Avatar Frame', 'Entry Ride', 'Chat Bubble', 'VIP Club'];

  const filtered = activeCategory === 'All'
    ? SHOWCASE_ITEMS
    : SHOWCASE_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="store" className="py-24 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/40 text-pink-300 text-xs font-black uppercase tracking-wider shadow-lg shadow-pink-500/10">
            <ShoppingBag className="w-3.5 h-3.5 text-pink-400" />
            <span>Official Virtual Store</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Stand Out in Every Room with <br />
            <span className="text-gradient">Luxury Digital Assets</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Customize your Yaro identity with exclusive 5-digit fortune IDs, pulsating audio mic waves, custom chat bubbles, and grand luxury entrance vehicles.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {categories.map(cat => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all shadow-md ${
                  isSelected
                    ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white shadow-pink-500/30'
                    : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Store Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <div
              key={item.id}
              className={`rounded-3xl p-6 bg-gradient-to-b ${item.gradient} bg-zinc-900/60 border border-white/10 hover:border-pink-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl group relative overflow-hidden backdrop-blur-xl`}
            >
              {/* Badge Pill */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/10 border border-white/20 text-white">
                  {item.category}
                </span>
                <span
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider"
                  style={{ backgroundColor: `${item.color}25`, color: item.color }}
                >
                  {item.tag}
                </span>
              </div>

              {/* Visual Highlight Card */}
              <div
                className="h-32 rounded-2xl flex flex-col items-center justify-center p-4 border border-white/10 my-3 shadow-inner relative overflow-hidden"
                style={{ backgroundColor: `${item.color}15` }}
              >
                {item.category === 'Unique ID' && (
                  <div className="text-center">
                    <Crown className="w-6 h-6 text-amber-400 mx-auto mb-1 animate-pulse" />
                    <span className="text-3xl font-black text-amber-300 tracking-widest">{item.highlight}</span>
                    <p className="text-[10px] text-amber-200 uppercase tracking-widest mt-0.5 font-bold">Fortune Sovereign ID</p>
                  </div>
                )}

                {item.category === 'Mic Wave' && (
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-20 h-20 rounded-full animate-ping opacity-35 bg-emerald-400" />
                    <div className="w-14 h-14 rounded-full bg-emerald-500/30 border border-emerald-400 flex items-center justify-center text-emerald-300 shadow-lg">
                      <Radio className="w-7 h-7 animate-pulse" />
                    </div>
                  </div>
                )}

                {item.category === 'Avatar Frame' && (
                  <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-pink-500 via-rose-500 to-yellow-400 flex items-center justify-center shadow-lg">
                    <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center text-xl">
                      👑
                    </div>
                  </div>
                )}

                {item.category === 'Entry Ride' && (
                  <div className="text-center">
                    <Car className="w-10 h-10 text-purple-400 mx-auto animate-bounce mb-1" />
                    <p className="text-xs font-black text-purple-200 uppercase tracking-wider">His Excellency Arrives</p>
                  </div>
                )}

                {item.category === 'Chat Bubble' && (
                  <div className="bg-zinc-950/90 border-2 border-cyan-400 rounded-xl px-4 py-2 text-center shadow-md">
                    <p className="text-xs font-bold text-white">Hey! Join the Yaro Party 🎉</p>
                  </div>
                )}

                {item.category === 'VIP Club' && (
                  <div className="text-center">
                    <Crown className="w-9 h-9 text-yellow-400 mx-auto animate-pulse" />
                    <span className="text-xs font-black text-yellow-200 uppercase tracking-widest block mt-1">Sovereign Tier</span>
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white group-hover:text-pink-300 transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>

              {/* Price & Duration */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10 text-xs">
                <div className="flex items-center gap-1.5 font-extrabold text-amber-400">
                  <span className="text-base">💎</span>
                  <span className="text-sm font-black">{item.price}</span>
                  <span className="text-zinc-500 text-[11px] font-normal">Diamonds</span>
                </div>

                <span className="text-zinc-400 text-xs font-semibold px-2 py-0.5 rounded-md bg-white/5">
                  {item.validity}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-pink-950/50 via-purple-950/50 to-indigo-950/50 border border-pink-500/30 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Want to unlock custom store items & perks?</h3>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl">
              Download the official Yaro Android app today, recharge diamonds with Google Play or UPI, and equip luxury profile cosmetics instantly.
            </p>
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=yaro.vc.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-sm font-bold shadow-lg shadow-pink-500/25 transition inline-flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <span>Open In Yaro App</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
