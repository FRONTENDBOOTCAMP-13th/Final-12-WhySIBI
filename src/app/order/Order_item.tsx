'use client';

import useUserStore from '@/zustand/useUserStore';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

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
  const [productDetail, setProductDetail] = useState<ProductResponse | null>(
    null,
  );
  const { user } = useUserStore();
  const token = user?.token?.accessToken;

  useEffect(() => {
    const productParam = searchParams.get('product');
    if (productParam) {
      const decodedProduct = JSON.parse(decodeURIComponent(productParam));
      setProductData(decodedProduct);
    }
  }, [searchParams]);

  const fetchProduct = useCallback(
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
        setProductDetail(data);
      }
    },
    [productData, token],
  );

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const productImage = productDetail?.item?.mainImages[0]?.path;
  const productAlt = productDetail?.item?.mainImages[0]?.originalname;

  console.log('이미지 불러오기', productDetail);
  console.log('이게된다고?', productData);

  return (
    <li className="px-5 pt-6 pb-6 flex">
      {productImage && productAlt ? (
        <Image
          src={productImage}
          className="w-40 h-40 rounded-md"
          width={80}
          height={80}
          alt={productAlt}
        ></Image>
      ) : (
        <div>이미지 불러오는중...</div>
      )}
      <section>
        <h3>{productDetail?.item?.name}</h3>
        <p>
          옵션 | [color] {productData?.color} / [size] {productData?.size}
        </p>
        <p>수량 | {productData?.quantity}</p>
        <p>배송 | 무료</p>
        {productDetail?.item?.price && productData?.quantity ? (
          <p>
            총 상품금액 | {productDetail?.item?.price * productData?.quantity}
          </p>
        ) : (
          <div> 총 상품금액 | 계산중...</div>
        )}
      </section>
    </li>
  );
}
