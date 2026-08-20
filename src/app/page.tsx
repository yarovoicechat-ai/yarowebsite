import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import PhoneShowcase from '@/components/PhoneShowcase';
import StatsSection from '@/components/StatsSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import BuildDownloadCard from '@/components/BuildDownloadCard';
import SecurityBanner from '@/components/SecurityBanner';
import Testimonials from '@/components/Testimonials';
import { Sparkles, ShieldCheck, Download, Radio, Star, Play, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Glow Spheres in background */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Live Release Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500" />
              </span>
              <span className="text-xs font-bold text-zinc-200">
                Official Release <span className="text-pink-400">v1.8.4</span> Live
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 font-bold border border-pink-500/30">
                69.7 MB
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Connect & Voice Chat <br />
              <span className="text-gradient">with the World</span>
            </h1>

            {/* Subtitle */}
            <p className="text-zinc-300 text-base sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Experience crystal-clear 1-on-1 voice calls, vibrant 9-seat audio party rooms, 3D animated gifting, and rewarding host monetization with <strong className="text-white">Meethi Chaat</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <DownloadButton variant="primary" showIcon={true} className="w-full sm:w-auto text-base" />
              <a
                href="#features"
                className="btn-glass px-8 py-4 rounded-full text-base font-semibold text-white flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Radio className="w-5 h-5 text-purple-400" />
                Explore Features
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-400 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Play Protect Verified
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 100% Virus Free
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9 Rating (25K+ Reviews)
              </div>
            </div>
          </div>

          {/* Right Phone Showcase Column */}
          <div className="lg:col-span-5 flex justify-center">
            <PhoneShowcase />
          </div>
        </div>
      </section>

      {/* PLATFORM STATS */}
      <StatsSection />

      {/* CORE FEATURES GRID */}
      <FeaturesGrid />

      {/* BUILD DOWNLOAD SPECIFICATION CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BuildDownloadCard />
      </section>

      {/* SAFETY & PRIVACY BANNER */}
      <SecurityBanner />

      {/* COMMUNITY REVIEWS */}
      <Testimonials />
    </div>
  );
}
