'use client';
import Pagenation from '@/components/basic_component/Pagenation';
import ReviewInfo from '@/components/reviews/review_info/review_info';
import { GetReplie } from '@/data/actions/replies';
import { ReviewItem } from '@/types/replies';
import useUserStore from '@/zustand/useUserStore';
import { useEffect, useState } from 'react';

export default function ReviewLists() {
  //상품 리스트 불러오는 부분
  const [reviewList, setReviewList] = useState<ReviewItem[] | null>(null);
  // 수동으로 페이지 새로고침
  const [isRefreshing, setIsRefreshing] = useState(false);
  //페이지 네이션
  const [page, setPage] = useState(1);
  const { user } = useUserStore();

  useEffect(() => {
    const reviewListData = async () => {
      try {
        const res = await GetReplie(user?.token?.accessToken as string);
        if (res.ok === 1) {
          setReviewList(res.item);
        } else {
          setReviewList(null);
        }
      } catch (error) {
        console.error('상품 정보 로딩 실패:', error);
      }
    };

    reviewListData();
  }, [user?.token?.accessToken]);

  const handleDeleteSuccess = async () => {
    if (isRefreshing) return;

    setIsRefreshing(true);
    try {
      const res = await GetReplie(user?.token?.accessToken as string);
      if (res.ok === 1) {
        setReviewList(res.item);
        console.log('삭제 후 목록 새로고침 완료');
      } else {
        setReviewList(null);
      }
    } catch (error) {
      console.error('새로고침 실패:', error);
    } finally {
      setIsRefreshing(false);
    }
  };
  const onePage = 10; //한 페이지에 보여줄 상품 수
  const totalPage = Math.max(1, Math.ceil((reviewList?.length || 0) / onePage)); //총 페이지 수
  const startPage = (page - 1) * onePage; //(1-1) * 12 = 0 , (2-1) * 12 = 12
  const endPage = page * onePage; //1 * 12 = 12 , 2 * 12 = 24
  const sliceData = reviewList?.slice(startPage, endPage); //12 , 24 ... 개씩 잘라서 보여주기
  const handlePagenation = (page: number) => {
    setPage(page);
  };

  console.log(reviewList);
  return (
    <nav className="mt-20">
      <ul className="flex flex-col flex-wrap gap-16">
        {sliceData?.map((review, i) => (
          <ReviewInfo
            content={review.content}
            productName={review.product.name}
            productImage={review.product.image}
            productId={review.product._id}
            star={review.extra.star}
            key={i}
            onDelete={handleDeleteSuccess}
          />
        ))}
      </ul>
      <Pagenation
        page={page}
        totalPage={totalPage}
        onPageTurner={handlePagenation}
      />
    </nav>
  );
}
