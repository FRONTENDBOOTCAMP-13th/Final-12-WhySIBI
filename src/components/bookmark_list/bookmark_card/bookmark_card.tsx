//북마크 카드 컴포넌트
import Image from 'next/image';
import Link from 'next/link';

type BannerCardProps = {
  title: string; //카드타이틀
  imageUrl: string; //카드이미지
  contentUrl: string; //카드콘텐츠Url
};

function BookMarkCard({ title, imageUrl, contentUrl }: BannerCardProps) {
  return (
    <div className="relative w-full max-w-[280px] mx-auto group hover:scale-105 transition-transform duration-300">
      <Link href={contentUrl} className="block w-full">
        <div className="relative w-full aspect-square rounded-radius-lg overflow-hidden mb-3">
          <Image
            src={imageUrl}
            alt={title}
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
