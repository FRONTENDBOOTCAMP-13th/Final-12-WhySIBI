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
  const [activeIndex, setActiveIndex] = useState(0);

  // 확대창(모달)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

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

      swiperInstance.on('slideChange', () => {
        setActiveIndex(swiperInstance.realIndex);
      });
    }
  }, [swiperInstance]);

    useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`; 
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    };
  }, [isModalOpen]);

    const closeModal = () => setIsModalOpen(false);

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
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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
                onClick={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  const isActive = el.classList.contains('swiper-slide-active');
                  const isAnimating = swiperInstance?.animating;

                  if (isActive && !isAnimating) {
                    // 중앙 슬라이드일 때만 모달 오픈
                    setModalImage(src);
                    setIsModalOpen(true);
                  }
                  // 옆 슬라이드는 아무 것도 안 함 → Swiper가 slideToClickedSlide로 이동 처리
                }}
              >
                <Image
                  src={src}
                  alt={`본문 이미지 ${idx}`}
                  fill
                  sizes="350px"
                  className="w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-black transition-all duration-300 opacity-60 group-[.swiper-slide-active]:opacity-0" />
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

      {/* 확대창 */}
      {isModalOpen && modalImage && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
            <div className="flex flex-col items-center justify-center gap-3 mb-8 sm:gap-6 sm:mb-10 lg:mb-15 xl:mb-5">
              <button
                onClick={closeModal}
                className=" text-white bg-black/40 rounded-full w-8 h-8 sm:w-10 sm:h-10 sm:text-lg lg:w-10 lg:h-10 lg:text-xl xl:w-8 xl:h-8 xl:text-size-md flex items-center justify-center hover:bg-black/70 transition"
              >
                ✕
              </button>
              <div className="relative flex w-full sm:w-[90vw] md:w-[70vw] lg:w-[55vw] xl:w-[40vw] items-center justify-center">
                <Image
                  src={modalImage}
                  alt="확대된 이미지"
                  width={900}
                  height={700}
                  className="object-contain h-auto max-h-[70vh]"
                />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
