import ShoppingBannerSlider from '@/components/Shopping_banner_slider';
import ShoppingProductsList from '@/components/Shopping_products_list';
import ShoppingSubcategory from '@/components/Shopping_Subcategory';
import ShoppingViewest from '@/components/Shopping_viewest_section';

export default function ShoppingCategory() {
  return (
    <>
      <main>
        <ShoppingBannerSlider />
        <ShoppingSubcategory />
        <ShoppingViewest />
        <ShoppingProductsList />
      </main>
    </>
  );
}
