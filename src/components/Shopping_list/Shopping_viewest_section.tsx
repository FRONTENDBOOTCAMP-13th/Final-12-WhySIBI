'use client';

import ShoppingViewestSlider from '@/components/Shopping_list/Shopping_viewest_slider';
import Title from '@/components/Title';

const today = new Date();
today.setDate(today.getDate() - 1);

const yesterday = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

function ShoppingViewest() {
  return (
    <div className="pb-10">
      <Title title="어제 가장 많이 본 5가지" subTitle={`${yesterday} 기준`} />
      <ShoppingViewestSlider />
      <hr className="h-0.25 border-0 bg-gray-300 mt-10" />
    </div>
  );
}

export default ShoppingViewest;
