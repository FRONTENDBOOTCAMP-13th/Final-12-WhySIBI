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
