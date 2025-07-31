'use client';
import { BookMarkItem } from '@/types/bookmark';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import BookMarkInfo from '@/components/bookmark_list/bookmark_info/bookmark_info';
import BookMarkCard from '@/components/bookmark_list/bookmark_card/bookmark_card';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import useUserStore from '@/zustand/useUserStore';
import Pagenation from '@/components/basic_component/Pagenation';
import { GetBookMarkList } from '@/data/actions/bookmark';

export default function BookMarkList() {
  const [productList, setProductList] = useState<BookMarkItem[] | null>(null);
  const [postList, setPostList] = useState<BookMarkItem[] | null>(null);
  //페이지 네이션
  const [page, setPage] = useState(1);
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
  }, [user?.token?.accessToken]);
  const onePage = 16; //한 페이지에 보여줄 상품 수
  const totalPage = Math.max(
    1,
    Math.ceil((productList?.length || 0) / onePage),
  ); //총 페이지 수
  const startPage = (page - 1) * onePage; //(1-1) * 12 = 0 , (2-1) * 12 = 12
  const endPage = page * onePage; //1 * 12 = 12 , 2 * 12 = 24
  const sliceData = productList?.slice(startPage, endPage); //12 , 24 ... 개씩 잘라서 보여주기
  const handlePagenation = (page: number) => {
    setPage(page);
  };
  return (
    <>
      <section className="mt-11 pb-16 border-b-[1px] border-button-color-opaque-25">
        <h4 className="font-logo text-4xl">북마크 목록</h4>
        <div className="bookmark-swiper  max-w-11/12 mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            loop={false}
            navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 80,
              },
            }}
            className="bookmark-swiper-container"
          >
            {postList?.map(bookmark => (
              <SwiperSlide key={bookmark._id} className="relative">
                <BookMarkCard
                  title={bookmark.post.title}
                  productImage={bookmark.post.image?.[0]}
                  type={bookmark.post.type}
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
          {sliceData?.map((product, i) => (
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
        <Pagenation
          page={page}
          totalPage={totalPage}
          onPageTurner={handlePagenation}
        />
      </section>
    </>
  );
}
