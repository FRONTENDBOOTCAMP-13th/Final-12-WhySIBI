import MainBannerSlider from '@/components/Main_component/main_banner_slider';
import MainBestProductSection from '@/components/Main_component/main_best_product_section';
import MainBottomSlider from '@/components/Main_component/main_bottom_slider';
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
