import { InquryProductProps } from '@/types';
import Image from 'next/image';

export default function InquryInfo({
  content,
  title,
  createdAt,
  productImage,
}: InquryProductProps) {
  return (
    <li className="w-full md:w-4/5 border-2 border-button-color-opaque-25 shadow-shadow-md xl:p-5 lg:p-4 md:p-3 p-2   rounded-radius-lg">
      <div className="flex justify-between mt-6 items-center">
        <figure className="flex gap-6">
          <Image
            src={productImage?.path || ''}
            alt={'상품 이미지'}
            width={140}
            height={140}
            className="rounded-radius-lg"
            unoptimized
          />
          <figcaption className="font-basic flex flex-col gap-2">
            <p>{title}</p>
            <p>{content}</p>
            <p>{createdAt}</p>
          </figcaption>
        </figure>
      </div>
    </li>
  );
}
