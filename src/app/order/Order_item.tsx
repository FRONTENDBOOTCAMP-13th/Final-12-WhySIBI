'use client';

import { ProductData, ProductResponse } from '@/types/puchase';
import useUserStore from '@/zustand/useUserStore';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

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
    <li className="px-1 py-6 flex gap-6">
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
      <section className="flex flex-col gap-1.5">
        <h3 className="font-bold text-size-lg">{productDetail?.item?.name}</h3>
        <p>
          옵션 |{' '}
          <strong>
            [color] {productData?.color} / [size] {productData?.size}
          </strong>
        </p>
        <p>
          수량 | <strong>{productData?.quantity}</strong>
        </p>
        <p>
          배송 | <strong>무료</strong>
        </p>
        {productDetail?.item?.price && productData?.quantity ? (
          <p>
            총 상품금액 |{' '}
            <strong>
              {(
                productDetail?.item?.extra.originalPrice * productData?.quantity
              ).toLocaleString()}
            </strong>
          </p>
        ) : (
          <div> 총 상품금액 | 계산중...</div>
        )}
      </section>
    </li>
  );
}
