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
  createdAt: string;
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
  id: string;
  params?: { id: string };
}

export interface ShoppingFormType {
  title: string;
  originalPrice: number;
  price: number;
  stars: ReactElement[][];
  star: number;
  color: string[];
  size: string[];
  reviewCount: number;
  avg: number;
  id: string;
}

// 사용자 정보 타입
export interface User {
  _id: number;
  name: string;
  image: string;
}
// 상품 정보 타입
export interface Product {
  name: string;
}
// 메인 문의 타입
export interface InquiryItem {
  _id: number;
  type: 'qna';
  product_id: number;
  seller_id: number;
  views: number;
  user: User;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  product: Product;
  bookmarks: number;
  repliesCount: number;
}
