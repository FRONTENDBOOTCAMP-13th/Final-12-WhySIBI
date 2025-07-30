//메인 배너 슬라이드

'use client';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import BannerCard from '@/components/banner_card';

const slideData = [
  {
    id: 1,
    title: '영화 촬영지로도 쓰인\n감각적인 원룸 ✨',
    imageUrl: '/image/main_banner_image_1.png',
    contentUrl: '/',
  },
  {
    id: 2,
    title: '컬러와 패턴으로 완성한 1.5룸 🌿',
    imageUrl: '/image/main_banner_image_2.png',
    contentUrl: '/',
  },
  {
    id: 3,
    title: '침실은 무채색? 거실은 앤틱!\n취향따라 바뀌는 인테리어',
    imageUrl: '/image/main_banner_image_3.png',
    contentUrl: '/',
  },
  {
    id: 4,
    title: '채광 좋은 창가에 책상 꾸미는 방법',
    imageUrl: '/image/main_banner_image_4.png',
    contentUrl: '/',
  },
  {
    id: 5,
    title: '2층 침대 아래, 나만의 작은 아지트',
    imageUrl: '/image/main_banner_image_5.png',
    contentUrl: '/',
  },
  {
    id: 6,
    title: '시원한 블루 컬러로 가득한 🌊\n공간디자이너의 방',
    imageUrl: '/image/main_banner_image_6.png',
    contentUrl: '/',
  },
];

function MainBannerSlider() {
  SwiperCore.use([Navigation, Scrollbar, Pagination]);

  return (
    <>
      <div className="banner-swiper">
        <Swiper
          loop={false} // 슬라이드 루프
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
        <div className="w-full overflow-hidden h-6 bg-vanilla-300"></div>
      </div>
    </>
  );
}
export default MainBannerSlider;
