export default function DeleteAccount() {
  return (
    <div className="max-w-4xl mx-auto px-[5%] py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Account Deletion & Data Safety</h1>
        <p className="text-zinc-500">How to manage your data and request account removal.</p>
      </div>

      <div className="space-y-12">
        {/* Method 1 */}
        <section className="glass p-8 md:p-12 rounded-3xl border-white/5">
          <h2 className="text-2xl font-bold mb-6">Method 1: In-App Deletion</h2>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            The fastest way to delete your account is directly through the Meethi Chaat application. This process is immediate and irreversible.
          </p>
          <div className="bg-white/5 p-6 rounded-2xl">
            <ol className="list-decimal list-inside space-y-3 text-zinc-300">
              <li>Open the Meethi Chaat App.</li>
              <li>Go to your <strong>Profile</strong>.</li>
              <li>Tap on the <strong>Settings</strong> (gear icon).</li>
              <li>Select <strong>Account</strong>.</li>
              <li>Tap <strong>Delete Account</strong> and confirm your choice.</li>
            </ol>
          </div>
        </section>

        {/* Method 2 */}
        <section className="glass p-8 md:p-12 rounded-3xl border-white/5">
          <h2 className="text-2xl font-bold mb-6">Method 2: Email Request</h2>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            If you cannot access the app, you can request account deletion by emailing our support team.
          </p>
          <div className="flex flex-col items-start gap-4">
            <p className="text-zinc-300">Send an email to: <strong className="text-primary">support@mithichat.com</strong></p>
            <p className="text-zinc-300">Subject: <strong>Account Deletion Request</strong></p>
            <p className="text-zinc-500 text-sm mt-4 italic">
              Please include your registered email or phone number in the email. We will process your request within 30 days.
            </p>
          </div>
        </section>

        {/* Data Retained */}
        <section className="glass p-8 md:p-12 rounded-3xl border-white/5 bg-red-500/5 border-red-500/20">
          <h2 className="text-2xl font-bold mb-4 text-red-400">What happens to your data?</h2>
          <p className="text-zinc-400 leading-relaxed">
            Upon deletion, all your personal information, including profile data, chat history (text), and contact lists, will be permanently removed from our active databases. As stated in our Privacy Policy, voice calls are never recorded, so no audio data exists to be deleted.
          </p>
        </section>
      </div>
    </div>
  );
}
