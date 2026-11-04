import type { Metadata } from 'next';

export type SharePreview = { kind: 'room' | 'user'; id: string; name: string; image: string;
  followers?: number; visitors?: number; isActive?: boolean };

export async function loadSharePreview(kind: SharePreview['kind'], id: string): Promise<SharePreview> {
  const fallback = { kind, id, name: kind === 'room' ? 'Yaro Voice Room' : 'Yaro Friend', image: '/default-avatar.webp' };
  if (!/^[a-zA-Z0-9_-]{1,80}$/.test(id)) return fallback;
  try {
    const response = await fetch(`https://api.yaroapp.in/api/share/${kind}/${encodeURIComponent(id)}`,
      { next: { revalidate: 60 }, signal: AbortSignal.timeout(4000) });
    if (!response.ok) return fallback;
    const result = await response.json();
    if (!result.success || !result.data) return fallback;
    const preview = result.data as SharePreview;
    const image = /^https?:\/\//i.test(preview.image || '') ? preview.image
      : preview.image?.startsWith('/uploads/') ? `https://api.yaroapp.in${preview.image}` : fallback.image;
    return { ...fallback, ...preview, image };
  } catch { return fallback; }
}

export function shareMetadata(preview: SharePreview): Metadata {
  const title = preview.kind === 'room' ? `${preview.name} — Join me on Yaro` : `${preview.name} on Yaro`;
  const description = preview.kind === 'room' ? `Room ID: ${preview.id}. Click the link to join me in Yaro!`
    : `ID: ${preview.id}. Make new friends on Yaro — come and find me!`;
  const url = `https://yaroapp.in/${preview.kind === 'room' ? 'room' : 'user'}/${encodeURIComponent(preview.id)}`;
  return { metadataBase: new URL('https://yaroapp.in'), title: { absolute: title }, description,
    alternates: { canonical: url }, robots: { index: false, follow: true },
    openGraph: { type: 'website', siteName: 'Yaro', title, description, url, images: [{ url: preview.image, alt: preview.name }] },
    twitter: { card: 'summary', title, description, images: [preview.image] } };
}
