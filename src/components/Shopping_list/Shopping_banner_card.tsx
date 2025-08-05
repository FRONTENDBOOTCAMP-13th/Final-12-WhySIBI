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
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
        <Link href={contentUrl}>
          <Image
            src={imageUrl}
            alt={title || ''}
            fill
            className="object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> */}
          <div className="absolute  text-white bottom-10 text-xl sm:text-2xl md:text-4xl lg:text-5xl text-left font-bold left-15 whitespace-pre-line">
            {title}
          </div>
        </Link>
      </div>
    </>
  );
}

export default ShoppingBannerCard;
