'use client';
import ReviewInfo from '@/components/reviews/review_info/review_info';
import { GetReplie } from '@/data/actions/replies';
import { ReviewItem } from '@/types/replies';
import { useEffect, useState } from 'react';

export default function ReviewLists() {
  //상품 리스트 불러오는 부분
  const [reviewList, setReviewList] = useState<ReviewItem[] | null>(null);

  let token = null;
  const userStorageString = sessionStorage.getItem('user');
  if (userStorageString) {
    try {
      const userStorage = JSON.parse(userStorageString);
      if (userStorage?.state?.user?.token?.accessToken) {
        token = userStorage.state.user.token.accessToken;
      }
    } catch (error) {
      console.error('JSON 파싱 오류:', error);
    }
  }

  useEffect(() => {
    const reviewListData = async () => {
      try {
        const res = await GetReplie(token);
        if (res.ok === 1) {
          setReviewList(res.item);
          console.log(res.item);
        } else {
          setReviewList(null);
        }
      } catch (error) {
        console.error('상품 정보 로딩 실패:', error);
      }
    };

    reviewListData();
  }, []);

  return (
    <nav className="mt-20">
      <ul className="flex flex-col flex-wrap gap-16">
        {reviewList?.map((review, i) => (
          <ReviewInfo
            content={review.content}
            productName={review.product.name}
            productImage={review.product.image}
            productId={review.product._id}
            star={review.extra.star}
            key={i}
          />
        ))}
      </ul>
    </nav>
  );
}
