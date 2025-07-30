//북마크 카드 컴포넌트
import { BookMarkInfoProps } from '@/types/bookmark';
import Image from 'next/image';
import Link from 'next/link';
// const API_URL = process.env.NEXT_PUBLIC_API_URL;
function BookMarkCard({ title, _id, type, productImage }: BookMarkInfoProps) {
  return (
    <div className="relative w-full max-w-[280px] mx-auto group">
      <Link href={`/community/${type}/${_id}`} className="block w-full">
        <div className="relative w-full aspect-square rounded-radius-lg overflow-hidden mb-3">
          <Image
            src={
              productImage
                ? `${productImage}`
                : `/image/theme_image/desk_decor.png`
            }
            // src={`/image/theme_image/desk_decor.png`}
            alt={`${_id}번째 게시물 사진`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 280px, (max-width: 1024px) 250px, 220px"
          />
        </div>

        <div className="px-1">
          <h3 className="text-gray-900 text-sm sm:text-base font-medium leading-tight whitespace-pre-line line-clamp-2">
            {title}
          </h3>
        </div>
      </Link>
    </div>
  );
}

export default BookMarkCard;
