'use client';
import Image from 'next/image';

const similarItems = [
  '/image/room_photo/europeShowroom.png',
  '/image/room_photo/greenShowroom.png',
  '/image/room_photo/jejuShowroom.png',
  '/image/room_photo/whiteShowroom.png',
];

export default function DetailSimilar(){
  return(
    <div className="w-[600px] my-20 text-center">
      <h2 className="font-bold text-xl">비슷한 상품을 찾아줄게요</h2>
      <div className="flex items-center mt-7 justify-center gap-5">
        {similarItems.map((src, idx) => (
          <div key={idx} className="flex items-center">
            <div className="w-[120px] h-[120px] relative overflow-hidden rounded-4xl bg-livealone-columbia-blue">
              <Image src={src} alt={`상품 ${idx + 1}`} fill sizes="120px" className="w-full object-cover cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}