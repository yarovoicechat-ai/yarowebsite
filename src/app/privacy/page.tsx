import { Lock } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Overview & Commitment to Privacy",
      content: "Welcome to Yaro (\"we,\" \"our,\" or \"us\"). We are committed to safeguarding user data, ensuring maximum transparency, and upholding international privacy standards. This Privacy Policy details how we collect, handle, and protect your information when you use our mobile application and related services."
    },
    {
      title: "2. Information We Collect",
      subsections: [
        {
          subtitle: "Real-Time Microphone & Audio Data",
          text: "Yaro is an interactive voice chat platform requiring microphone access (android.permission.RECORD_AUDIO). Audio data is processed strictly in real-time for live voice communication. Voice calls and room conversations are NEVER recorded or stored on our servers."
        },
        {
          subtitle: "Account & Profile Information",
          text: "When creating an account, we store basic profile information such as username, user ID, gender, avatar picture, and login history (IP address & device ID) to provide personalized social features and prevent fraud."
        },
        {
          subtitle: "In-App Purchases & Digital Coins",
          text: "Virtual gifts and coins purchases are processed securely through Google Play Billing and authorized payment gateways. We do not store or process direct credit card or financial banking credentials."
        }
      ]
    },
    {
      title: "3. Third-Party Partners & Infrastructure",
      content: "We utilize trusted industry infrastructure, including real-time audio streaming, Google Play Services (secure billing & analytics), and Firebase Admin (push notifications & authentication) to deliver reliable platform performance."
    },
    {
      title: "4. Data Security & Storage",
      content: "All data transfers occur over encrypted TLS 1.3 channels. User databases are secured with MongoDB security rules, automated rate limiting, and screen security protection to prevent unauthorized data leakage."
    },
    {
      title: "5. Account Deletion & Data Rights",
      content: "Users retain full rights to request complete deletion of their account and data at any time directly in the app (Profile -> Settings -> Account Security -> Delete Account) or by emailing support@yaroapp.in."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold uppercase tracking-wider">
          <Lock className="w-3.5 h-3.5" /> Privacy Guarantee
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        <p className="text-zinc-400 text-sm">
          Effective Date: August 20, 2026 • Version 2.4 Compliance
        </p>
      </div>

      <div className="space-y-8">
        {sections.map((sec, idx) => (
          <div key={idx} className="glass p-8 rounded-3xl border border-white/10 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-500" />
              {sec.title}
            </h2>
            {sec.content && (
              <p className="text-zinc-300 text-sm leading-relaxed">{sec.content}</p>
            )}
            {sec.subsections && (
              <div className="space-y-4 pt-2">
                {sec.subsections.map((sub, sIdx) => (
                  <div key={sIdx} className="bg-zinc-950/80 p-5 rounded-2xl border border-white/5 space-y-1.5">
                    <h3 className="text-sm font-bold text-pink-400">{sub.subtitle}</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">{sub.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Account Deletion Notice Box */}
      <div className="glass p-8 rounded-3xl border border-rose-500/30 bg-rose-950/20 space-y-4">
        <div className="flex items-center gap-3">
          <span className="p-2.5 rounded-xl bg-rose-500/20 text-rose-400">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </span>
          <div>
            <h3 className="text-lg font-bold text-white">Account & Personal Data Deletion</h3>
            <p className="text-xs text-zinc-400">Google Play User Data Policy Compliance</p>
          </div>
        </div>
        <p className="text-zinc-300 text-sm leading-relaxed">
          Users have the right to request permanent deletion of their account and all associated personal data at any time, even if they have uninstalled the Yaro application.
        </p>
        <div className="pt-2">
          <a
            href="/delete-account"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-rose-600/30 transition"
          >
            Open Data Deletion Portal &rarr;
          </a>
        </div>
      </div>

      <div className="glass p-8 rounded-3xl border border-pink-500/20 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Have Privacy Questions?</h3>
        <p className="text-zinc-400 text-xs max-w-md mx-auto">
          Contact our Data Protection Officer at <strong className="text-pink-400">privacy@yaroapp.in</strong>
        </p>
      </div>
    </div>
  );
}
