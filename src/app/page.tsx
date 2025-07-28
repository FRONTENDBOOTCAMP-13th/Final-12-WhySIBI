import MainBannerSlider from '@/components/Main_component/main_banner_slider';
import MainBestProductSection from '@/components/Main_component/main_best_product_section';
import MainBottomSlider from '@/components/Main_component/main_bottom_slider';
import MainShowRoom from '@/components/Main_component/main_showroom';
import MainTalk from '@/components/Main_component/main_talk';

export default function Home() {
  return (
    <>
      <main>
        <MainBannerSlider />
        <MainBestProductSection />
        <div className="community-wrapper flex flex-row gap-15 mt-10 justify-center items-center">
          <MainShowRoom></MainShowRoom>
          <MainTalk></MainTalk>
        </div>
        <MainBottomSlider />
      </main>
    </>
  );
}
