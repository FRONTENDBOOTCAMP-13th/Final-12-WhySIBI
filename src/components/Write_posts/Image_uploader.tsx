'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

export default function ImageUploader() {
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setImages((prev) => [...prev, ...newImages]);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-[600px] mt-6">
      <p className="mb-4 ml-12 text-lg font-bold font-variable">방을 자랑할 사진을 넣어주세요.</p>
      <div className="flex">
        <div className="pr-3">
          <button
              className="!w-[140px] !h-[140px] rounded-4xl bg-gradient-to-b from-vanilla-200 to-columbia-blue-200 cursor-pointer"
              onClick={openFileDialog}>
              <div className="flex items-center justify-center w-full h-full">
                <Image
                  src="/image/community_icon/plusIcon.svg"
                  alt="이미지 업로드"
                  width={50}
                  height={50}
                  className="object-contain"
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
              className="!w-[140px] !h-[140px] flex items-center justify-center rounded-4xl cursor-pointer border-2 border-gray-400 overflow-hidden"
            >
              <Image
                src={src}
                alt={`업로드 이미지 ${i}`}
                width={140}
                height={140}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
