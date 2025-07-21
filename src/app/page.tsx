import MainBannerSlider from '@/components/main_banner_slider';

import MainBestProductSection from '@/components/main_best_product_section';
import ShoppingBannerSlider from '@/components/Shopping_banner_slider';
import MainBottomSlider from '@/components/main_bottom_slider';
import Header from '@/components/_common/Header';
import Footer from '@/components/_common/Footer';
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainBannerSlider />
        <MainBestProductSection />

        <ShoppingBannerSlider />
        <MainBottomSlider />
      </main>
      <Footer />
    </>
  );
}
