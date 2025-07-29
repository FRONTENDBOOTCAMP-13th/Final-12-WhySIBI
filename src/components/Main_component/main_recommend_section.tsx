import Title from '@/components/Title';
import Link from 'next/link';

function MainRecommendProductSection() {
  return (
    <>
      <Title title="FOR YOU" subTitle="좋아하실 만한 상품을 추천해드려요 🧐" />
      <Link
        href={'/shopping/recommend'}
        className="btn-gradient-animate block w-full py-3 text-center font-variable font-semibold  text-livealone-cal-poly-green bg-livealone-columbia-blue rounded-md cursor-pointer hover:text-cal-poly-green-100"
      >
        추천 상품 더보기
      </Link>
      <hr className="h-0.25 border-0 bg-gray-300 my-10" />
    </>
  );
}
export default MainRecommendProductSection;
