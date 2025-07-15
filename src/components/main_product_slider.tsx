'use client';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProductCard from '@/components/product_card';

const slideData = [
  {
    id: 1,
    name: '써머쿨링 냉감 여름이불',
    imageUrl: '/image/airconCleankit.png',
    price: '124,000원',
    discount: '10%',
    rank: 1,
    rating: 4.8,
    reviewCount: 123,
    isLiked: false,
  },
  {
    id: 2,
    name: '써머쿨링 냉감 여름이불',
    imageUrl: '/image/airconCleankit.png',
    price: '124,000원',
    discount: '10%',
    rank: 1,
    rating: 4.8,
    reviewCount: 123,
    isLiked: false,
  },
  {
    id: 3,
    name: '써머쿨링 냉감 여름이불',
    imageUrl: '/image/airconCleankit.png',
    price: '124,000원',
    discount: '10%',
    rank: 1,
    rating: 4.8,
    reviewCount: 123,
    isLiked: false,
  },
  {
    id: 4,
    name: '써머쿨링 냉감 여름이불',
    imageUrl: '/image/airconCleankit.png',
    price: '124,000원',
    discount: '10%',
    rank: 1,
    rating: 4.8,
    reviewCount: 123,
    isLiked: false,
  },
  {
    id: 5,
    name: '써머쿨링 냉감 여름이불',
    imageUrl: '/image/airconCleankit.png',
    price: '124,000원',
    discount: '10%',
    rank: 1,
    rating: 4.8,
    reviewCount: 123,
    isLiked: false,
  },
];

function MainProductSlider() {
  SwiperCore.use([Navigation, Scrollbar]);

  return (
    <>
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
              <ProductCard
                name="써머쿨링 냉감 여름이불"
                imageUrl="/image/airconCleankit.png"
                price="124,000원"
                discount="10%"
                rank={1}
                rating={4.8}
                reviewCount={123}
                isLiked={false}
                onClick={() => {}}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
export default MainProductSlider;
