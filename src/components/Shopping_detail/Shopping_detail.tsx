import Image from 'next/image';
import ShoppingForm from './Shopping_form';
// import { getProductInfo } from '@/data/actions/products';
import { ShoppingDetailType } from '@/types/shopping_detail';

//fetch로직
export async function Product_Detail() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/1`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': 'febc13-final12-emjf',
      },
    },
  );
  if (!response.ok) {
    <div>오류가 발생했습니다.</div>;
  }
  const detail = await response.json();
  console.log('데이터 확인', detail.item);
  return detail.item;
}

export default async function ShoppingDetail({ stars }: ShoppingDetailType) {
  // const detailOption = await getProductInfo('1');
  // console.log('api 호출 확인', detailOption);
  const item = await Product_Detail();
  console.log('메인이미지라고?', item.mainImages[0].path);

  return (
    <section className="bg-white flex gap-24 justify-center">
      {/* 상품 사진 영역 */}
      <figure className="bg-white min-w-[600px] min-h-[600px] overflow-hidden  flex justify-center items-center rounded-sm shadow-md">
        {/* 이미지가 왜 깨지는거지.. */}
        <Image
          src={`${item.mainImages[0].path}`}
          width={590}
          height={590}
          className="object-cover"
          alt="제품이미지"
        />
      </figure>

      <ShoppingForm
        title={item.name}
        originalPrice={item.extra.originalPrice}
        price={item.price}
        star={item.extra.star}
        stars={stars}
        color={item.extra.color}
        size={item.extra.size}
      />
    </section>
  );
}
