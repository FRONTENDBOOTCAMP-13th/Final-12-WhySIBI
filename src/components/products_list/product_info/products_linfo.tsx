import { getProductInfo, getProductList } from '@/data/actions/products';
import { Product, ProductList } from '@/types';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default function ProductInfo() {
  // //상품 리스트 불러오는 부분
  // const [productList, setProductList] = useState<ProductList[] | null>(null);
  // useEffect(() => {
  //   const producListData = async () => {
  //     try {
  //       const res = await getProductList();
  //       if (res) {
  //         // console.log([res.item]?.[0]);
  //         console.log([res.item]);
  //         setProductList([res.item]);
  //       }
  //     } catch (error) {
  //       console.error('상품 정보 로딩 실패:', error);
  //     }
  //   };

  //   producListData();
  // }, []);
  // // console.log(productList?.[0]);
  // console.log(productList);
  // 상품 상세 정보 불러오는 부분
  const [productInfo, setProductInfo] = useState<Product | null>(null);
  useEffect(() => {
    const productInfoData = async () => {
      try {
        const res = await getProductInfo();
        if (res) {
          console.log(res.item);
          setProductInfo(res.item);
        }
      } catch (error) {
        console.error('상품 정보 로딩 실패:', error);
      }
    };

    productInfoData();
  }, []);

  console.log(productInfo?.mainImages?.[0].path);

  return (
    // {productList?.[0]map()}
    <li
      key={productInfo?._id}
      className="w-4/5 border-2 border-button-color-opaque-25 shadow-shadow-md p-5 rounded-radius-lg"
    >
      <p className="font-logo text-2xl ml-5">배송중</p>
      <div className="flex justify-between mt-6 items-center">
        <Link href={''}>
          <figure className="flex gap-6">
            <Image
              src={`${API_URL}/${productInfo?.mainImages[0].path}`}
              alt={productInfo?.name || '상품 이미지'}
              width={140}
              height={140}
              className="rounded-radius-lg"
              unoptimized
            />

            <figcaption className="font-basic font-bold">
              <p>상품명 :{productInfo?.name}</p>
              <p className="mt-7 text-menu-text">가격:{productInfo?.price} </p>
            </figcaption>
          </figure>
        </Link>
        <div className="font-basic pl-6 font-bold text-center border-l-2 border-button-color-opaque-25">
          <Link
            href={''}
            className="block rounded-radius-full px-16 py-3 border-2  text-button-color bg-vanilla-300 mb-5"
          >
            배송 조회
          </Link>
          <Link
            href={''}
            className="block rounded-radius-full px-16 py-3 border-2 border-columbia-blue-300 text-button-color mb-5"
          >
            주문 &middot; 배송 취소
          </Link>
          <Link
            href={''}
            className="block rounded-radius-full px-16 py-3 border-2 text-button-color bg-columbia-blue-300"
          >
            리뷰 작성하기
          </Link>
        </div>
      </div>
    </li>
  );
}
