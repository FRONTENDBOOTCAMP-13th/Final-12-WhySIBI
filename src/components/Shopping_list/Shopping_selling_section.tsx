'use client';

import ShoppingSellingSlider from '@/components/Shopping_list/Shopping_selling_slider';
import Title from '@/components/Title';

const today = new Date();
today.setDate(today.getDate() - 1);

const yesterday = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

function ShoppingSelling({ token }: { token?: string | undefined }) {
  return (
    <div className="pb-10">
      <Title title="어제 가장 많이 팔린 5가지" subTitle={`${yesterday} 기준`} />
      <ShoppingSellingSlider token={token}/>
      <hr className="h-0.25 border-0 bg-gray-300 mt-10" />
    </div>
  );
}

export default ShoppingSelling;
