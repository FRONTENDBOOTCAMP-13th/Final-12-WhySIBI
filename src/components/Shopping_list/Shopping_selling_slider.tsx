//메인 제품 세션 슬라이드

'use client';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '@/components/product_component/product_card';
import { useCallback, useEffect, useState } from 'react';
import { ProductListProps } from '@/types';
import { getProductList } from '@/data/actions/products.fetch';
import SkeletonUI from '@/components/product_component/skeleton_ui';
import useMenuStore from '@/zustand/menuStore';

function ShoppingSellingSlider({ token }: { token?: string | undefined }) {
  const { mainCategoryId } = useMenuStore();

  SwiperCore.use([Navigation, Scrollbar]);

  const [slideData, setSlideData] = useState<ProductListProps[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const sliceProducts = async () => {
  //     try {
  //       const res = await getProductList({}, token);
  //       if (res.ok === 1) {
  //         setSlideData(res.item.slice(0, 5)); //5개만 가져오기
  //       } else {
  //         console.error(res.message);
  //       }
  //     } catch (err) {
  //       console.error('상품을 불러오지 못했습니다.', err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   sliceProducts();
  // }, [token]);
  const sliceProducts = useCallback(async () => {
    try {
      setLoading(true); // 로딩 상태 추가
      const res = await getProductList(
        {
          sort: 'best-selling',
          limit: 5,
          custom: mainCategoryId ? { 'extra.category': mainCategoryId } : {},
        },
        token,
      );
      if (res.ok === 1) {
        setSlideData(res.item.slice(0, 5)); //5개만 가져오기
      } else {
        console.error(res.message);
      }
    } catch (err) {
      console.error('상품을 불러오지 못했습니다.', err);
    } finally {
      setLoading(false);
    }
  }, [token, mainCategoryId]);

  useEffect(() => {
    sliceProducts();
  }, [sliceProducts]);
  return (
    <>
      <div className="product-swiper">
        {/* 상품 로딩 중일 때 Skeleton UI */}
        {loading ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
            <SkeletonUI count={4} />
          </div>
        ) : (
          <Swiper
            loop={false}
            spaceBetween={50}
            slidesPerView={4}
            navigation={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {slideData.map((product, index) => {
              const discount = product?.extra?.originalPrice
                ? Math.round(
                    100 - (product.price * 100) / product.extra.originalPrice,
                  )
                : 0; //할인율
              const discountVal = discount > 0 ? `${discount}%` : undefined;

              return (
                <SwiperSlide key={product._id}>
                  <ProductCard
                    id={product._id}
                    name={product.name}
                    imageUrl={product.mainImages[0]?.path}
                    price={`${product.price.toLocaleString()}원`}
                    discount={discountVal}
                    rank={index + 1}
                    rating={product.extra?.star ?? 0}
                    reviewCount={product.replies}
                    isLiked={!!product.extra?.isLike}
                    onClick={() => {}}
                    myBookmarkId={product.myBookmarkId}
                    token={token}
                    type={'product'}
                    UpdateProductState={sliceProducts}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </>
  );
}
export default ShoppingSellingSlider;
