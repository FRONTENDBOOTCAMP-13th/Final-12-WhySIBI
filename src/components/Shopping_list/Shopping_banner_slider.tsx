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
