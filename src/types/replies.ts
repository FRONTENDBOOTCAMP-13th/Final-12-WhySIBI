export interface ProductImage {
  path: string;
  name: string;
  originalname: string;
}
export interface replie {
  // 구매 고유 ID
  order_id: number;
  // 상품 고유
  product_id: number;
  // 상품 제목
  rating: number;
  content: string;
  mainImages: ProductImage[];
  extra: {
    star: number;
  };
}

export interface ReviewProductImage {
  path: string;
  name: string;
  originalname: string;
}

export interface ReviewUser {
  _id: number;
  image: string;
  name: string;
}

export interface ReviewExtra {
  image: ReviewProductImage;
  star: number;
  date: string;
}

export interface ReviewProduct {
  _id: number;
  image: ReviewProductImage;
  name: string;
}

// 전체 리뷰 데이터 타입
export interface ReviewItem {
  _id: number;
  user: ReviewUser;
  content: string;
  createdAt: string;
  extra: ReviewExtra;
  product: ReviewProduct;
}

// ReviewInfo 컴포넌트의 Props 타입
export interface ReviewInfoProps {
  userImage?: string;
  content: string;
  star: number;
  productId?: number;
  productName: string;
  productImage: ReviewProductImage;
}
