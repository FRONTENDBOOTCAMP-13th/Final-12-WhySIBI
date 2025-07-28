'use client';
import ReviewInfo from '@/components/reviews/review_info/review_info';
import ReviewStar from '@/components/review_write/star';
import { GetReplie } from '@/data/actions/replies';
import { ReviewItem } from '@/types/replies';
import useUserStore from '@/zustand/useUserStore';
import { useEffect, useState } from 'react';

export default function ReviewLists() {
  //상품 리스트 불러오는 부분
  const [reviewList, setReviewList] = useState<ReviewItem[] | null>(null);
  // 수동으로 페이지 새로고침
  const [isRefreshing, setIsRefreshing] = useState(false);
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
  }, []);

  const handleDeleteSuccess = async () => {
    if (isRefreshing) return;

    setIsRefreshing(true);
    try {
      const res = await GetReplie(token);
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

  return (
    <nav className="mt-20">
      <ul className="flex flex-col flex-wrap gap-16">
        {reviewList?.map((review, i) => (
          <ReviewInfo
            content={review.content}
            productName={review.product.name}
            productImage={review.product.image}
            productId={review._id}
            star={review.extra.star}
            key={i}
            onDelete={handleDeleteSuccess}
          />
        ))}
      </ul>
    </nav>
  );
}
