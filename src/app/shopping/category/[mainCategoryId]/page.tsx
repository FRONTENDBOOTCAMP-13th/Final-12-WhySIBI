import ShoppingBannerSlider from '@/components/Shopping_list/Shopping_banner_slider';
import ShoppingProductsList from '@/components/Shopping_list/Shopping_products_list';
import ShoppingSubcategory from '@/components/Shopping_list/Shopping_Subcategory';
import ShoppingSelling from '@/components/Shopping_list/Shopping_selling_section';
import { cookies } from 'next/headers';

export default async function ShoppingCategory() {
  const token = (await cookies()).get('accessToken');
  return (
    <>
      <ShoppingBannerSlider />
      <main
        className="bg-white p-20"
        style={{
          minWidth: '1280px',
          //브라우저의 너비를 기준으로 1280을나눠서 더 작을쪽을 선택해 하위요소들의 크기를 모두 줄임(단 시각적으로만 )
          transform: 'scale(min(1, 100vw / 1280px))',
        }}
      >
        <ShoppingSubcategory />
        <ShoppingSelling token={token?.value} />
        <ShoppingProductsList token={token?.value} />
      </main>
    </>
  );
}
