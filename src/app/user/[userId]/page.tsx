import ShareLanding from '@/components/ShareLanding';
import { loadSharePreview, shareMetadata } from '@/lib/sharePreview';

type Props = { params: Promise<{ userId: string }> };
export async function generateMetadata({ params }: Props) {
  const { userId } = await params;
  return shareMetadata(await loadSharePreview('user', userId));
}
export default async function SharePage({ params }: Props) {
  const { userId } = await params;
  return <ShareLanding preview={await loadSharePreview('user', userId)} />;
}
