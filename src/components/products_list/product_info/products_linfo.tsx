import { ProductListProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ProductInfo({
  _id,
  price,
  name,
  mainImages,
}: ProductListProps) {
  // // 상품 상세 정보 불러오는 부분
  // const [productInfo, setProductInfo] = useState<Product | null>(null);
  // // const productPath = usePathname();
  // useEffect(() => {
  //   const productInfoData = async () => {
  //     try {
  //       const res = await getProductInfo(`4`);
  //       if (res) {
  //         console.log(res.item);
  //         setProductInfo(res.item);
  //       }
  //     } catch (error) {
  //       console.error('상품 정보 로딩 실패:', error);
  //     }
  //   };

  //   productInfoData();
  // }, []);

  // console.log(productInfo?.mainImages?.[0].path);
  console.log(mainImages);
  return (
    <li className="w-4/5 border-2 border-button-color-opaque-25 shadow-shadow-md p-5 rounded-radius-lg">
      <p className="font-logo text-2xl ml-5">배송중</p>
      <div className="flex justify-between mt-6 items-center">
        <Link href={`/products/${_id}`}>
          {' '}
          {/* 상품 상세 페이지 링크 */}
          <figure className="flex gap-6">
            <Image
              src={`${API_URL}${mainImages[0]?.path}`} // 첫 번째 이미지 path 사용
              alt={name || '상품 이미지'}
              width={140}
              height={140}
              className="rounded-radius-lg"
              unoptimized
            />

            <figcaption className="font-basic font-bold">
              <p>상품명: {name}</p>
              <p className="mt-7 text-menu-text">
                가격: {price.toLocaleString()}원
              </p>
            </figcaption>
          </figure>
        </Link>
        <div className="font-basic pl-6 font-bold text-center border-l-2 border-button-color-opaque-25">
          <Link
            href={`/delivery/${_id}`}
            className="block rounded-radius-full px-16 py-3 border-2 text-button-color bg-vanilla-300 mb-5"
          >
            배송 조회
          </Link>
          <Link
            href={`/order/cancel/${_id}`}
            className="block rounded-radius-full px-16 py-3 border-2 border-columbia-blue-300 text-button-color mb-5"
          >
            주문 &middot; 배송 취소
          </Link>
          <Link
            href={`/review/write/${_id}`}
            className="block rounded-radius-full px-16 py-3 border-2 text-button-color bg-columbia-blue-300"
          >
            리뷰 작성하기
          </Link>
        </div>
      </div>
    </li>
  );
}
