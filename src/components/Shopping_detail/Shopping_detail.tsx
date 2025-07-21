import Image from 'next/image';
import ShoppingForm from './Shopping_form';
import { getProductInfo } from '@/data/actions/products';

interface ShoppingDetailType {
  title: string;
  originalPrice: number;
  price: number;
  imageSrc: string;
}

export default async function ShoppingDetail({
  title,
  originalPrice,
  price,
  imageSrc,
}: ShoppingDetailType) {
  const detailOption = await getProductInfo('1');
  console.log('api 호출 확인', detailOption);

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
        detailOption={detailOption}
      />
    </section>
  );
}
