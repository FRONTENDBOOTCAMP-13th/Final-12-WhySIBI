//swiper 라이브러리 테스트

'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slideData = [
  {
    id: 1,
    text: '테스트 테스트',
  },
  {
    id: 2,
    text: '테스트 테스트',
  },
  {
    id: 3,
    text: '테스트 테스트',
  },
  {
    id: 4,
    text: '테스트 테스트',
  },
  {
    id: 5,
    text: '테스트 테스트',
  },
];

export default function SwiperSlider() {
  SwiperCore.use([Navigation, Scrollbar]);
  return (
    <div className="swiper-container">
      <Swiper
        loop={false} // 슬라이드 루프
        spaceBetween={50} // 슬라이스 사이 간격
        slidesPerView={4} // 보여질 슬라이스 수
        navigation={true} // prev, next button
        breakpoints={{
          //반응형
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {slideData.map(slide => (
          <SwiperSlide key={slide.id}>
            <div>
              <div>{slide.text}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
