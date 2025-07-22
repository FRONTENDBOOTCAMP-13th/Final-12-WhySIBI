import { ReactElement } from 'react';

export interface ProductReviewProps {
  stars: ReactElement[][];
  replies: Reply[];
}

export interface ReviewListProps {
  stars: ReactElement[][];
  profile: string;
  author: string;
  content: string;
  image?: string;
  date: string;
  star: number;
}

// 사용자 타입
export interface User {
  _id: number;
  name: string;
  image: string; // 프로필 이미지 경로
}

// 리뷰 extra 정보 타입
export interface ReviewExtra {
  star: number; // 1-5 별점
  image?: {
    path: string;
  };
  date: string;
}

// 개별 리뷰 타입
export interface Reply {
  _id: number;
  user_id: number;
  user: User;
  rating: number;
  content: string;
  createdAt: string;
  extra: ReviewExtra;
}

export interface ShoppingDetailType {
  // title: string;
  // originalPrice: number;
  // price: number;
  // imageSrc: string;
  stars: ReactElement[][];
  pageNum: string;
  params?: { id: string };
}
