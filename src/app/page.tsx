import MainBannerSlider from '@/components/main_banner_slider';
import MainProductSlider from '@/components/main_product_slider';
export default function Home() {
  return (
    <>
      <main>
        <h1>배너</h1>
        <MainBannerSlider />
        <h1>나혼산 BEST 상품</h1>
        <MainProductSlider />
      </main>
    </>
  );
}
