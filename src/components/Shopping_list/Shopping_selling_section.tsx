'use client';

import TimeStamp from '@/components/basic_component/Time_stamp';
import ShoppingSellingSlider from '@/components/Shopping_list/Shopping_selling_slider';
import useMenuStore from '@/zustand/menuStore';

function ShoppingSelling({ token }: { token?: string | undefined }) {
  const { mainCategoryId, subMenuData } = useMenuStore();

  const categorys = subMenuData.shopping.items['카테고리'].items ?? {};
  const categoryName =
    categorys[mainCategoryId]?.label || '선택된 카테고리 없음';

  return (
    <div className="pb-10">
      <div className="flex justify-between mb-10">
        <h1 className="font-logo text-size-4xl font-bold leading-10">
          <span className="text-livealone-flame">{categoryName}</span>{' '}
          <span className="text-livealone-cal-poly-green">
            가장 많이 팔린 5가지
          </span>
        </h1>
        <h2 className="font-variable text-size-md text-gray-500">
          현재시각 <TimeStamp /> 기준
        </h2>
      </div>
      <ShoppingSellingSlider token={token} />
      <hr className="h-0.25 border-0 bg-gray-300 mt-10" />
    </div>
  );
}

export default ShoppingSelling;
