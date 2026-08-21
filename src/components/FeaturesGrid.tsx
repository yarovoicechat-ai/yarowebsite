import { Mic, Radio, Gift, Crown, ShieldCheck, Coins, Sparkles, Zap, Lock } from 'lucide-react';

export default function FeaturesGrid() {
  const features = [
    {
      title: "Crystal Clear 1-on-1 Audio",
      desc: "Delivering high-definition HD audio with AI noise suppression and ultra-low 20ms latency for real-time conversation.",
      icon: <Mic className="w-7 h-7 text-pink-400" />,
      tag: "Ultra HD Audio",
      gradient: "from-pink-500/20 to-rose-500/5",
    },
    {
      title: "Multi-Host Voice Party Rooms",
      desc: "Join 9-seat interactive audio rooms with real-time sound equalizers, background music streaming, and room mini-games.",
      icon: <Radio className="w-7 h-7 text-purple-400" />,
      tag: "Live Audio Lounges",
      gradient: "from-purple-500/20 to-indigo-500/5",
    },
    {
      title: "3D Animated Luxury Gifts",
      desc: "Surprise hosts with stunning 3D crowns, sports cars, castles, and animated full-screen entrance banners.",
      icon: <Gift className="w-7 h-7 text-yellow-400" />,
      tag: "Real-time Gifting",
      gradient: "from-yellow-500/20 to-amber-500/5",
    },
    {
      title: "VIP & Level Privileges",
      desc: "Unlock custom avatar frames, unique entrance effects, chat bubble colors, and exclusive VIP badges as you level up.",
      icon: <Crown className="w-7 h-7 text-amber-400" />,
      tag: "Level Rewards",
      gradient: "from-amber-500/20 to-orange-500/5",
    },
    {
      title: "Host Monetization & Cashout",
      desc: "Convert earned virtual diamonds into real rewards with fast payouts for official hosts, agencies, and sellers.",
      icon: <Coins className="w-7 h-7 text-emerald-400" />,
      tag: "Creator Rewards",
      gradient: "from-emerald-500/20 to-teal-500/5",
    },
    {
      title: "AI Safety & Anti-Fraud Security",
      desc: "Comprehensive screen security controls, screenshot protection, MongoDB security, and 24/7 automated content moderation.",
      icon: <ShieldCheck className="w-7 h-7 text-cyan-400" />,
      tag: "Encrypted Privacy",
      gradient: "from-cyan-500/20 to-blue-500/5",
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Next-Gen Social Features
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Designed for Ultimate <span className="text-gradient">Voice Entertainment</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Everything you need for seamless audio conversations, vibrant party lounges, and rewarding social connections in one modern app.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`glass glass-hover p-8 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between space-y-6 bg-gradient-to-br ${item.gradient} group`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-950/80 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-zinc-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-pink-400 group-hover:translate-x-1 transition-transform">
                Explore feature &rarr;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
