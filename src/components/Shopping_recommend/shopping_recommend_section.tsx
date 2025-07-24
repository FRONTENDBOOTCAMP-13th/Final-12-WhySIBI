import RecommendBox from '@/components/Shopping_recommend/recommend_box';
import RecommendTitle from '@/components/Shopping_recommend/recommend_title';

function ShoppingRecommendSection() {
  return (
    <>
      <RecommendTitle
        title="FOR YOU"
        subTitle="님의 취향저격 상품을 찾았어요 🥳"
      />
      <RecommendBox />
    </>
  );
}
export default ShoppingRecommendSection;
