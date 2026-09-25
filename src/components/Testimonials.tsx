import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Ananya Sharma",
      role: "Official Host ⭐",
      text: "The audio clarity in voice rooms is unmatched! Gift animations look super premium and host payouts are extremely fast.",
      stars: 5,
      badge: "Verified Host",
      avatar: "👑",
      color: "from-pink-500 to-purple-600",
    },
    {
      name: "Rohan Verma",
      role: "VIP Level 18",
      text: "Best social voice app for late night party rooms and making new friends. Zero lag during 1-on-1 audio calls!",
      stars: 5,
      badge: "Top VIP",
      avatar: "🔥",
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "Priya Malhotra",
      role: "Agency Leader",
      text: "Screen security and privacy controls give complete peace of mind. Our team loves hosting events on Yaro.",
      stars: 5,
      badge: "Agency Leader",
      avatar: "💎",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-yellow-400" /> Community Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Loved by <span className="text-gradient">Thousands of Users</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            See what our hosts, VIP members, and community leaders say about their experience on Yaro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass glass-hover p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${rev.color} flex items-center justify-center text-sm shadow-md`}>
                  {rev.avatar}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-white flex items-center justify-between">
                    <span>{rev.name}</span>
                  </div>
                  <div className="text-xs text-zinc-400 flex items-center justify-between">
                    <span>{rev.role}</span>
                    <span className="text-[10px] font-semibold text-pink-400 px-2 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/20">
                      {rev.badge}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
