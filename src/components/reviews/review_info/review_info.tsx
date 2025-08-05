import { DeleteReplie } from '@/data/actions/replies';
import { ReviewInfoProps } from '@/types/replies';
import useUserStore from '@/zustand/useUserStore';
import Image from 'next/image';

import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { memo } from 'react';

import { useState } from 'react';

function ReviewInfo({
  content,
  productImage,
  star,
  productName,
  productId,
  _id,
}: ReviewInfoProps) {
  const { user } = useUserStore();
  const [loading, setLoading] = useState(false);
  const token = user?.token?.accessToken;
  const router = useRouter();

  const handleDelete = async () => {
    setLoading(true);
    const result = await DeleteReplie(String(_id), token as string);
    if (result.ok === 1) {
      await redirect('/my_page/reviews');
      router.refresh();
    }
    setLoading(false);
  };

  const starArray = new Array(star).fill(0);

  return (
    <li className="w-full border-2 border-button-color-opaque-25 shadow-shadow-md xl:p-5 lg:p-4 md:p-3 p-2 rounded-radius-lg">
      {/* 데스크톱/태블릿 레이아웃 (768px 이상) */}
      <div className="md:flex md:justify-between xl:mt-6 lg:mt-5 md:mt-4 mt-3 md:items-center hidden">
        <Link href={`/products/${productId}`} className="flex-1">
          <figure className="flex xl:gap-6 lg:gap-5 md:gap-4">
            <Image
              src={productImage.path}
              alt={'상품 이미지'}
              width={140}
              height={140}
              className="xl:w-[140px] xl:h-[140px] lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] rounded-radius-lg object-cover"
            />
            <figcaption className="font-basic flex flex-col xl:gap-2 lg:gap-1.5 md:gap-1">
              <p className="font-bold xl:text-base lg:text-sm md:text-sm">
                {productName}
              </p>
              <span className="flex">
                {starArray.length > 0 &&
                  starArray.map((_, i) => (
                    <svg
                      key={i}
                      className="xl:w-[20px] xl:h-[19px] lg:w-[18px] lg:h-[17px] md:w-[16px] md:h-[15px]"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.62958 2.53038C7.60426 -0.469378 11.8481 -0.469378 12.8228 2.53038V2.53038C13.2587 3.87191 14.5088 4.78019 15.9194 4.78019V4.78019C19.0735 4.78019 20.385 8.81634 17.8332 10.6703V10.6703C16.692 11.4994 16.2145 12.969 16.6504 14.3106V14.3106C17.6251 17.3103 14.1917 19.8048 11.64 17.9509V17.9509C10.4988 17.1217 8.95356 17.1217 7.81238 17.9508V17.9508C5.26064 19.8048 1.82729 17.3103 2.80197 14.3106V14.3106C3.23786 12.969 2.76034 11.4994 1.61917 10.6703V10.6703C-0.932576 8.81634 0.378847 4.78019 3.53298 4.78019V4.78019C4.94355 4.78019 6.19369 3.87191 6.62958 2.53038V2.53038Z"
                        fill="#EB692F"
                      />
                    </svg>
                  ))}
              </span>
              <p className="xl:text-base lg:text-sm md:text-sm">{content}</p>
            </figcaption>
          </figure>
        </Link>
        <aside className="flex-shrink-0 xl:ml-6 lg:ml-5 md:ml-4">
          <button
            type="button"
            className="font-basic nahonsan-btn-3d-red text-white xl:p-2 xl:pl-5 xl:pr-5 lg:p-2 lg:pl-4 lg:pr-4 md:p-1.5 md:pl-3 md:pr-3 rounded-radius-md xl:text-size-sm lg:text-sm md:text-xs whitespace-nowrap"
            onClick={handleDelete}
          >
            {loading ? '삭제 중...' : '삭제하기'}
          </button>
        </aside>
      </div>

      {/* 모바일 레이아웃 (768px 미만) */}
      <div className="md:hidden">
        <Link href={`/products/${productId}`}>
          <figure className="flex gap-3 mb-4">
            <Image
              src={productImage.path}
              alt={'상품 이미지'}
              width={80}
              height={80}
              className="w-[80px] h-[80px] rounded-radius-lg object-cover flex-shrink-0"
            />
            <figcaption className="font-basic flex flex-col gap-1 flex-1">
              <p className="font-bold text-sm">{productName}</p>
              <span className="flex">
                {starArray.length > 0 &&
                  starArray.map((_, i) => (
                    <svg
                      key={i}
                      className="w-[16px] h-[15px]"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.62958 2.53038C7.60426 -0.469378 11.8481 -0.469378 12.8228 2.53038V2.53038C13.2587 3.87191 14.5088 4.78019 15.9194 4.78019V4.78019C19.0735 4.78019 20.385 8.81634 17.8332 10.6703V10.6703C16.692 11.4994 16.2145 12.969 16.6504 14.3106V14.3106C17.6251 17.3103 14.1917 19.8048 11.64 17.9509V17.9509C10.4988 17.1217 8.95356 17.1217 7.81238 17.9508V17.9508C5.26064 19.8048 1.82729 17.3103 2.80197 14.3106V14.3106C3.23786 12.969 2.76034 11.4994 1.61917 10.6703V10.6703C-0.932576 8.81634 0.378847 4.78019 3.53298 4.78019V4.78019C4.94355 4.78019 6.19369 3.87191 6.62958 2.53038V2.53038Z"
                        fill="#EB692F"
                      />
                    </svg>
                  ))}
              </span>
              <p className="text-sm line-clamp-2">{content}</p>
            </figcaption>
          </figure>
        </Link>

        <div className="text-center border-t-2 border-button-color-opaque-25 pt-3">
          <button
            type="button"
            className="font-basic nahonsan-btn-3d-red text-white px-4 py-2 rounded-radius-md text-xs"
            onClick={handleDelete}
          >
            {loading ? '삭제 중...' : '삭제하기'}
          </button>
        </div>
      </div>
    </li>
  );
}
export default memo(ReviewInfo);
