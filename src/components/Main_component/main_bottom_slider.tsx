//메인 하단 슬라이드

'use client';
import { useRef } from 'react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function MainBottomSlider() {
  SwiperCore.use([Scrollbar, Autoplay]);

  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <>
      <div
        className="swiper-bottom font-logo text-[var(--color-livealone-cal-poly-green)] overflow-hidden
        font-bold bg-[var(--color-livealone-columbia-blue)]  h-30 text-4xl flex items-center
        "
        aria-label="livealone"
        onMouseEnter={() => swiperRef.current?.autoplay.stop()} //마우스 올렸을때 멈춤
        onMouseLeave={() => swiperRef.current?.autoplay.start()} //마우스 뗏을때 시작
      >
        <Swiper
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
          spaceBetween={0} //사이 간격
          loop={true} // 슬라이드 루프
          autoplay={{
            //자동재생(딜레이 없이)
            delay: 0,
            disableOnInteraction: false,
          }} //자동 재생
          slidesPerView={'auto'} // 보여질 슬라이스 수
          speed={4000}
          allowTouchMove={false}
          freeMode={false}
        >
          {Array(30) //30개 요소 반복해서 무한루프처럼 보이게
            .fill(0)
            .map((_, i) => {
              return (
                <SwiperSlide key={i} style={{ width: '300px' }}>
                  <span aria-hidden="true">livealone</span>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}
export default MainBottomSlider;
