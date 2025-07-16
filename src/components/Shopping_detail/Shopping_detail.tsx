import Image from 'next/image';
import ShoppingCard from './Shopping_card';

interface ShoppingDetailType {
  title: string;
  originalPrice: number;
  price: number;
  imageSrc: string;
}
function ShoppingDetail({
  title,
  originalPrice,
  price,
  imageSrc,
}: ShoppingDetailType) {
  return (
    <main className="bg-white flex gap-24 justify-center min-w-[1280]">
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

      <ShoppingCard title={title} originalPrice={originalPrice} price={price} />
    </main>
  );
}

export default ShoppingDetail;
