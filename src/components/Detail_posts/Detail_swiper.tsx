'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper/types';
import 'swiper/css';
import Image from 'next/image';
import { Autoplay, Navigation } from 'swiper/modules';
import { useRef, useState, useEffect } from 'react';

interface RoomSwiperProps {
  images: string[];
}

export default function DetailSwiper({ images }: RoomSwiperProps) {
  const isLoopMode = images.length >= 4;
  const isSingle = images.length === 1;
  
  // Swiper navigation refs
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

  // Swiper에 navigation 연결
  useEffect(() => {
    if (
      swiperInstance &&
      typeof swiperInstance.params.navigation === 'object' &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);


  return (
    <div className="relative flex items-center justify-center mx-auto w-[80%] md:max-w-[600px] md:min-w-[500px] mt-5">
      {images.length === 0 ? (
        <div className="!w-[200px] !h-[300px] sm:!w-[400px] sm:!h-[600px] md:!w-[350px] md:!h-[500px] relative overflow-hidden">
          <Image
            src={'/image/room_photo/postThumbnail.svg'}
            alt="이미지가 없습니다"
            fill
            sizes="350px"
            className="object-cover object-center w-full mt-5"
          />
        </div>
      ) : (
        <>
          <button
            ref={prevRef}
            className="px-2 sm:px-3 lg:px-4 md:hidden cursor-pointer z-10 group -translate-x-5 sm:-translate-x-8 lg:-translate-x-10"
            aria-label="이전 이미지"
          >
            <Image
              src="/image/community_icon/backIcon.svg"
              alt="왼쪽 화살표"
              width={20}
              height={20}
              className="opacity-60 w-5 group-hover:opacity-90 transition"
            />
          </button>
          <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            loop={isLoopMode}
            slideToClickedSlide={!isSingle}
            modules={[Autoplay, Navigation]}
            onSwiper={setSwiperInstance}
            navigation={{
              prevEl: prevRef.current!,
              nextEl: nextRef.current!,
            }}
            breakpoints={{
              320: { spaceBetween: 30 },
              640: { spaceBetween: 50 },
              1024: { spaceBetween: 40 },
              1280: { spaceBetween: 60 },
            }}
            className="overflow-visible"
          >
            {images.map((src, idx) => (
              <SwiperSlide
                key={idx}
                className="group !w-[200px] !h-[300px] sm:!w-[400px] sm:!h-[600px] md:!w-[350px] md:!h-[500px] relative overflow-hidden cursor-pointer"
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
          <button
            ref={nextRef}
            className="px-2 sm:px-3 lg:px-4 md:hidden cursor-pointer z-10 group translate-x-5 sm:translate-x-8 lg:translate-x-10"
            aria-label="다음 이미지"
          >
            <Image
              src="/image/community_icon/backIcon.svg"
              alt="오른쪽 화살표"
              width={20}
              height={20}
              className="opacity-60 w-5 group-hover:opacity-90 transition scale-x-[-1]"
            />
          </button>
        </>
      )}
    </div>
  );
}
