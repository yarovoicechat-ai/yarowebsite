import ShareLanding from '@/components/ShareLanding';
import { loadSharePreview, shareMetadata } from '@/lib/sharePreview';

type Props = { params: Promise<{ roomId: string }> };
export async function generateMetadata({ params }: Props) {
  const { roomId } = await params;
  return shareMetadata(await loadSharePreview('room', roomId));
}
export default async function SharePage({ params }: Props) {
  const { roomId } = await params;
  return <ShareLanding preview={await loadSharePreview('room', roomId)} />;
}
