import ShoppingRecommendSection from '@/components/Shopping_recommend/shopping_recommend_section';
import { cookies } from 'next/headers';

export default async function ShoppingRecommend() {
  const token = (await cookies()).get('accessToken');
  return (
    <>
      <div className="max-w-[1280px]  mx-auto my-0 ">
        <main className="bg-white p-20">
          <ShoppingRecommendSection token={token?.value} />
        </main>
      </div>
    </>
  );
}
