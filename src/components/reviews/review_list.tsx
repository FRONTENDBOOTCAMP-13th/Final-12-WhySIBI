'use client';
import Pagenation from '@/components/basic_component/Pagenation';
import SkeletonUI from '@/components/product_component/skeleton_ui';
import ReviewInfo from '@/components/reviews/review_info/review_info';
import { ReviewItem } from '@/types/replies';
import Image from 'next/image';
import { useEffect, useState } from 'react';
interface reviewListProp {
  reviewItem: ReviewItem[];
}
export default function ReviewLists({ reviewItem }: reviewListProp) {
  //상품 리스트 불러오는 부분
  const [reviewList, setReviewList] = useState<ReviewItem[] | null>(null);
  //페이지 네이션
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const reviewListData = async () => {
      try {
        if (reviewItem) {
          setReviewList(reviewItem);
        } else {
          setReviewList(null);
        }
      } catch (error) {
        console.error('상품 정보 로딩 실패:', error);
      } finally {
        setLoading(false);
      }
    };
    reviewListData();
  }, [reviewItem]);

  const onePage = 10; //한 페이지에 보여줄 상품 수
  const totalPage = Math.max(1, Math.ceil((reviewList?.length || 0) / onePage)); //총 페이지 수
  const startPage = (page - 1) * onePage; //(1-1) * 12 = 0 , (2-1) * 12 = 12
  const endPage = page * onePage; //1 * 12 = 12 , 2 * 12 = 24
  const sliceData = reviewList?.slice(startPage, endPage); //12 , 24 ... 개씩 잘라서 보여주기
  const handlePagenation = (page: number) => {
    setPage(page);
  };

  return (
    <>
      {' '}
      {reviewList && reviewList?.length > 0 ? (
        isLoading ? (
          <div className="flex justify-center items-center mt-20">
            <SkeletonUI count={10} />
          </div>
        ) : (
          <nav className="mt-20">
            <ul className="flex flex-col flex-wrap gap-16">
              {sliceData?.map(review => (
                <ReviewInfo
                  content={review.content}
                  productName={review.product.name}
                  productImage={review.product.image}
                  productId={review.product._id}
                  star={review.extra.star}
                  _id={review._id}
                  key={review._id}
                />
              ))}
            </ul>
            <div className="w-4/5 mt-5">
              <Pagenation
                page={page}
                totalPage={totalPage}
                onPageTurner={handlePagenation}
              />
            </div>
          </nav>
        )
      ) : (
        <div>
          {' '}
          <section className="h-72 flex flex-col justify-center items-center gap-3">
            <h3 className="font-bold text-2xl">상품에 대한 리뷰가 없다냥</h3>
            <Image
              src="/image/category_icon/furniture.svg"
              alt="리뷰가 필요하다냥"
              width="150"
              height="150"
              className="opacity-20 mt-5 mb-2.5"
              aria-hidden="true"
            />
          </section>
        </div>
      )}
    </>
  );
}
