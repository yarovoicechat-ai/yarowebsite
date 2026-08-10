import Link from 'next/link';

export default function Navbar() {
  const downloadUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    ? `${process.env.NEXT_PUBLIC_API_BASE_URL.replace(/\/api$/, '')}/api/v1/app-releases/download`
    : 'https://api.mithichat.live/api/v1/app-releases/download';

  return (
    <nav className="fixed top-0 w-full glass-nav z-50 px-[5%] py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gradient">
          Meethi Chaat
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-zinc-400 hover:text-white transition-colors">Home</Link>
          <Link href="/#features" className="text-zinc-400 hover:text-white transition-colors">Features</Link>
          <Link href="/terms" className="text-zinc-400 hover:text-white transition-colors">Terms</Link>
          <Link href="/privacy" className="text-zinc-400 hover:text-white transition-colors">Privacy</Link>
          <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">Contact</Link>
          <a href={downloadUrl} className="btn-primary text-sm py-2 px-6">
            Download App
          </a>
        </div>
      </div>
    </nav>
  );
}
