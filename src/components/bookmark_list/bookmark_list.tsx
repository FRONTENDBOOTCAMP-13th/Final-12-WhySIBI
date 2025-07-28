'use client';
import { BookMarkItem } from '@/types/bookmark';
import { useEffect, useState } from 'react';
import GetBookMarkList from '@/data/actions/bookmark';
import { Swiper, SwiperSlide } from 'swiper/react';
import BookMarkInfo from '@/components/bookmark_list/bookmark_info/bookmark_info';
import BookMarkCard from '@/components/bookmark_list/bookmark_card/bookmark_card';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import useUserStore from '@/zustand/useUserStore';

export default function BookMarkList() {
  SwiperCore.use([Navigation, Scrollbar, Pagination]);
  const [productList, setProductList] = useState<BookMarkItem[] | null>(null);
  const [postList, setPostList] = useState<BookMarkItem[] | null>(null);
  const { user } = useUserStore();

  useEffect(() => {
    const getData = async () => {
      const resProduct = await GetBookMarkList(
        'product',
        user?.token?.accessToken as string,
      );
      const resPost = await GetBookMarkList(
        'post',
        user?.token?.accessToken as string,
      );
      console.log(resProduct);
      // console.log(resPost);
      try {
        if (resProduct.ok === 1) {
          setProductList(resProduct.item);
        } else {
          console.log('Product error:', resProduct.message);
        }

        if (resPost.ok === 1) {
          setPostList(resPost.item);
        } else {
          console.log('Post error:', resPost.message);
        }
      } catch (error) {
        console.error('상품 정보 로딩 실패:', error);
      }
    };
    getData();
  }, []);
  console.log(productList);
  console.log(postList);
  return (
    <>
      <section className="mt-11 pb-16 border-b-[1px] border-button-color-opaque-25">
        <h4 className="font-logo text-4xl">북마크 목록</h4>
        <div className="bookmark-swiper  max-w-11/12 mx-auto">
          <Swiper
            loop={true}
            // Responsive breakpoints
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 60,
                centeredSlides: true,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 80,
                centeredSlides: true,
              },
            }}
            navigation={true}
            className="bookmark-swiper-container"
          >
            {postList?.map(bookmark => (
              <SwiperSlide key={bookmark._id} className="relative">
                <BookMarkCard
                  title={bookmark.post.title}
                  // productImage={bookmark.product[0]}
                  _id={bookmark.post._id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="mt-24">
        <h4 className="font-logo text-4xl">찜 목록</h4>
        <div className="grid grid-cols-4 grid-rows-4 gap-16 items-center">
          {productList?.map((product, i) => (
            <BookMarkInfo
              key={i}
              _id={product._id}
              productId={product.product._id}
              productName={product.product.name}
              productImage={product.product.mainImages[0]}
              price={product.product.price}
            />
          ))}
        </div>
      </section>
    </>
  );
}
