export interface ReviewProductImage {
  path: string;
  name: string;
  originalname: string;
}

export interface BookMarkUser {
  _id: number;
  image: string;
  name: string;
}

export interface BookMarkExtra {
  isNew?: boolean;
  isBest?: boolean;
  color?: string[];
  size?: string[];
  keyword?: string;
  category?: string[];
  tag?: string;
  sort?: number;
  isLike?: boolean;
  originalPrice?: number;
  detailimg?: { path: string }[];
  star?: number;
}

export interface BookMarkProduct {
  _id: number;
  image: ReviewProductImage;
  name: string;
  price: number;
}

export interface BookMarkItem {
  _id: number;
  user: BookMarkUser;
  content: string;
  createdAt: string;
  extra: BookMarkExtra;
  product: BookMarkProduct;
}

export interface BookMarkInfoProps {
  userImage?: string;
  content: string;
  star: number;
  productId?: number;
  productName: string;
  productImage: ReviewProductImage;
}
