'use client';

import { useState, useEffect } from 'react';

interface DownloadButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const DEFAULT_FALLBACK_URL = 'https://github.com/bajpeyigroupdev/management_Panel/raw/main/public/releases/MeethiChat-v1.8.3.apk';

export default function DownloadButton({ className, children }: DownloadButtonProps) {
  const [downloadUrl, setDownloadUrl] = useState<string>(DEFAULT_FALLBACK_URL);

  useEffect(() => {
    async function fetchLatestRelease() {
      try {
        const res = await fetch('https://api.mithichat.live/api/v1/app-releases/latest');
        if (res.ok) {
          const json = await res.json();
          if (json && json.success && json.data) {
            const liveUrl = json.data.fileUrl || json.data.downloadUrl;
            if (liveUrl && liveUrl.startsWith('http')) {
              setDownloadUrl(liveUrl);
            }
          }
        }
      } catch (e) {
        console.warn('Could not fetch dynamic release URL, using fallback build:', e);
      }
    }
    fetchLatestRelease();
  }, []);

  return (
    <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className={className}>
      {children || 'Download App'}
    </a>
  );
}
