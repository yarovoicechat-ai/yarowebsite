'use client';

import { useState, useEffect } from 'react';
import { Download, ArrowRight } from 'lucide-react';

interface DownloadButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'navbar' | 'badge';
  children?: React.ReactNode;
  showIcon?: boolean;
}

const DEFAULT_FALLBACK_URL = 'https://api.mithichat.live/api/v1/app-releases/download';

export default function DownloadButton({
  className = '',
  variant = 'primary',
  children,
  showIcon = true,
}: DownloadButtonProps) {
  const [downloadUrl, setDownloadUrl] = useState<string>(DEFAULT_FALLBACK_URL);
  const [versionName, setVersionName] = useState<string>('1.8.4');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchLatestRelease() {
      try {
        const res = await fetch('https://api.mithichat.live/api/v1/app-releases/latest');
        if (res.ok) {
          const json = await res.json();
          if (json && json.success && json.data) {
            const apiDownloadUrl = json.data.downloadUrl;
            const fileUrl = json.data.fileUrl;
            
            // Prefer api.mithichat.live direct download endpoint or valid non-tunnel link
            let finalUrl = apiDownloadUrl || fileUrl;
            if (fileUrl && fileUrl.startsWith('http') && !/loca\.lt|ngrok|trycloudflare/i.test(fileUrl)) {
              finalUrl = fileUrl;
            } else if (apiDownloadUrl && !/loca\.lt|ngrok|trycloudflare/i.test(apiDownloadUrl)) {
              finalUrl = apiDownloadUrl;
            }

            if (finalUrl) {
              setDownloadUrl(finalUrl);
            }
            if (json.data.versionName) {
              setVersionName(json.data.versionName);
            }
          }
        }
      } catch (e) {
        console.warn('Could not fetch dynamic release URL, using fallback build:', e);
      } finally {
        setLoading(false);
      }
    }
    fetchLatestRelease();
  }, []);

  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer select-none';

  let variantStyles = '';
  if (variant === 'primary') {
    variantStyles = 'btn-gradient px-8 py-4 rounded-full text-base gap-3 shadow-xl';
  } else if (variant === 'secondary') {
    variantStyles = 'btn-glass px-8 py-4 rounded-full text-base gap-3 text-white border-white/10 hover:border-pink-500/40';
  } else if (variant === 'navbar') {
    variantStyles = 'btn-gradient px-6 py-2.5 rounded-full text-xs font-bold gap-2 tracking-wide uppercase';
  } else if (variant === 'badge') {
    variantStyles = 'px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-medium gap-2';
  }

  return (
    <a
      href={downloadUrl}
      download={`MeethiChat-v${versionName}.apk`}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles} ${className}`}
      title={`Download Meethi Chat APK v${versionName}`}
    >
      {showIcon && <Download className="w-5 h-5 text-white animate-bounce shrink-0" />}
      <span>{children || `Download Android App v${versionName}`}</span>
      {variant === 'primary' && <ArrowRight className="w-5 h-5 opacity-80 shrink-0" />}
    </a>
  );
}
