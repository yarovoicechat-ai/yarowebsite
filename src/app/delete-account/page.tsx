import { Trash2, Smartphone, Mail, ShieldAlert } from 'lucide-react';

export default function DeleteAccount() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider">
          <Trash2 className="w-3.5 h-3.5" /> User Data Rights & Account Removal
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          Account Deletion & <span className="text-gradient">Data Safety</span>
        </h1>
        <p className="text-zinc-400 text-base">
          We respect your privacy and data ownership rights. You can easily delete your Meethi Chat account and associated data at any time.
        </p>
      </div>

      <div className="space-y-8">
        {/* Method 1: In-App Deletion */}
        <div className="glass p-8 rounded-3xl border border-white/10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Method 1: Instant In-App Deletion</h3>
              <p className="text-zinc-400 text-xs">Fastest and recommended way to purge account data.</p>
            </div>
          </div>

          <div className="bg-zinc-950/80 p-6 rounded-2xl border border-white/5 space-y-3">
            <ol className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                <span>Open the <strong>Meethi Chat App</strong> on your Android mobile device.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                <span>Navigate to your <strong>Profile Tab</strong> at the bottom right navigation bar.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                <span>Tap the <strong>Settings (Gear Icon)</strong> and select <strong>Account Security</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                <span>Tap <strong>Delete My Account</strong> and confirm with your verification OTP.</span>
              </li>
            </ol>
          </div>
        </div>

        {/* Method 2: Support Email Request */}
        <div className="glass p-8 rounded-3xl border border-white/10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Method 2: Support Email Request</h3>
              <p className="text-zinc-400 text-xs">If you cannot access your mobile app.</p>
            </div>
          </div>

          <div className="bg-zinc-950/80 p-6 rounded-2xl border border-white/5 space-y-4 text-sm text-zinc-300">
            <p>
              Send an email request to <a href="mailto:support@voicecallclub.com" className="text-pink-400 font-bold hover:underline">support@voicecallclub.com</a> with:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-400 text-xs">
              <li>Subject: <strong>Account & Data Deletion Request</strong></li>
              <li>Your Registered Phone Number / Email Address</li>
              <li>Your User ID or Meethi ID (if known)</li>
            </ul>
            <p className="text-zinc-500 text-xs pt-2 italic">
              Our data privacy team will verify your identity and process full data removal within 24-48 hours.
            </p>
          </div>
        </div>

        {/* Data Purge Policy Notice */}
        <div className="glass p-8 rounded-3xl border border-rose-500/30 bg-rose-950/10 space-y-3">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-base">
            <ShieldAlert className="w-5 h-5" /> What Data is Removed Permanently?
          </div>
          <p className="text-zinc-300 text-xs leading-relaxed">
            Upon deletion, your profile records, avatar images, chat logs, friends list, and coin transaction logs will be permanently deleted from active MongoDB databases. Voice audio calls are never recorded or stored.
          </p>
        </div>
      </div>
    </div>
  );
}
