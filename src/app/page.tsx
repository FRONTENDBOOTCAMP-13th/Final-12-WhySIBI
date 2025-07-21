import MainBannerSlider from '@/components/main_banner_slider';
import MainBestProductSection from '@/components/main_best_product_section';
import ShoppingBannerSlider from '@/components/Shopping_banner_slider';
import MainBottomSlider from '@/components/main_bottom_slider';
export default function Home() {
  return (
    <>
      <main>
        <MainBannerSlider />
        <MainBestProductSection />

        <ShoppingBannerSlider />
        <MainBottomSlider />
      </main>
    </>
  );
}
