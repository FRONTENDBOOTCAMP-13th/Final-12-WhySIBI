import ProductCard from '@/components/product_component/product_card';
import Link from 'next/link';

function RecommendBox() {
  return (
    <>
      <div className="bg-gradient-to-b from-vanilla-300 to-columbia-blue-300 mb-10 rounded-2xl">
        <div className="flex justify-between p-5">
          <p className="text-lg font-bold text-livealone-cal-poly-green">
            홈카페 인기 상품 추천 ✨
          </p>
          <Link href="">
            <span className="text-gray-400">{`더보기 >`}</span>
          </Link>
        </div>
        <ProductCard />
      </div>
      <div className="bg-gradient-to-b from-vanilla-300 to-columbia-blue-300 mb-10 rounded-2xl">
        <div className="flex justify-between p-5">
          <p className="text-lg font-bold text-livealone-cal-poly-green">
            청소광 인기 상품 추천 ✨
          </p>
          <Link href="">
            <span className="text-gray-400">{`더보기 >`}</span>
          </Link>
        </div>
        <ProductCard />
      </div>
    </>
  );
}
export default RecommendBox;
