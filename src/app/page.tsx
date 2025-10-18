import MainBannerSlider from '@/components/Main_component/main_banner_slider';
import MainBestProductSection from '@/components/Main_component/main_best_product_section';
import MainBottomSlider from '@/components/Main_component/main_bottom_slider';
import MainCategorySection from '@/components/Main_component/main_category_section';
import MainRecommendProductSection from '@/components/Main_component/main_recommend_section';
import MainShowRoom from '@/components/Main_component/main_showroom';
import MainTalk from '@/components/Main_component/main_talk';

export default function Home() {
  return (
    <>
      <div className="max-w-[1280px] mx-auto my-0 ">
        <MainBannerSlider />
        <div className="bg-white pt-5 px-5 sm:pt-10 md:pt-15 xl:pt-25 sm:px-15 md:px-20 xl:px-25 [box-shadow:0px_20px_20px_-20px_rgba(0,0,0,0.1)]">
          <MainCategorySection />
        </div>
        <div className="bg-white p-5 sm:p-15 md:p-20 xl:p-25">
          <MainBestProductSection />
          <MainRecommendProductSection />
          <div className="community-wrapper flex lg:flex-row flex-col gap-15 my-20 justify-center items-center">
            <MainShowRoom></MainShowRoom>
            <MainTalk></MainTalk>
          </div>
        </div>
      </div>
      <MainBottomSlider />
    </>
  );
}
