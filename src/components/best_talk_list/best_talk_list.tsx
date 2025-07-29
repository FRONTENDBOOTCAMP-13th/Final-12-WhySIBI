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
import { useState } from 'react';
export interface TalkListProps {
  item: Post[];
  boardType: string;
}

export default function BestTalkList({ item, boardType }: TalkListProps) {
  const [sortValue, setSortValue] = useState<string>('most'); // 스와이프 순서 변경

  const sortedData = [...item].sort((a, b) => {
    const viewsA = a.views || 0; // 조회수는 숫자로 처리
    const viewsB = b.views || 0;

    return sortValue === 'most'
      ? viewsB - viewsA // 높은 조회수 순 (내림차순)
      : viewsA - viewsB;
  });

  const handleSortChange = (value: string) => {
    setSortValue(value);
  };

  console.log(sortedData);
  return (
    <Swiper
      loop={true}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 80,
        },
      }}
      navigation={true}
      className="bookmark-swiper-container"
    >
      {sortedData.map((post: Post, index: number) => (
        <SwiperSlide key={post._id} className="relative">
          <BestTalkCard post={post} index={index} boardType={boardType} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
