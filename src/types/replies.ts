export interface ProductImage {
  path: string;
  name: string;
  originalname: string;
}
export interface replie {
  order_id: number;
  product_id: number;
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


export interface ReviewItem {
  _id: number;
  user: ReviewUser;
  content: string;
  createdAt: string;
  extra: ReviewExtra;
  product: ReviewProduct;
  token: string;
}

export interface ReviewInfoProps {
  _id:number
  userImage?: string;
  content: string;
  star: number;
  productId?: number;
  productName: string;
  productImage: ReviewProductImage;
}
