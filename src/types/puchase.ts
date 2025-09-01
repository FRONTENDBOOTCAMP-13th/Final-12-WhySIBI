export interface ProductData {
  _id: number;
  quantity: number;
  color: string;
  size: string;
  name?: string;
}

export interface ImageData {
  path: string;
  originalname: string;
}

export interface ProductResponse {
  item: {
    mainImages: ImageData[];
    name?: string;
    price?: number;
    extra: {
      originalPrice: number;
    };
  };
}
