//메인 배너 슬라이드

'use client';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import BannerCard from '@/components/banner_card';

const slideData = [
  {
    id: 1,
    title: '영화 촬영지로도 쓰인\n감각적인 원룸 ✨',
    imageUrl: '/image/shopping_banner_image_1.png',
    contentUrl: '/',
  },
  {
    id: 2,
    title: '컬러와 패턴으로 완성한 1.5룸 🌿',
    imageUrl: '/image/shopping_banner_image_2.png',
    contentUrl: '/',
  },
  {
    id: 3,
    title: '침실은 무채색? 거실은 앤틱!\n취향따라 바뀌는 인테리어',
    imageUrl: '/image/shopping_banner_image_3.png',
    contentUrl: '/',
  },
];

function ShoppingBannerSlider() {
  SwiperCore.use([Navigation, Scrollbar, Pagination, Autoplay]);

  return (
    <>
      <div className="banner-swiper">
        <Swiper
          loop={true} // 슬라이드 루프
          autoplay={{ delay: 5000 }} //자동 재생
          slidesPerView={1} // 보여질 슬라이스 수
          navigation={true} // prev, next button
          pagination={{
            // 페이지네이션 활성화
            clickable: true, // 페이지네이션 버튼 클릭 가능하게 할지 말지
          }}
        >
          {slideData.map(slide => (
            <SwiperSlide key={slide.id} className="relative">
              <BannerCard
                title={slide.title}
                imageUrl={slide.imageUrl}
                contentUrl={slide.contentUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
export default ShoppingBannerSlider;
