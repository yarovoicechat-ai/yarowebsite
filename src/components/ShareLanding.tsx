'use client';

import { useEffect } from 'react';
import type { SharePreview } from '@/lib/sharePreview';

export default function ShareLanding({ preview }: { preview: SharePreview }) {
  const path = `${preview.kind === 'room' ? 'room' : 'user'}/${encodeURIComponent(preview.id)}`;
  const store = `https://play.google.com/store/apps/details?id=yaro.vc.app&referrer=${preview.kind}_${encodeURIComponent(preview.id)}`;
  const appLink = `yaro://${path}`;
  const intent = `intent://${path}#Intent;scheme=yaro;package=yaro.vc.app;S.browser_fallback_url=${encodeURIComponent(store)};end`;
  useEffect(() => {
    if (/android/i.test(navigator.userAgent)) window.location.href = intent;
  }, [intent]);
  return (
    <div className="min-h-screen bg-white text-[#555] flex flex-col items-center">
      <section className="w-full max-w-xl px-6 pt-16 sm:pt-24 pb-14 text-center">
        <img src={preview.image} alt={preview.name} width={160} height={160}
          className="mx-auto h-36 w-36 sm:h-40 sm:w-40 rounded-full object-cover bg-amber-50"
          onError={event => {
            if (!event.currentTarget.src.endsWith('/default-avatar.webp')) event.currentTarget.src = '/default-avatar.webp';
          }} />
        <h1 className="mt-7 text-3xl font-medium break-words">{preview.name}</h1>
        <p className="mt-3 text-xl text-[#999]">{preview.kind === 'room' ? 'Room ID' : 'ID'}: {preview.id}</p>
        {preview.kind === 'user' && preview.followers !== undefined && (
          <p className="mt-4 text-lg text-[#999]">{preview.followers} Followers <span className="px-4 text-gray-300">|</span> {preview.visitors ?? 0} Visitors</p>
        )}
      </section>
      <section className="w-full flex-1 bg-gradient-to-b from-[#fff1d7] via-[#fff7ef] to-white px-6 py-12 text-center">
        <p className="text-xl font-semibold text-[#7d43bf]">Make new friends on Yaro</p>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500">
          {preview.kind === 'room' ? 'Join this room for live voice chat and meet new friends.' : 'Come and find me. Connect, chat and enjoy time with friends on Yaro.'}
        </p>
        <a href={appLink} onClick={event => {
          if (/android/i.test(navigator.userAgent)) { event.preventDefault(); window.location.href = intent; }
        }}
          className="mx-auto mt-7 block w-full max-w-xs rounded-full bg-[#8b46db] px-6 py-4 font-semibold text-white shadow-md">
          {preview.kind === 'room' ? 'Join room in Yaro' : 'Open profile in Yaro'}
        </a>
        <a href={store} className="mt-5 inline-block text-sm font-medium text-[#8b46db] underline">Download Yaro</a>
      </section>
    </div>
  );
}
