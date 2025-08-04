//메인 배너 슬라이드

'use client';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ShoppingBannerCard from '@/components/Shopping_list/Shopping_banner_card';

const slideData = [
  {
    id: 1,
    imageUrl: '/image/shopping_banner_image_1.png',
    contentUrl: '/shopping/best',
  },
  {
    id: 2,
    imageUrl: '/image/shopping_banner_image_2.png',
    contentUrl: '/shopping/category/PC0306',
  },
  {
    id: 3,
    imageUrl: '/image/shopping_banner_image_3.png',
    contentUrl: '/shopping/category/PC0301',
  },
];

function ShoppingBannerSlider() {
  SwiperCore.use([Navigation, Scrollbar, Pagination, Autoplay]);

  return (
    <>
      <div
        className="banner-swiper"
        style={{
          minWidth: '1280px',
          //브라우저의 너비를 기준으로 1280을나눠서 더 작을쪽을 선택해 하위요소들의 크기를 모두 줄임(단 시각적으로만 )
          transform: 'scale(min(1, 100vw / 1280px))',
        }}
      >
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
              <ShoppingBannerCard
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
