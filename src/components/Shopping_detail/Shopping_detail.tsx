import Image from 'next/image';
import ShoppingForm from './Shopping_form';
import { getProductInfo } from '@/data/actions/products';
import { ShoppingDetailType } from '@/types/shopping_detail';

//fetch로직
async function Detail_img() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/1`);
  if (!response.ok) {
    <div>오류가 발생했습니다.</div>;
  }
  const detail = await response.json();
  console.log(detail);
}

export default async function ShoppingDetail({
  title,
  originalPrice,
  price,
  imageSrc,
  stars,
}: ShoppingDetailType) {
  // const detailOption = await getProductInfo('1');
  // console.log('api 호출 확인', detailOption);
  Detail_img();

  return (
    <section className="bg-white flex gap-24 justify-center">
      {/* 상품 사진 영역 */}
      <figure className="bg-white min-w-[600px] min-h-[600px] overflow-hidden  flex justify-center items-center rounded-sm shadow-md">
        <Image
          src={imageSrc}
          width={590}
          height={590}
          className="object-cover"
          alt="제품이미지"
        />
      </figure>

      <ShoppingForm
        title={title}
        originalPrice={originalPrice}
        price={price}
        stars={stars}
        // detailOption={detailOption}
      />
    </section>
  );
}
