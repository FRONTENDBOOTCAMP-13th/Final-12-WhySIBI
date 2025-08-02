import ShoppingBestSection from '@/components/Shopping_best/Shopping_best_section';
import { cookies } from 'next/headers';

export default async function ShoppingBest() {
  const token = (await cookies()).get('accessToken');
  return (
    <>
      <main className="bg-white p-20">
        <ShoppingBestSection token={token?.value} />
      </main>
    </>
  );
}
