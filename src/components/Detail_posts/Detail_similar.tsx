'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ProductListProps } from '@/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import useProductSearchStore from '@/zustand/productSearchStore';
import 'swiper/css';
import { useRouter } from 'next/navigation';

interface ProductProps {
  products?: ProductListProps[];
}

export default function DetailSimilar({ products }: ProductProps) {
  const router = useRouter();
  const { setMultiKeywordSearch } = useProductSearchStore();

  if (!products?.length) return null;

  const handleFindSimilar = () => {
    const keywords = products
      .map(p => p.keyword?.[0])
      .filter((k): k is string => !!k);

    setMultiKeywordSearch(keywords);
    setTimeout(() => {
      router.push('/search');
    }, 0);
  };

  return (
    <div className="min-w-[15.625rem] max-w-[18.75rem] md:max-w-[600px] md:min-w-2xl mt-15 text-center">
      <h2 className="font-bold w-full text-xl">같은 상품으로 집을 꾸며봐요</h2>
      <div className="mt-8">
        <Swiper
          slidesPerView="auto"
          spaceBetween={12}
          className="min-w-[15.625rem] max-w-[18.75rem] md:max-w-[600px] md:min-w-2xl overflow-hidden h-40 gap-4 mb-6 bg-gray-300 rounded-xl">
          {products.map(product => (
            <SwiperSlide
              key={product._id}
              className="group relative !w-40 !h-40 rounded-2xl border overflow-hidden text-white"
            >
              <Link href={`/products/${product._id}`}>
                <Image
                  src={product.mainImages[0].path}
                  alt={product.name}
                  fill
                  className="object-cover rounded-2xl"
                />
                <div className="w-full h-full absolute bottom-0 bg-gradient-to-b from-transparent via-transparent to-livealone-cal-poly-green"></div>
                <div className="w-full absolute bottom-2 px-2">
                  <div
                    className="text-size-sm font-light truncate w-full text-center"
                    title={product.name} >
                    {product.name}
                  </div>
                  <div className="text-xl font-black text-center whitespace-nowrap">
                    {product.price.toLocaleString()}
                    <span className="text-size-md font-bold ml-0.5">원</span>
                  </div>
                </div>
                <div className="w-full h-full absolute bottom-0 hover:bg-white/30 hover:duration-100"></div>
              </Link>
            </SwiperSlide>
          ))}
          <SwiperSlide className="relative !w-40 !h-40 rounded-2xl overflow-hidden">
            <button onClick={handleFindSimilar} className="w-full h-full group flex flex-col items-center justify-center gap-2 cursor-pointer text-sm hover:font-semibold">
              <Image src='/image/header_icon/search_icon.svg' width={50} height={50} alt="비슷한 상품 찾기 아이콘" className="w-20 hover-lift group-hover:drop-shadow-lg" />
              비슷한 상품 찾기
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
