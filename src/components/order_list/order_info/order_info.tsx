import { OrderProduct } from '@/types/order';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

function OrderProductInfo({ _id, price, name, image, state }: OrderProduct) {
  let deliveryState = '';
  if (state === 'OS010') {
    deliveryState = '상품준비중';
  } else if (state === 'OS020') {
    deliveryState = '배송준비중';
  } else if (state === 'OS030') {
    deliveryState = '배송중';
  } else if (state === 'OS035') {
    deliveryState = '배송완료';
  }
  return (
    <li className=" w-full lg:w-4/5 border-2 border-button-color-opaque-25 shadow-shadow-md xl:p-5 lg:p-4  p-2 rounded-radius-lg">
      <p className="font-logo xl:text-2xl lg:text-xl md:text-lg text-base xl:ml-5 lg:ml-4 md:ml-3 ml-2">
        {deliveryState}
      </p>

      {/* 데스크톱/태블릿 레이아웃 (768px 이상) */}
      <div className="md:flex md:justify-between xl:mt-6 lg:mt-5 md:mt-4 mt-3 md:items-center hidden">
        <Link href={`/products/${_id}`} className="flex-1">
          <figure className="flex xl:gap-6 lg:gap-5 md:gap-4">
            {image && (
              <Image
                src={image.path}
                alt={image.name || '상품 이미지'}
                width={140}
                height={140}
                className="xl:w-[140px] xl:h-[140px] lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] rounded-radius-lg object-cover"
              />
            )}
            <figcaption className="font-basic font-bold">
              <p className="xl:text-base lg:text-sm md:text-sm">
                상품명: {name}
              </p>
              <p className="xl:mt-7 lg:mt-6 md:mt-5 text-menu-text xl:text-base lg:text-sm md:text-sm">
                가격: {price}원
              </p>
            </figcaption>
          </figure>
        </Link>

        <div className="font-basic xl:pl-6 lg:pl-5 md:pl-4 font-bold text-center border-l-2 border-button-color-opaque-25 flex-shrink-0">
          <Link
            href={`/my_page/delivery/${_id}`}
            className="block rounded-radius-full xl:px-16 xl:py-3 lg:px-12 lg:py-2.5 md:px-8 md:py-2 border-2 text-button-color bg-vanilla-300 mb-5 xl:text-base lg:text-sm md:text-xs whitespace-nowrap"
          >
            배송 조회
          </Link>
          <Link
            href={`/my_page/order/cancel/${_id}`}
            className="block rounded-radius-full xl:px-16 xl:py-3 lg:px-12 lg:py-2.5 md:px-8 md:py-2 border-2 border-columbia-blue-300 text-button-color mb-5 xl:text-base lg:text-sm md:text-xs whitespace-nowrap"
          >
            주문 &middot; 배송 취소
          </Link>
          <Link
            href={`/my_page/reviews/write/${_id}`}
            className="block rounded-radius-full xl:px-16 xl:py-3 lg:px-12 lg:py-2.5 md:px-8 md:py-2 border-2 text-button-color bg-columbia-blue-300 xl:text-base lg:text-sm md:text-xs whitespace-nowrap"
          >
            리뷰 작성하기
          </Link>
        </div>
      </div>

      {/* 모바일 레이아웃 (768px 미만) */}
      <div className="md:hidden">
        <Link href={`/products/${_id}`}>
          <figure className="flex gap-3 mb-4">
            {image && (
              <Image
                src={image.path}
                alt={image.name || '상품 이미지'}
                width={80}
                height={80}
                className="w-[80px] h-[80px] rounded-radius-lg object-cover flex-shrink-0"
              />
            )}
            <figcaption className="font-basic font-bold text-sm flex-1">
              <p>상품명: {name}</p>
              <p className="mt-3 text-menu-text">가격: {price}원</p>
            </figcaption>
          </figure>
        </Link>

        <div className="font-basic font-bold text-center space-y-2 border-t-2 border-button-color-opaque-25 pt-3">
          <Link
            href={`/my_page/delivery/${_id}`}
            className="block rounded-radius-full px-4 py-2 border-2 text-button-color bg-vanilla-300 text-xs"
          >
            배송 조회
          </Link>
          <Link
            href={`/my_page/order/cancel/${_id}`}
            className="block rounded-radius-full px-4 py-2 border-2 border-columbia-blue-300 text-button-color text-xs"
          >
            주문 &middot; 배송 취소
          </Link>
          <Link
            href={`/my_page/reviews/write/${_id}`}
            className="block rounded-radius-full px-4 py-2 border-2 text-button-color bg-columbia-blue-300 text-xs"
          >
            리뷰 작성하기
          </Link>
        </div>
      </div>
    </li>
  );
}
export default memo(OrderProductInfo);
