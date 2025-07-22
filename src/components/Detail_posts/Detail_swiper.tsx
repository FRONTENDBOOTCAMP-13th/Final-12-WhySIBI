'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';

interface RoomSwiperProps {
  images: string[];
}

export default function DetailSwiper({ images }: RoomSwiperProps) {

  const isLoopMode = images.length >= 3;

  return (
    <Swiper
      slidesPerView={'auto'}
      centeredSlides={true}
      loop={isLoopMode}
      slideToClickedSlide={true}
      spaceBetween={25}
      className="w-[600px] overflow-visible"
      modules={[Autoplay]}
    >
      {images.map((src, idx) => (
        <SwiperSlide
          key={idx}
          className="group !w-[350px] !h-[450px] relative overflow-hidden cursor-pointer"
        >
          <Image
            src={src}
            alt={`본문 이미지 ${idx}`}
            fill
            sizes="350px"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black transition-all duration-300 opacity-60 group-[.swiper-slide-active]:opacity-0">
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
