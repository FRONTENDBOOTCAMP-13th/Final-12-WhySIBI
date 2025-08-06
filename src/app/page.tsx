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
      <div className="max-w-[1280px]  mx-auto my-0 ">
        <MainBannerSlider />
        <div className="bg-white p-20">
          <MainCategorySection />
          <MainBestProductSection />
          <MainRecommendProductSection />
          <div className="community-wrapper flex lg:flex-row flex-col gap-15 mt-10 justify-center items-center">
            <MainShowRoom></MainShowRoom>
            <MainTalk></MainTalk>
          </div>
        </div>
      </div>
      <MainBottomSlider />
    </>
  );
}
