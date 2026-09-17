import { Mail, ShieldCheck, Building, Headphones } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold uppercase tracking-wider">
          <Headphones className="w-3.5 h-3.5" /> 24/7 Dedicated Support
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          Get in Touch with <span className="text-gradient">Meethi Chat</span>
        </h1>
        <p className="text-zinc-400 text-base">
          Have questions, hosting inquiries, or technical feedback? Our dedicated support team is available 24/7 to assist you.
        </p>
      </div>

      {/* Support Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass glass-hover p-8 rounded-3xl border border-white/10 space-y-4 text-center">
          <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mx-auto text-pink-400 shadow-lg">
            <Mail className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-white">General Support</h3>
          <p className="text-zinc-400 text-xs leading-relaxed">
            For account assistance, app technical feedback, and general questions.
          </p>
          <a
            href="mailto:support@voicecallclub.com"
            className="block text-pink-400 font-bold text-sm hover:underline pt-2"
          >
            support@voicecallclub.com
          </a>
        </div>

        <div className="glass glass-hover p-8 rounded-3xl border border-white/10 space-y-4 text-center">
          <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto text-purple-400 shadow-lg">
            <Building className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-white">Agency & Host Recruitment</h3>
          <p className="text-zinc-400 text-xs leading-relaxed">
            Apply as an official talent host, agency leader, or coin seller partner.
          </p>
          <a
            href="mailto:agency@voicecallclub.com"
            className="block text-purple-400 font-bold text-sm hover:underline pt-2"
          >
            agency@voicecallclub.com
          </a>
        </div>

        <div className="glass glass-hover p-8 rounded-3xl border border-white/10 space-y-4 text-center">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto text-cyan-400 shadow-lg">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-white">Safety & Appeals</h3>
          <p className="text-zinc-400 text-xs leading-relaxed">
            Report safety violations, policy concerns, or account appeal requests.
          </p>
          <a
            href="mailto:safety@voicecallclub.com"
            className="block text-cyan-400 font-bold text-sm hover:underline pt-2"
          >
            safety@voicecallclub.com
          </a>
        </div>
      </div>

      {/* Info Card */}
      <div className="glass p-8 rounded-3xl border border-white/10 text-center space-y-2">
        <h4 className="text-white font-bold text-base">Office Availability & Response Time</h4>
        <p className="text-zinc-400 text-xs max-w-lg mx-auto">
          Our global customer care team operates 24/7. Average email response time is under 2 hours for active app users and hosts.
        </p>
      </div>
    </div>
  );
}
