import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#09090b] border-t border-white/5 py-12 px-[5%] mt-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <div className="text-xl font-bold text-gradient">Meethi Chaat</div>
        <p className="text-zinc-500 text-sm max-w-md text-center">
          Experience crystal clear voice calls, meet amazing people, and enjoy secure private chats with Meethi Chaat.
        </p>
        <div className="flex gap-6 text-sm text-zinc-400">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          <Link href="/delete-account" className="hover:text-white transition-colors">Data Deletion</Link>
        </div>
        <div className="text-zinc-600 text-xs mt-4">
          &copy; {new Date().getFullYear()} Meethi Chaat. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
