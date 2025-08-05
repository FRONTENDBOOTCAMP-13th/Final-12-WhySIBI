'use client';

import { Scrollbar } from 'swiper/modules';
import { upLoadFile } from '@/data/actions/file';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SearchingUI from '../product_search/searching_ui';
import 'swiper/css';
import Image from 'next/image';

interface ImageUploaderProps {
  image: string[];
  setImage: (image: string[]) => void;
}

export default function ImageUploader({ image, setImage }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setIsUploading(true);

    const uploadedUrls: string[] = [];
    const previewUrls: string[] = [];

    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append('attach', file);

      previewUrls.push(URL.createObjectURL(file)); // 로컬 미리보기

      try {
        const res = await upLoadFile(formData);
          console.log('업로드 응답:', res);
        if (res.ok && res.item.length > 0) {
          uploadedUrls.push(res.item[0].path); // Cloudinary URL 직접 사용
          console.log('업로드 응답:', res);
        } else {
          alert(`이미지 업로드 실패`);
        }
      } catch (err) {
        console.error('이미지 업로드 오류:', err);
        alert('이미지를 업로드하는 중 문제가 발생했습니다.');
      }
    }

    setPreview([...preview, ...previewUrls]);
    setImage([...image, ...uploadedUrls]);
    setIsUploading(false);
  };

  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  const handleDeleteImage = (indexToDelete: number) => {
    const newImage = image.filter((_, i) => i !== indexToDelete);
    const newPreview = preview.filter((_, i) => i !== indexToDelete);
    setImage(newImage);
    setPreview(newPreview);
  };


  return (
    <div className="w-[600px] mt-6">
      <p className="mb-4 ml-12 text-lg font-bold font-variable">방을 자랑할 사진을 넣어주세요.</p>
      <div className="flex pb-10 border-b">
        <div className="button-wrapper pr-3">
            <button
              className="!w-[140px] !h-[140px] rounded-4xl bg-gradient-to-b from-vanilla-200 to-columbia-blue-200 cursor-pointer group"
              onClick={handleClickUpload}
              type="button"
              >
              {isUploading ? (
                <div className="w-full h-full flex items-center justify-center rounded-4xl bg-white/50">
                  <div className="scale-90 mt-5 font-variable">
                    <SearchingUI text="업로드 중.." />
                  </div>
                </div>
              ) : (
              <div className="flex items-center justify-center w-full h-full">
                <Image
                  src="/image/community_icon/plusIcon.svg"
                  alt="이미지 업로드"
                  width={50}
                  height={50}
                  className="object-contain priority hover-lift group-hover:drop-shadow-lg"
                />
              </div>
            )}
              <input
                type="file"
                accept="image/*"
                multiple
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
            </button>
        </div>
        <Swiper slidesPerView="auto" spaceBetween={12} modules={[Scrollbar]} scrollbar={{ draggable: true }} className="w-[450px] overflow-hidden pt-3 pb-10">
          {image.map((src, i) => (
            <SwiperSlide
              key={i}
              className="!w-[140px] !h-[140px] relative flex items-center justify-center rounded-4xl cursor-pointer border-2 border-gray-400 overflow-hidden group"
            >
              <Image
                src={src.startsWith('http') ? src : `/${src}`}
                alt={`업로드 이미지 ${i}`}
                width={140}
                height={140}
                className="object-cover w-full h-full"
              />
              {/* 첫번째 슬라이드 -> 커버이미지 표시 */}
              {i === 0 && (
                <>
                  <div className="absolute top-0 w-full h-full bg-livealone-cal-poly-green/50 z-10"></div>
                  <Image
                    src="/image/community_icon/coverIcon.svg"
                    alt="게시글 커버"
                    width={60}
                    height={60}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                  />
                </>
              )}
              <Image
                src="/image/community_icon/closeIcon.svg"
                alt={`삭제 버튼`}
                width={22}
                height={22}
                onClick={() => handleDeleteImage(i)}
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
