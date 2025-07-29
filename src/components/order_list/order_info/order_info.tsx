import { OrderProduct } from '@/types/order';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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
    <li className="w-4/5 border-2 border-button-color-opaque-25 shadow-shadow-md p-5 rounded-radius-lg">
      <p className="font-logo text-2xl ml-5">{deliveryState}</p>
      <div className="flex justify-between mt-6 items-center">
        <Link href={`/community/${_id}`}>
          <figure className="flex gap-6">
            {image && (
              <Image
                src={`${API_URL}/${image.path}`}
                alt={image.name || '상품 이미지'}
                width={140}
                height={140}
                className="rounded-radius-lg"
              />
            )}

            <figcaption className="font-basic font-bold">
              <p>상품명: {name}</p>
              <p className="mt-7 text-menu-text">가격: {price}원</p>
            </figcaption>
          </figure>
        </Link>
        <div className="font-basic pl-6 font-bold text-center border-l-2 border-button-color-opaque-25">
          <Link
            href={`/my_page/delivery/${_id}`}
            className="block rounded-radius-full px-16 py-3 border-2 text-button-color bg-vanilla-300 mb-5"
          >
            배송 조회
          </Link>
          <Link
            href={`/my_page/order/cancel/${_id}`}
            className="block rounded-radius-full px-16 py-3 border-2 border-columbia-blue-300 text-button-color mb-5"
          >
            주문 &middot; 배송 취소
          </Link>
          <Link
            href={`/my_page/reviews/write/${_id}`}
            className="block rounded-radius-full px-16 py-3 border-2 text-button-color bg-columbia-blue-300"
          >
            리뷰 작성하기
          </Link>
        </div>
      </div>
    </li>
  );
}
export default memo(OrderProductInfo);
