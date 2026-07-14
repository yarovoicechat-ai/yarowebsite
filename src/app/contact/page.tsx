export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-[5%] py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
      <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
        Have questions, feedback, or need support? Our team is dedicated to providing you with the best experience possible.
      </p>

      <div className="glass p-12 rounded-3xl border-primary/20 max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        </div>
        <h2 className="text-3xl font-bold mb-4">Email Us</h2>
        <p className="text-zinc-500 mb-8">We typically respond within 24 hours.</p>
        <a href="mailto:support@mithichat.com" className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity">
          support@mithichat.com
        </a>
      </div>

      <div className="mt-16 text-zinc-500 text-sm">
        <p>Registered Address: Meethi Chaat Inc.</p>
        <p>Availability: 24/7 Support for Premium Users</p>
      </div>
    </div>
  );
}
