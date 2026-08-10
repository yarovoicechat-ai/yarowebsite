import Link from 'next/link';

export default function Home() {
  const downloadUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    ? `${process.env.NEXT_PUBLIC_API_BASE_URL.replace(/\/api$/, '')}/api/v1/app-releases/download`
    : 'https://api.mithichat.live/api/v1/app-releases/download';

  return (
    <div className="px-[5%] max-w-7xl mx-auto pt-20">
      {/* Hero Section */}
      <section className="text-center py-20 animate-in fade-in slide-in-from-top-10 duration-1000">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Connect & Chat<br />
          <span className="text-gradient">with the World</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Experience crystal clear one-to-one voice calls, meet amazing people, and enjoy secure private chats with Meethi Chaat.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={downloadUrl} className="btn-primary flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.523 15.3414L18.4556 16.2741C18.8461 16.6646 18.8461 17.2977 18.4556 17.6883L17.523 18.6209C17.1325 19.0115 16.4993 19.0115 16.1088 18.6209L15.1761 17.6883C14.7856 17.2977 14.7856 16.6646 15.1761 16.2741L16.1088 15.3414C16.4993 14.9509 17.1325 14.9509 17.523 15.3414ZM11.127 18.2325L13.1251 16.2344L10.5135 13.6228L8.51537 15.621L11.127 18.2325ZM14.1837 15.1758L16.7953 12.5642L14.7972 10.5661L12.1856 13.1777L14.1837 15.1758ZM9.45695 14.6794L11.4551 12.6812L8.84348 10.0696L6.84534 12.0677L9.45695 14.6794ZM12.5136 11.6226L15.1253 9.01095L13.1271 7.01281L10.5155 9.62446L12.5136 11.6226Z"/></svg>
            Download Android App
          </a>
          <Link href="#features" className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all">
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Crystal Clear Audio",
            desc: "Enjoy low-latency, high-quality voice communication powered by Agora RTC. Chat as if you're in the same room.",
            icon: (
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
            )
          },
          {
            title: "Private Connections",
            desc: "Connect instantly through secure one-to-one voice calls and text chats. Our strict moderation ensures a safe space for everyone.",
            icon: (
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            )
          },
          {
            title: "Virtual Gifts",
            desc: "Show appreciation to your favorite hosts and friends with beautiful virtual gifts and special animations.",
            icon: (
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            )
          }
        ].map((feature, i) => (
          <div key={i} className="glass p-8 rounded-3xl hover:border-primary/30 transition-all hover:-translate-y-2 group">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-zinc-500 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-white/5 rounded-3xl border border-white/5 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Safety is Our Priority</h2>
        <p className="text-zinc-400 max-w-xl mx-auto mb-8">
          We use advanced moderation tools and real-time monitoring to ensure Meethi Chaat remains a friendly and safe environment for all users.
        </p>
        <Link href="/privacy" className="text-primary font-medium hover:underline">
          Read our Safety Guidelines &rarr;
        </Link>
      </section>
    </div>
  );
}
