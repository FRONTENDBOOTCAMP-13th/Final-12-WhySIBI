import ShoppingRecommendSection from '@/components/Shopping_recommend/shopping_recommend_section';
import { cookies } from 'next/headers';

export default async function ShoppingRecommend() {
  const token = (await cookies()).get('accessToken');
  return (
    <>
      <main className="bg-white p-20">
        <ShoppingRecommendSection token={token?.value} />
      </main>
    </>
  );
}
