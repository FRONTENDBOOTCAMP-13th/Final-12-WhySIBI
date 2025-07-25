import Image from 'next/image';
import { memo } from 'react';

function BookMarkInfo() {
  return (
    <figure className="shadow-shadow-lg p-5 rounded-radius-lg">
      <Image
        src={'/image/theme_image/home_work.png'}
        alt="상품 이미지"
        width={270}
        height={270}
        className="object-cover"
      />
      <figcaption className="w-fit mt-4">
        <p className="mb-2 font-basic">상품명</p>
        <p className="font-basic">가격</p>
      </figcaption>
    </figure>
  );
}
export default memo(BookMarkInfo);
