import { FileText, CheckCircle2 } from 'lucide-react';

export default function TermsOfService() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By downloading, installing, or accessing the Yaro mobile application, these Terms of Service automatically apply to you. Please read them carefully before using our platform services."
    },
    {
      title: "2. Age Eligibility (18+ Adult Platform)",
      content: "You must be at least 18 years old to access or register on Yaro. By using the app, you represent and warrant that you are 18 years of age or older."
    },
    {
      title: "3. User Conduct & Zero-Tolerance Moderation",
      points: [
        "Zero Tolerance for Hate & Harassment: Nudity, sexual exploitation, offensive hate speech, and harassment are strictly prohibited.",
        "Instant Block & Report: Users can report violators or block abusive callers instantly via the in-app moderation options.",
        "24-Hour Review & Ban: Reported profiles are inspected by our moderation team within 24 hours. Banned users lose access permanently."
      ]
    },
    {
      title: "4. Virtual Coins, Gifts & Host Monetization",
      content: "Virtual coins purchased in-app are non-refundable digital goods. Talent hosts, sellers, and agencies must comply with host guidelines for diamond cashouts."
    },
    {
      title: "5. Intellectual Property & Modifications",
      content: "All trademarks, logos, audio algorithms, and platform assets belong exclusively to Yaro. We reserve the right to modify these terms with advance notice."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider">
          <FileText className="w-3.5 h-3.5" /> Platform Rules & Terms
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          Terms of <span className="text-gradient">Service</span>
        </h1>
        <p className="text-zinc-400 text-sm">
          Last Updated: August 20, 2026 • Legal Terms
        </p>
      </div>

      <div className="space-y-8">
        {sections.map((sec, idx) => (
          <div key={idx} className="glass p-8 rounded-3xl border border-white/10 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              {sec.title}
            </h2>
            {sec.content && (
              <p className="text-zinc-300 text-sm leading-relaxed">{sec.content}</p>
            )}
            {sec.points && (
              <ul className="space-y-2 pt-2">
                {sec.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
