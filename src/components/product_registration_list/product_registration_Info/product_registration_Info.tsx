import { ProductListProps } from '@/types';
import { Link } from 'lucide-react';
import Image from 'next/image';

export default function ProductRegistrationInfo({
  key,
  _id,
  price,
  name,
  mainImages,
}: ProductListProps) {
  return (
    <li className=" w-full lg:w-4/5 border-2 border-button-color-opaque-25 shadow-shadow-md xl:p-5 lg:p-4  p-2 rounded-radius-lg">
      {/* 데스크톱/태블릿 레이아웃 (768px 이상) */}
      <div className="md:flex md:justify-between xl:mt-6 lg:mt-5 md:mt-4 mt-3 md:items-center hidden">
        <Link href={`/products/${_id}`} className="flex-1">
          <figure className="flex xl:gap-6 lg:gap-5 md:gap-4">
            {mainImages && (
              <Image
                src={mainImages[0].path}
                alt={mainImages[0].name || '상품 이미지'}
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

        <div className="font-basic xl:pl-6 lg:pl-5 md:pl-4 font-bold text-center border-l-2 border-button-color-opaque-25 flex-shrink-0"></div>
      </div>

      {/* 모바일 레이아웃 (768px 미만) */}
      <div className="md:hidden">
        <Link href={`/products/${_id}`}>
          <figure className="flex gap-3 mb-4">
            {mainImages && (
              <Image
                src={mainImages[0].path}
                alt={mainImages[0].name || '상품 이미지'}
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
          {/* <Link
            href={`/my_page/order/cancel/${_id}`}
            className="block rounded-radius-full px-4 py-2 border-2 border-columbia-blue-300 text-button-color text-xs"
          >
            주문 &middot; 배송 취소
          </Link> */}
        </div>
      </div>
    </li>
  );
}
