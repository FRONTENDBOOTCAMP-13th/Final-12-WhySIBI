import { InquryProductProps } from '@/types';
import Image from 'next/image';
import { memo } from 'react';

function InquryInfo({
  content,
  title,
  createdAt,
  productImage,
}: InquryProductProps) {
  return (
    <li className="w-full md:w-4/5 border-2 border-button-color-opaque-25 shadow-shadow-md p-3 sm:p-4 md:p-3 lg:p-4 xl:p-5 rounded-radius-lg">
      <div className="flex flex-col sm:flex-row justify-between mt-3 sm:mt-4 md:mt-6 items-start sm:items-center gap-4 sm:gap-0">
        <figure className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto">
          <Image
            src={productImage?.path || ''}
            alt={'상품 이미지'}
            width={140}
            height={140}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-[140px] xl:h-[140px] rounded-radius-lg object-cover flex-shrink-0 mx-auto sm:mx-0"
            unoptimized
          />
          <figcaption className="font-basic flex flex-col gap-1 sm:gap-2 text-center sm:text-left flex-1">
            <p className="text-sm sm:text-base md:text-lg font-semibold line-clamp-2">
              {title}
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 line-clamp-2 sm:line-clamp-3">
              {content}
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mt-auto">
              {createdAt}
            </p>
          </figcaption>
        </figure>
      </div>
    </li>
  );
}
export default memo(InquryInfo);
