'use client';

import { useState, useEffect } from 'react';
import DownloadButton from './DownloadButton';
import { ShieldCheck, X } from 'lucide-react';

export default function FloatingDownloadBar() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (closed || !visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 z-40 max-w-md animate-in slide-in-from-bottom-6 duration-300">
      <div className="glass p-4 rounded-3xl border border-pink-500/30 bg-[#080414]/95 shadow-2xl backdrop-blur-2xl flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Yaro App Icon"
            className="w-11 h-11 rounded-2xl border-2 border-pink-500/50 shadow-lg shadow-pink-500/30 object-cover shrink-0"
          />
          <div>
            <div className="text-xs font-extrabold text-white flex items-center gap-1.5">
              Yaro App
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-pink-500/20 text-pink-400 font-bold">
                v0.0.2
              </span>
            </div>
            <div className="text-[10px] text-zinc-400 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" /> Play Protect Safe • 69.7 MB
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <DownloadButton variant="navbar" className="py-2.5 px-5 text-xs font-extrabold">
            Download
          </DownloadButton>
          <button
            onClick={() => setClosed(true)}
            className="p-1 rounded-full text-zinc-500 hover:text-white transition"
            aria-label="Close bar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
