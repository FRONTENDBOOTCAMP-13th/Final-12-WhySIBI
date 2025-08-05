import { ReviewListProps } from '@/types/shopping_detail';
import Image from 'next/image';
import RecommendButton from './Recommend_button';

export default function ReviewList({
  id,
  stars,
  profile,
  author,
  content,
  image,
  createdAt,
  star,
  rating,
}: ReviewListProps) {
  return (
    <li className="flex md:gap-16 border-t-1 border-gray-150 py-3 md:py-6 px-4 lg:px-0">
      <div className="flex gap-6 basis-[230px]">
        <Image
          className="w-10 h-10 rounded-full border-1 border-black "
          src={profile}
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
            src={image}
            alt="리뷰사진"
            className="w-30 h-30 rounded-xl mt-5"
            width={60}
            height={60}
          ></Image>
        ) : (
          ''
        )}
      </p>

      <div className="relative">
        <RecommendButton rating={rating} id={id} />
      </div>
    </li>
  );
}
