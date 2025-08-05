import ShoppingBannerSlider from '@/components/Shopping_list/Shopping_banner_slider';
import ShoppingProductsList from '@/components/Shopping_list/Shopping_products_list';
import ShoppingSubcategory from '@/components/Shopping_list/Shopping_Subcategory';
import ShoppingSelling from '@/components/Shopping_list/Shopping_selling_section';
import { cookies } from 'next/headers';

export default async function ShoppingCategory() {
  const token = (await cookies()).get('accessToken');
  return (
    <>
      <div className="max-w-[1280px]  mx-auto my-0 ">
        <ShoppingBannerSlider />
        <main className="bg-white p-20">
          <ShoppingSubcategory />
          <ShoppingSelling token={token?.value} />
          <ShoppingProductsList token={token?.value} />
        </main>
      </div>
    </>
  );
}
