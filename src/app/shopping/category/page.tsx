import Pagenation from '@/components/Pagenation';
import ShoppingBannerSlider from '@/components/Shopping_banner_slider';
import ShoppingSubcategory from '@/components/Shopping_Subcategory';

export default function ShoppingCategory() {
  return (
    <>
      <main>
        <ShoppingBannerSlider />
        <ShoppingSubcategory />
        <Pagenation />
      </main>
    </>
  );
}
