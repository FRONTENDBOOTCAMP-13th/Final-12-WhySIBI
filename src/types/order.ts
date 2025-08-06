// 상품 이미지 타입
export interface OrderProductImage {
  path: string;
  name: string;
  originalname: string;
}

// 상품 extra 정보 타입
export interface OrderProductExtra {
  isNew?: boolean;
  isBest?: boolean;
  keyword?: string;
  category?: string[];
  tag?: string;
}

// 주문 내 개별 상품 타입
export interface OrderProduct {
  _id?: number;
  name?: string;
  price?: number;
  orderId?: string; // 주문 ID 추가
  image: OrderProductImage;
  extra?: OrderProductExtra;
  state?: string;
}

// 주문 주소 정보 타입
export interface OrderAddress {
  name: string;
  value: string;
}

// 주문 비용 정보 타입
export interface OrderCost {
  products: number;
  shippingFees: number;
  discount: {
    products?: number;
    shippingFees?: number;
  };
  total: number;
}

// 전체 주문 타입 (실제 데이터 구조와 일치)
export interface OrderItem {
  _id: number;
  user_id: number;
  address: OrderAddress;
  cost: OrderCost;
  createdAt: string;
  updatedAt: string;
  state: string;
  products: OrderProduct[];
}
