'use client';

import MainProductSlider from '@/components/Main_component/main_product_slider';
import TimeStamp from '@/components/basic_component/Time_stamp';
import Title from '@/components/Title';

function MainBestProductSection() {
  return (
    <>
      <Title
        title="나혼산 BEST 상품"
        subTitle={
          <>
            현재시각 <TimeStamp /> 기준 인기상품{' '}
            <span className="no-invert">🔥🔥🔥</span>
          </>
        }
      />
      <MainProductSlider />
    </>
  );
}
export default MainBestProductSection;
