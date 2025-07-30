import MainRecommendBox from '@/components/Main_component/main_recommend_box';
import RecommendTitle from '@/components/Shopping_recommend/recommend_title';
import Link from 'next/link';

function MainRecommendProductSection() {
  return (
    <>
      <RecommendTitle
        title="FOR YOU"
        subTitle="님의 취향저격 상품을 찾았어요 🥳"
      />
      <MainRecommendBox />
      <Link
        href={'/shopping/recommend'}
        className="btn-gradient-animate block w-full py-3 mt-3 text-center font-variable font-semibold  text-livealone-cal-poly-green bg-livealone-columbia-blue rounded-md cursor-pointer hover:text-cal-poly-green-100"
      >
        추천 상품 더보기
      </Link>
      <hr className="h-0.25 border-0 bg-gray-300 my-10" />
    </>
  );
}
export default MainRecommendProductSection;
