import Image from 'next/image';
interface ContentImage {
  path: string;
  name: string;
}

interface ProductInfoProps {
  contentImage?: ContentImage[];
  contentText?: string;
}
export default function ProductInfo({
  contentImage,
  contentText,
}: ProductInfoProps) {
  return (
    <section className="py-24 px-5 sm:px-10">
      <h3 className="sr-only">상품정보</h3>
      <Image
        className="my-0 mx-auto"
        src={contentImage?.[0]?.path || `/image/product_detail/detail_img.png`}
        width={800}
        height={600}
        alt="상품 상세 이미지 준비중 입니다."
      ></Image>
      <p>{contentText}</p>
    </section>
  );
}
