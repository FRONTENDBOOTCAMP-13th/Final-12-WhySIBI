'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';

interface RoomSwiperProps {
  images: string[];
}

export default function DetailSwiper({ images }: RoomSwiperProps) {
  const isLoopMode = images.length >= 4;
  const isSingle = images.length === 1;

  return (
    <div className="min-w-[15.625rem] max-w-[18.75rem] md:max-w-[600px] md:min-w-2xl flex justify-center mt-5">
      {images.length === 0 ? (
        <div className="w-[350px] h-[450px] relative overflow-hidden">
          <Image
            src={'/image/room_photo/postThumbnail.svg'}
            alt="이미지가 없습니다"
            fill
            sizes="350px"
            className="object-cover w-full mt-5"
          />
        </div>
      ) : (
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={isLoopMode}
          slideToClickedSlide={!isSingle}
          spaceBetween={25}
          className="overflow-visible"
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
              <div className="absolute inset-0 bg-black transition-all duration-300 opacity-60 group-[.swiper-slide-active]:opacity-0" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
