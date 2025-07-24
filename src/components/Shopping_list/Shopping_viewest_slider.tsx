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
import { ProductListProps } from '@/types';
import { getProductList } from '@/data/actions/products.fetch';
// import useMenuStore from '@/zustand/menuStore';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function ShoppingViewestSlider() {
  // const { mainCategoryId } = useMenuStore(); //나중에 메인카테 ID 별 상품 불러와서 연동하기

  SwiperCore.use([Navigation, Scrollbar]);

  const [slideData, setSlideData] = useState<ProductListProps[]>([]);

  useEffect(() => {
    const sliceProducts = async () => {
      try {
        const res = await getProductList();
        if (res.ok === 1) {
          setSlideData(res.item.slice(0, 5)); //5개만 가져오기
        } else {
          console.error(res.message);
        }
      } catch (err) {
        console.error('상품을 불러오지 못했습니다.', err);
      }
    };

    sliceProducts();
  }, []);

  return (
    <>
      <div className="product-swiper">
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
                  reviewCount={100} //리뷰카운트 계산예정
                  isLiked={product.extra?.isLike ? true : false}
                  onClick={() => {}}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
export default ShoppingViewestSlider;
