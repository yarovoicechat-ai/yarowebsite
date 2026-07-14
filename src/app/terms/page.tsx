export default function TermsOfService() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By downloading or using the Meethi Chaat app, these terms will automatically apply to you. You should make sure therefore that you read them carefully before using the app. You're not allowed to copy, or modify the app, any part of the app, or our trademarks in any way."
    },
    {
      title: "User Conduct and UGC Policy",
      points: [
        "Zero Tolerance: We have zero tolerance for objectionable content (nudity, hate speech, harassment) or abusive users.",
        "Reporting & Blocking: Users can flag objectionable content or block abusive users immediately via the 'Report' or 'Block' buttons.",
        "Review Process: Our moderation team reviews reported content within 24 hours. Violators will be suspended or banned permanently."
      ]
    },
    {
      title: "Age Restrictions",
      content: "You must be at least 18 years old to use the App. By agreeing to these Terms, you represent and warrant to us that you are at least 18 years old."
    },
    {
      title: "Changes to This Agreement",
      content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice prior to any new terms taking effect."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-[5%] py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Terms of Service</h1>
        <p className="text-zinc-500">Last Updated: May 2, 2026</p>
      </div>

      <div className="space-y-12">
        {sections.map((section, idx) => (
          <section key={idx} className="glass p-8 md:p-12 rounded-3xl border-white/5">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-4">
              <span className="text-primary">#</span> {section.title}
            </h2>
            
            {section.content && <p className="text-zinc-400 leading-relaxed mb-6">{section.content}</p>}
            
            {section.points && (
              <ul className="space-y-4">
                {section.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex gap-4 text-zinc-400 leading-relaxed">
                    <span className="text-primary mt-1.5">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
