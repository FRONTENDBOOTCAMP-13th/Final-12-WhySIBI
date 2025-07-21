import MainBannerSlider from '@/components/main_banner_slider';
import MainBestProductSection from '@/components/main_best_product_section';
import MainBottomSlider from '@/components/main_bottom_slider';
export default function Home() {
  return (
    <>
      <main>
        <MainBannerSlider />
        <MainBestProductSection />
        <MainBottomSlider />
      </main>
    </>
  );
}
