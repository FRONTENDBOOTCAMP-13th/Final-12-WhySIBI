import Image from 'next/image';
import ShoppingForm from './Shopping_form';
import { ShoppingDetailType } from '@/types/shopping_detail';
import { Product_Detail } from './fetch/Product_detail';

export default async function ShoppingDetail({
  stars,
  id,
  token,
}: ShoppingDetailType) {
  const item = await Product_Detail(id, token);
  const reviewCount = item.replies?.length || 0;
  // 리뷰들의 별점을 받아와서 배열에 저장함
  const repliesStars = [];
  for (let i = 0; i < item.replies.length; i++) {
    repliesStars.push(item.replies[i].extra.star);
  }

  //별점의 평균 구하기
  let sum = 0;
  for (let i = 0; i < repliesStars.length; i++) {
    sum += repliesStars[i];
  }
  const avg = sum / repliesStars.length;

  return (
    <section className="bg-white flex flex-col md:flex-row lg:gap-8 xl:gap-24 justify-center py-4">
      {/* 상품 사진 영역 */}
      <figure className="bg-white max-w-[600px] max-h-[600px] overflow-hidden flex justify-center items-center rounded-sm shadow-md">
        <Image
          src={item.mainImages[0].path}
          width={590}
          height={590}
          className="object-cover"
          alt={`${item.name} 상품이미지`}
        />
        <figcaption className="sr-only">{item.name}</figcaption>
      </figure>

      <ShoppingForm
        title={item.name}
        originalPrice={item.extra.originalPrice}
        price={item.price}
        star={item.extra.star}
        stars={stars}
        color={item.extra.color}
        size={item.extra.size}
        myBookmarkId={item.myBookmarkId}
        reviewCount={reviewCount}
        avg={avg}
        id={id}
        token={token}
      />
    </section>
  );
}
