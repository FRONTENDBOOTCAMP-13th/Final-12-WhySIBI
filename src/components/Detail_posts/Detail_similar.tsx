'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface ProductProps {
  products?: Product[];
}

export default function DetailSimilar({ products }: ProductProps) {
  if (!products?.length) return null;

  return (
    <div className="w-[600px] mt-15 text-center">
      <h2 className="font-bold w-full text-xl">같은 상품으로 집을 꾸며봐요</h2>
      <div className="mt-8">
        <Swiper
          slidesPerView="auto"
          spaceBetween={12}
          className="w-[600px] overflow-hidden h-40 gap-4 mb-6 bg-gray-300 rounded-xl"
        >
          {products.map(product => (
            <SwiperSlide
              key={product._id}
              className="group relative !w-40 !h-40 rounded-2xl border overflow-hidden"
            >
              <Link href={`/products/${product._id}`}>
                <Image
                  src={
                    `${process.env.NEXT_PUBLIC_API_URL}/${product.mainImages[0].path}` ||
                    '/image/room_photo/postThumbnail.svg'
                  }
                  alt={product.name}
                  fill
                  className="object-cover rounded-2xl"
                />
                <div className="w-full h-full bg-gradient-to-b from-transparent via-transparent to-livealone-cal-poly-green/50"></div>
                <div className="w-full absolute bottom-2">
                  <span className="w-full bg-opacity-80 text-center text-size-sm font-light">
                    {product.name}
                  </span>
                  <span className="text-xl font-black" aria-label="할인가">
                    {product.price.toLocaleString()}
                    <span className="text-size-md font-bold ml-0.5">원</span>
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <SwiperSlide className="group relative !w-40 !h-40 rounded-2xl border overflow-hidden">
            <button>비슷한 상품 찾기</button>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
