'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingDownloadBar from './FloatingDownloadBar';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  if (/^\/(room|user)\//.test(path)) return <>{children}</>;
  return <><Navbar /><main className="min-h-screen pt-10">{children}</main><FloatingDownloadBar /><Footer /></>;
}
