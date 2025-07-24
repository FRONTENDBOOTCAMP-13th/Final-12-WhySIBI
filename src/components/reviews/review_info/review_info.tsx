import { ReviewInfoProps } from '@/types/replies';
import Image from 'next/image';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default function ReviewInfo({
  content,
  productImage,
  star,
  productName,
}: ReviewInfoProps) {
  const starArray = new Array(star).fill(0);
  return (
    <li className="w-4/5 border-2 border-button-color-opaque-25 shadow-shadow-md p-5 rounded-radius-lg">
      <div className="flex justify-between mt-6 items-center">
        <figure className="flex gap-6">
          <Image
            src={`${API_URL}/${productImage.path}`}
            alt={'상품 이미지'}
            width={140}
            height={140}
            className="rounded-radius-lg"
            unoptimized
          />

          <figcaption className="font-basic flex flex-col gap-2">
            <p className="font-bold">{productName} </p>
            <span className="flex">
              {starArray.length > 0 &&
                starArray.map((_, i) => (
                  <svg
                    key={i}
                    width="20"
                    height="19"
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
            <p>{content}</p>
          </figcaption>
        </figure>
      </div>
    </li>
  );
}
