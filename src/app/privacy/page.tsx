export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Introduction",
      content: "Welcome to Meethi Chaat (\"we,\" \"our,\" or \"us\"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Meethi Chaat mobile application (the \"App\"). By using the App, you agree to the collection and use of information in accordance with this policy."
    },
    {
      title: "Information We Collect",
      subsections: [
        {
          subtitle: "Microphone and Audio Data",
          text: "Because Meethi Chaat is a voice chat application, the App requires access to your device's microphone (android.permission.RECORD_AUDIO). We use it strictly to enable real-time voice communication. We do not record or store your voice conversations on our servers."
        },
        {
          subtitle: "In-App Purchases and Billing",
          text: "The App allows users to make in-app purchases. All payments are processed securely through the Google Play Billing Library. We do not collect or store your direct credit card information."
        }
      ]
    },
    {
      title: "Third-Party Services",
      content: "We use third-party service providers like Agora RTC (real-time audio), Google Play Services (billing), and Firebase (authentication/database) to facilitate core functionality."
    },
    {
      title: "Data Retention and Account Deletion",
      content: "We retain your personal data only for as long as necessary. You have the right to request deletion of your account directly within the App (Settings -> Account -> Delete) or by emailing support@mithichat.com."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-[5%] py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-zinc-500">Effective Date: May 2, 2026</p>
      </div>

      <div className="space-y-12">
        {sections.map((section, idx) => (
          <section key={idx} className="glass p-8 md:p-12 rounded-3xl border-white/5">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-bold">
                {idx + 1}
              </span>
              <h2 className="text-2xl font-bold">{section.title}</h2>
            </div>
            
            {section.content && <p className="text-zinc-400 leading-relaxed mb-6">{section.content}</p>}
            
            {section.subsections && (
              <div className="space-y-8 mt-8">
                {section.subsections.map((sub, sIdx) => (
                  <div key={sIdx} className="border-l-2 border-primary/30 pl-6">
                    <h3 className="text-xl font-semibold mb-3">{sub.subtitle}</h3>
                    <p className="text-zinc-400 leading-relaxed">{sub.text}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
      
      <div className="mt-20 glass p-8 rounded-3xl text-center border-primary/20">
        <h2 className="text-2xl font-bold mb-4">Questions about your privacy?</h2>
        <p className="text-zinc-400 mb-6">Our support team is available 24/7 to answer any questions regarding your data safety.</p>
        <a href="mailto:support@mithichat.com" className="btn-primary inline-block">
          Contact Privacy Team
        </a>
      </div>
    </div>
  );
}
