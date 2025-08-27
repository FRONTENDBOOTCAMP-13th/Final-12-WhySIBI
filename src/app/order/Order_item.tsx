'use client';

import useUserStore from '@/zustand/useUserStore';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface ProductData {
  _id: number;
  quantity: number;
  color: string;
  size: string;
  name?: string;
}

interface ImageData {
  path: string;
  originalname: string;
}

interface ProductResponse {
  item: {
    mainImages: ImageData[];
    name?: string;
    price?: number;
  };
}

export default function OrderItem() {
  const searchParams = useSearchParams();
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [productImg, setProductImg] = useState<ProductResponse | null>(null);
  const { user } = useUserStore();
  const token = user?.token?.accessToken;

  useEffect(() => {
    const productParam = searchParams.get('product');
    if (productParam) {
      const decodedProduct = JSON.parse(decodeURIComponent(productParam));
      setProductData(decodedProduct);
    }
  }, [searchParams]);

  useEffect(() => {
    async function fetchProduct() {
      if (productData && token) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/products/${productData?._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
              'Client-Id': 'febc13-final12-emjf',
            },
          },
        );
        const data = await response.json();
        setProductImg(data);
      }
    }
    fetchProduct();
  }, [productData, token]);

  const productImage = productImg?.item?.mainImages[0].path;
  const productAlt = productImg?.item?.mainImages[0].originalname;
  const validImage = productImage && productAlt;

  console.log('이미지 불러오기', productImg);
  console.log('이게된다고?', productData);

  return (
    <li className="px-5 pt-6 pb-6">
      주문 아이템
      {validImage ? (
        <Image
          src={productImage}
          className="max-w-30 max-h-33 rounded-md"
          width={80}
          height={80}
          alt={productAlt}
        ></Image>
      ) : (
        <div>이미지 없음</div>
      )}
    </li>
  );
}
