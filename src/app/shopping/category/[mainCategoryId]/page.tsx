import ShoppingBannerSlider from '@/components/Shopping_list/Shopping_banner_slider';
import ShoppingProductsList from '@/components/Shopping_list/Shopping_products_list';
import ShoppingSubcategory from '@/components/Shopping_list/Shopping_Subcategory';
import ShoppingSelling from '@/components/Shopping_list/Shopping_selling_section';

export default function ShoppingCategory() {
  return (
    <>
      <ShoppingBannerSlider />
      <main className="bg-white p-20">
        <ShoppingSubcategory />
        <ShoppingSelling />
        <ShoppingProductsList />
      </main>
    </>
  );
}
