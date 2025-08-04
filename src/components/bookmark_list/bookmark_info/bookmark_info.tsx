import { LikekInfoProps } from '@/types/bookmark';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
const API_URL = process.env.NEXT_PUBLIC_API_URL;
function BookMarkInfo({
  productId,
  productName,
  productImage,
  price,
}: LikekInfoProps) {
  return (
    <Link href={`/products/${productId}`}>
      <figure className="shadow-shadow-lg p-5 items-center w-fit rounded-radius-lg">
        <Image
          src={`${API_URL}/${productImage?.path}`}
          alt={`${productId} 상품 이미지`}
          width={270}
          height={270}
          className="object-cover"
        />
        <figcaption className="w-fit mt-4">
          <p className="mb-2 font-basic">{productName}</p>
          <p className="font-basic text-flame-300">{price} 원</p>
        </figcaption>
      </figure>
    </Link>
  );
}
export default memo(BookMarkInfo);
