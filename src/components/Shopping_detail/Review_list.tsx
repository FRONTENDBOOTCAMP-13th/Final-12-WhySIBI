import { ReviewListProps } from '@/types/shopping_detail';
import Image from 'next/image';

export default function ReviewList({
  stars,
  profile,
  author,
  content,
  image,
  createdAt,
  star,
}: ReviewListProps) {
  return (
    <li className="flex gap-16 border-t-1 border-gray-150 py-6">
      <div className="flex gap-6 basis-[230px]">
        <Image
          className="w-10 h-10 rounded-full border-1 border-black "
          src={`${process.env.NEXT_PUBLIC_API_URL}/${profile}`}
          alt="프로필 이미지"
          width={60}
          height={60}
        ></Image>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold">{author}</h4>
          <span className="flex ">{stars[star]}</span>
          <time className="text-gray-550 font-semibold" dateTime={createdAt}>
            {createdAt.split(' ')[0]}
          </time>
        </div>
      </div>
      <p className="flex-1 text-gray-550 font-bold">
        {content}
        {image ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/${image}`}
            alt="리뷰사진"
            className="w-30 h-30 rounded-xl mt-5"
            width={60}
            height={60}
          ></Image>
        ) : (
          ''
        )}
      </p>

      {/* zustand상태관리 해줘야할듯..? 나중에 해야지 */}
      <div className="relative">
        <button className="cursor-pointer flex border-1 h-8 w-28 rounded-2xl items-center justify-center absolute bottom-0 right-0 text-gray-550">
          <svg
            className="w-8 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.94062 23.2859H3.80516C2.65071 23.2859 1.71484 22.365 1.71484 21.229V14.029C1.71484 12.8929 2.65071 11.9719 3.80516 11.9719H6.94062M6.94062 23.2859V11.9719M6.94062 23.2859L18.73 23.2861C19.7723 23.2976 20.664 22.5517 20.8202 21.5375L22.2626 12.2804C22.3547 11.6837 22.1757 11.0773 21.7734 10.6219C21.3708 10.1665 20.7856 9.90792 20.1722 9.91476H14.2567V5.80052C14.2567 4.09635 12.8529 2.71484 11.1212 2.71484L6.94062 11.9719"
              stroke="#999999"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          도움돼요
        </button>
      </div>
    </li>
  );
}
