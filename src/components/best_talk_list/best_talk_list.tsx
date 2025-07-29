'use client';
import PostCardItem from '@/app/community/[boardType]/PostCard_Item';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Post } from '@/types';
import BestTalkInfo from '@/components/best_talk_list/best_talk_card/best_talk_card';

export default function BestTalkList() {
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
      {/* {item.map((post: Post, index: number, i: number) => (
        <SwiperSlide key={i} className="relative">
          <BestTalkInfo key={post._id} post={post} index={index} />
        </SwiperSlide>
      ))} */}

      <SwiperSlide className="relative">
        {/* <BestTalkInfo key={post._id} post={post} index={index} /> */}
        <BestTalkInfo />
      </SwiperSlide>
      <SwiperSlide className="relative">
        {/* <BestTalkInfo key={post._id} post={post} index={index} /> */}
        <BestTalkInfo />
      </SwiperSlide>
      <SwiperSlide className="relative">
        {/* <BestTalkInfo key={post._id} post={post} index={index} /> */}
        <BestTalkInfo />
      </SwiperSlide>
      <SwiperSlide className="relative">
        {/* <BestTalkInfo key={post._id} post={post} index={index} /> */}
        <BestTalkInfo />
      </SwiperSlide>
    </Swiper>
  );
}
