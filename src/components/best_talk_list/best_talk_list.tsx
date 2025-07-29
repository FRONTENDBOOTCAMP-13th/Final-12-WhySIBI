'use client';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Post } from '@/types';
import BestTalkCard from '@/components/best_talk_list/best_talk_card/best_talk_card';

export default function BestTalkList({ item, boardType }) {
  return (
    <Swiper
      loop={true}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
          centeredSlides: true,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 60,
          centeredSlides: true,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 80,
          centeredSlides: true,
        },
      }}
      navigation={true}
      className="bookmark-swiper-container"
    >
      {item.map((post: Post, index: number) => (
        <SwiperSlide key={post._id} className="relative">
          <BestTalkCard post={post} index={index} boardType={boardType} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
