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

export interface LikeProduct {
  _id: number;
  mainImages: BookmarkImage[];
  name: string;
  price: number;
}
export interface BookmarkImage {
  path: string;
  name: string;
  originalname: string;
}
export interface BookMarkItem {
  _id: number;
  user: BookMarkUser;
  title: string;
  content: string;
  createdAt: string;
  extra: BookMarkExtra;
  product: LikeProduct;
  post: BookMarkProduct;
  memo?: string;
}
export interface BookMarkProduct {
  _id: number;
  title: string;
  image?: BookmarkImage;
}
export interface BookMarkInfoProps {
  title: string;
  _id: number;
  productImage?: BookmarkImage;
}
export interface LikekInfoProps {
  star?: number;
  _id: number;
  productId?: number;
  productName: string;
  productImage?: BookmarkImage;
  price: number;
}
