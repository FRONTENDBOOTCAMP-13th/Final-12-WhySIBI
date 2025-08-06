'use client';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Post } from '@/types';
import BestTalkCard from '@/components/best_talk_list/best_talk_card/best_talk_card';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
export interface TalkListProps {
  item: Post[];
  boardType: string;
}

export default function BestTalkList({ item, boardType }: TalkListProps) {
  const sortedData = [...item].sort((a, b) => {
    const viewsA = a.views || 0;
    const viewsB = b.views || 0;
    return viewsB - viewsA; // 항상 높은 조회수 순
  });

  const BestList = sortedData.slice(0, 5);

  return (
    <Swiper
      loop={false}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      autoplay={{ delay: 5000 }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 82,
        },
      }}
      navigation={true}
      className="bookmark-swiper-container text-left"
    >
      {BestList.map((post: Post, index: number) => (
        <SwiperSlide key={post._id} className="relative text-left">
          <BestTalkCard post={post} index={index} boardType={boardType} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
