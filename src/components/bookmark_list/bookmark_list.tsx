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
import Pagenation from '@/components/basic_component/Pagenation';
import SkeletonUI from '@/components/product_component/skeleton_ui';
import Image from 'next/image';
import Link from 'next/link';

interface BookMarkListProp {
  resProduct: BookMarkItem[] | null;
  resPost: BookMarkItem[] | null;
}

export default function BookMarkList({
  resProduct,
  resPost,
}: BookMarkListProp) {
  const [productList, setProductList] = useState<BookMarkItem[] | null>(null);
  const [postList, setPostList] = useState<BookMarkItem[] | null>(null);
  const [isLoading, setLoading] = useState(true);
  //페이지 네이션
  const [page, setPage] = useState(1);
  const [onePage, setOnePage] = useState(0);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        if (resProduct) {
          setProductList(resProduct);
        } else {
          console.log('Product error:', resProduct);
        }

        if (resPost) {
          setPostList(resPost);
        } else {
          console.log('Post error:', resPost);
        }
      } catch (error) {
        console.error('상품 정보 로딩 실패:', error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [resPost, resProduct]);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setOnePage(16);
    } else {
      setOnePage(4);
    }
  }, []);
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
      {/* 둘 다 없는 경우 */}
      {(!productList || productList.length === 0) &&
        (!postList || postList.length === 0) &&
        !isLoading && (
          <div>
            <section className="h-72 flex flex-col justify-center items-center gap-3">
              <h3 className="font-bold text-2xl">북마크한 상품이 없다냥!</h3>
              <Image
                src="/image/category_icon/furniture.svg"
                alt="북마크가 필요하다냥"
                width="150"
                height="150"
                className="opacity-20 mt-5 mb-2.5"
                aria-hidden="true"
              />
              <Link
                href="/shopping/category"
                className="box-border cursor-pointer bg-flame-250 w-[300px] h-[48px] text-white border-2 border-flame-250 rounded-sm font-bold flex items-center justify-center"
              >
                <span>쇼핑하러 가기</span>
              </Link>
              <Link
                href="/shopping/category"
                className="box-border cursor-pointer bg-flame-250 w-[300px] h-[48px] text-white border-2 border-flame-250 rounded-sm font-bold flex items-center justify-center"
              >
                <span>커뮤니티 구경가기</span>
              </Link>
            </section>
          </div>
        )}

      {/* 로딩 중이거나 데이터가 하나라도 있는 경우 */}
      {(isLoading ||
        (productList && productList.length > 0) ||
        (postList && postList.length > 0)) && (
        <>
          {isLoading ? (
            <div className="flex justify-center items-center mt-20">
              <SkeletonUI count={10} />
            </div>
          ) : (
            <>
              <section className="mt-11 pb-16 border-b-[1px] border-button-color-opaque-25">
                <h4 className="font-logo text-4xl">북마크 목록</h4>
                <div className="bookmark-swiper w-full lg:max-w-11/12 mx-auto">
                  {!postList || postList.length === 0 ? (
                    <div>
                      <section className="h-72 flex flex-col justify-center items-center gap-3">
                        <h3 className="font-bold text-2xl">
                          북마크한 게시글이 없다냥!
                        </h3>
                        <Image
                          src="/image/category_icon/furniture.svg"
                          alt="게시글이 필요하다냥"
                          width="150"
                          height="150"
                          className="opacity-20 mt-5 mb-2.5"
                          aria-hidden="true"
                        />
                        <Link
                          href="/community/showRoom"
                          className="box-border cursor-pointer bg-flame-250 w-[300px] h-[48px] text-white border-2 border-flame-250 rounded-sm font-bold flex items-center justify-center"
                        >
                          <span>커뮤니티 구경하기</span>
                        </Link>
                      </section>
                    </div>
                  ) : (
                    <Swiper
                      modules={[Navigation, Pagination]}
                      loop={false}
                      navigation={true}
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 100,
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
                  )}
                </div>
              </section>

              <section className="mt-24">
                <h4 className="font-logo text-4xl">찜 목록</h4>
                {!productList || productList.length === 0 ? (
                  <div>
                    <section className="h-72 flex flex-col justify-center items-center gap-3">
                      <h3 className="font-bold text-2xl">
                        찜한 상품이 없다냥!
                      </h3>
                      <Image
                        src="/image/category_icon/furniture.svg"
                        alt="찜이 필요하다냥"
                        width="150"
                        height="150"
                        className="opacity-20 mt-5 mb-2.5"
                        aria-hidden="true"
                      />
                      <Link
                        href="/shopping/category"
                        className="box-border cursor-pointer bg-flame-250 w-[300px] h-[48px] text-white border-2 border-flame-250 rounded-sm font-bold flex items-center justify-center"
                      >
                        <span>상품 구경하러 가기</span>
                      </Link>
                    </section>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-rows-4 md:grid-cols-2  xl:grid-cols-4 xl:grid-rows-4 xl:gap-16 lg:gap-12 md:gap-8 gap-6 items-center">
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
                    <div className="w-full xl:mt-5 lg:mt-4 md:mt-3 mt-2">
                      <Pagenation
                        page={page}
                        totalPage={totalPage}
                        onPageTurner={handlePagenation}
                      />
                    </div>
                  </>
                )}
              </section>
            </>
          )}
        </>
      )}
    </>
  );
}
