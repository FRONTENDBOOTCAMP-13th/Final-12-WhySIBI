//배너 카드 컴포넌트

import Image from 'next/image';
import Link from 'next/link';

type BannerCardProps = {
  title?: string; //카드타이틀
  imageUrl: string; //카드이미지
  contentUrl: string; //카드콘텐츠Url
};

function ShoppingBannerCard({ title, imageUrl, contentUrl }: BannerCardProps) {
  return (
    <>
      <div className="relative w-full p-4 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px] overflow-hidden">
        <Link href={contentUrl}>
          <Image
            src={imageUrl}
            alt={title || ''}
            fill
            className="object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> */}
          <div className="absolute text-white bottom-3 sm:bottom-5 md:bottom-6 lg:bottom-8 xl:bottom-10 text-sm sm:text-base md:text-lg lg:text-3xl xl:text-5xl text-left font-bold left-3 sm:left-5 md:left-8 lg:left-12 xl:left-15 whitespace-pre-line">
            {title}
          </div>
        </Link>
      </div>
    </>
  );
}

export default ShoppingBannerCard;
