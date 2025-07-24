//상품 썸네일 카드 컴포넌트

import LikeBadge from '@/components/product_component/Like_badge';
import RankBadge from '@/components/product_component/rank_badge';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ProductCardProps = {
  id: number;
  name: string; //상품명
  imageUrl: string; //상품이미지
  price: string; //판매가
  discount?: string; //할인율
  rank?: number; //상품순위
  rating: number; //상품평점
  reviewCount: number; //리뷰갯수
  isLiked: boolean; //찜상태
  onClick: () => void;
};

function ProductCard({
  id,
  name,
  imageUrl,
  price,
  discount,
  rank,
  rating,
  reviewCount,
  isLiked,
  onClick,
}: ProductCardProps) {
  return (
    <article className="w-[300px] p-4" onClick={onClick}>
      <Link href={`/products/${id}`}>
        <div className="mx-auto w-fit">
          <div className="relative">
            {/* 상품순위 */}
            {rank && <RankBadge rank={rank} />}

            {/* 찜상태 */}
            <LikeBadge isLiked={isLiked} onClick={onClick} />

            {/* 상품이미지 */}
            <Image
              src={imageUrl}
              alt={name}
              width="200"
              height="200"
              className=" rounded-[var(--radius-lg)]"
            />
          </div>
          {/* 상품명 */}
          <p className="mt-2 flex items-center">{name}</p>

          {/* 할인율, 판매가 */}
          <div className="font-bold text-(length:--font-size-lg) flex items-center">
            {discount && (
              <span className="text-[var(--livealone-flame)]">{discount}</span>
            )}
            <span className="ml-2.5">{price}</span>
          </div>

          {/* 상품평점, 리뷰갯수*/}
          <div className="flex items-center">
            <Image
              src="/image/starIcon.svg"
              alt="평점"
              width={16}
              height={16}
            />
            <span className="font-bold ml-1">{rating}</span>
            <span className="text-gray-500 ml-2.5">리뷰 {reviewCount}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
export default ProductCard;
