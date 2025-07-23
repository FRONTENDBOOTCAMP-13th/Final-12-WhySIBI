'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

interface ImageUploaderProps {
  images: string[];
  setImages: (images: string[]) => void;
}

export default function ImageUploader({ images, setImages }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setImages([...images, ...newImages]);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const deleteImage = (indexToDelete: number) => {
    setImages(images.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="w-[600px] mt-6">
      <p className="mb-4 ml-12 text-lg font-bold font-variable">방을 자랑할 사진을 넣어주세요.</p>
      <div className="flex pb-10 border-b">
        <div className="button-wrapper pr-3">
          <button
            className="!w-[140px] !h-[140px] rounded-4xl bg-gradient-to-b from-vanilla-200 to-columbia-blue-200 cursor-pointer group"
            onClick={openFileDialog}>
            <div className="flex items-center justify-center w-full h-full">
              <Image
                src="/image/community_icon/plusIcon.svg"
                alt="이미지 업로드"
                width={50}
                height={50}
                className="object-contain priority hover-lift group-hover:drop-shadow-lg"
              />
            </div>
            <input
              type="file"
              accept="image/*"
              multiple
              ref={fileInputRef}
              className="hidden"
              onChange={handleImageUpload}
            />
          </button>
        </div>
        <Swiper slidesPerView="auto" spaceBetween={12} className="w-[450px] overflow-hidden py-3">
          {images.map((src, i) => (
            <SwiperSlide
              key={i}
              className="!w-[140px] !h-[140px] relative flex items-center justify-center rounded-4xl cursor-pointer border-2 border-gray-400 overflow-hidden group"
            >
              <Image
                src={src}
                alt={`업로드 이미지 ${i}`}
                width={140}
                height={140}
                className="object-cover w-full h-full"
              />
              <Image
                src="/image/community_icon/closeIcon.svg"
                alt={`삭제 버튼`}
                width={22}
                height={22}
                onClick={() => deleteImage(i)}
                className="absolute top-3 right-3 z-10 cursor-pointer 
               opacity-0 translate-y-1 transition-all duration-300 ease-out
               group-hover:opacity-100 group-hover:translate-y-0 active:opacity-50"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
