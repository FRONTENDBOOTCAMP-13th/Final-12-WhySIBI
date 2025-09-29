import MainBannerSlider from '@/components/Main_component/main_banner_slider';
import MainBestProductSection from '@/components/Main_component/main_best_product_section';
import MainBottomSlider from '@/components/Main_component/main_bottom_slider';
import MainCategorySection from '@/components/Main_component/main_category_section';
import MainRecommendProductSection from '@/components/Main_component/main_recommend_section';
import MainShowRoom from '@/components/Main_component/main_showroom';
import MainTalk from '@/components/Main_component/main_talk';
import ViewedInitPage from '@/components/recent_viewed/ViewedInit';

export default function Home() {
  return (
    <>
      <ViewedInitPage />
      <div className="max-w-[1280px]  mx-auto my-0 ">
        <MainBannerSlider />
        <div className="p-5 bg-white sm:p-20">
          <MainCategorySection />
          <MainBestProductSection />
          <MainRecommendProductSection />
          <div className="flex flex-col items-center justify-center my-20 community-wrapper lg:flex-row gap-15">
            <MainShowRoom></MainShowRoom>
            <MainTalk></MainTalk>
          </div>
        </div>
      </div>
      <MainBottomSlider />
    </>
  );
}
