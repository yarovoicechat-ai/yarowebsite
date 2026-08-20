import { Download, Users, Star, ShieldCheck, Zap, Radio } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      icon: <Download className="w-6 h-6 text-pink-400" />,
      value: "500,000+",
      label: "Total App Downloads",
      subtext: "Across Android & Web",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      value: "50,000+",
      label: "Daily Active Users",
      subtext: "Global Voice Community",
    },
    {
      icon: <Radio className="w-6 h-6 text-cyan-400" />,
      value: "10,000+",
      label: "Live Audio Rooms",
      subtext: "Hosted Every Day",
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />,
      value: "4.9 ★",
      label: "Community Rating",
      subtext: "Based on 25K+ Reviews",
    },
  ];

  return (
    <section id="live-stats" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="glass glass-hover p-6 rounded-3xl border border-white/10 flex flex-col items-center text-center space-y-2 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight pt-2">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-zinc-300">
                {item.label}
              </div>
              <div className="text-[11px] text-zinc-500 font-medium">
                {item.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
