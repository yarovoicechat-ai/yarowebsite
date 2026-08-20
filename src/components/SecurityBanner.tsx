import { ShieldCheck, Lock, EyeOff, FileCheck, CheckCircle2 } from 'lucide-react';

export default function SecurityBanner() {
  return (
    <section id="safety" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass p-8 sm:p-12 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-950/20 via-zinc-900/60 to-purple-950/30 relative overflow-hidden space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> Trust & Security Priority
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Built with Uncompromising <span className="text-gradient">Privacy & Protection</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              We employ military-grade TLS encryption, strict content moderation policies, and device protection controls to keep your social experience safe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-950/60 p-6 rounded-2xl border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">End-to-End Encryption</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                All voice calls and personal messages are transmitted securely via 256-bit encrypted TLS channels.
              </p>
            </div>

            <div className="bg-zinc-950/60 p-6 rounded-2xl border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <EyeOff className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Screen & Recording Protection</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Integrated app screen security prevents unauthorized screenshots and screen recordings in private calls.
              </p>
            </div>

            <div className="bg-zinc-950/60 p-6 rounded-2xl border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <FileCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">24/7 AI Moderation</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Proactive automated violation detection ensures respect, zero harassment, and a welcoming community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
