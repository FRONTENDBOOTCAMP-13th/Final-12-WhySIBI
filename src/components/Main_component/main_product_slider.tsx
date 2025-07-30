//메인 제품 세션 슬라이드

'use client';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '@/components/product_component/product_card';
import { useEffect, useState } from 'react';
import { getProductList } from '@/data/actions/products.fetch';
import { ProductListProps } from '@/types';
import SkeletonUI from '@/components/product_component/skeleton_ui';
import Link from 'next/link';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function MainProductSlider() {
  SwiperCore.use([Navigation, Scrollbar]);

  const [slideData, setSlideData] = useState<ProductListProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sliceProducts = async () => {
      try {
        const res = await getProductList({
          sort: 'best-selling',
          limit: 10,
        });
        if (res.ok === 1) {
          setSlideData(res.item);
        } else {
          console.error(res.message);
        }
      } catch (err) {
        console.error('상품을 불러오지 못했습니다.', err);
      } finally {
        setLoading(false);
      }
    };

    sliceProducts();
  }, []);

  return (
    <>
      <div className="product-swiper">
        {/* 상품 로딩중일때 스켈레톤 UI 불러옴 */}
        {loading ? (
          <div
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
       items-center"
          >
            <SkeletonUI count={4} />
          </div>
        ) : (
          <Swiper
            loop={false} // 슬라이드 루프
            spaceBetween={50} // 슬라이스 사이 간격
            slidesPerView={4} // 보여질 슬라이스 수
            navigation={true} // prev, next button
            breakpoints={{
              //반응형
              0: { slidesPerView: 2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {slideData.map((product, index) => {
              const discount = product?.extra?.originalPrice
                ? `${Math.round(100 - (product.price * 100) / product.extra.originalPrice)}%`
                : ''; //할인율

              return (
                <SwiperSlide key={product._id}>
                  <ProductCard
                    id={product._id}
                    name={product.name}
                    imageUrl={`${API_URL}/${product.mainImages[0]?.path}`}
                    price={`${product.price.toLocaleString()}원`}
                    discount={discount}
                    rank={index + 1}
                    rating={product.extra?.star ? product.extra?.star : 0}
                    reviewCount={product.replies}
                    isLiked={product.extra?.isLike ? true : false}
                    onClick={() => {}}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
        <Link
          href={'/shopping/best'}
          className="btn-gradient-animate block w-full py-3 text-center font-variable font-semibold  text-livealone-cal-poly-green bg-livealone-columbia-blue rounded-md cursor-pointer hover:text-cal-poly-green-100"
        >
          BEST 상품 더보기
        </Link>
        <hr className="h-0.25 border-0 bg-gray-300 my-10" />
      </div>
    </>
  );
}
export default MainProductSlider;
