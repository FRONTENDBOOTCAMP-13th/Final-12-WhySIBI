import ProductCategories from '@/components/optionArray/optionArray';
import { deleteProductRegistrationList } from '@/data/actions/seller';
import { ProductListProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { memo } from 'react';
interface ProducRegistrationProps extends ProductListProps {
  token: string;
}

function ProductRegistrationInfo({
  _id,
  price,
  name,
  mainImages,
  replies,
  buyQuantity,
  quantity,
  extra,
  content,
  createdAt,
  token,
}: ProducRegistrationProps) {
  const router = useRouter();
  return (
    <li className=" w-full lg:w-4/5 border-2 border-button-color-opaque-25 shadow-shadow-md xl:p-5 lg:p-4  p-2 rounded-radius-lg">
      {/* 데스크톱/태블릿 레이아웃 (768px 이상) */}
      <div className="md:flex md:justify-between xl:mt-6 lg:mt-5 md:mt-4 mt-3 md:items-center hidden">
        <Link href={`/products/${_id}`} className="flex-1">
          <p className="font-basic font-bold pb-3 text-xl">
            {' '}
            {quantity - buyQuantity > 0 ? '판매중' : '품절'}
          </p>
          <figure className="flex xl:gap-6 lg:gap-5 md:gap-4">
            {mainImages && mainImages.length > 0 ? (
              <Image
                src={mainImages[0]?.path || ''}
                // src={''}
                alt={mainImages[0]?.name || '상품 이미지'}
                width={140}
                height={140}
                className="xl:w-[140px] xl:h-[140px] lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] rounded-radius-lg object-cover"
              />
            ) : (
              <div className="xl:w-[140px] xl:h-[140px] lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] rounded-radius-lg bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">이미지 없음</span>
              </div>
            )}
            <figcaption className="font-basic font-bold">
              <p className="xl:text-base lg:text-sm md:text-sm">
                상품명: {name}
              </p>
              <p className="xl:mt-7 lg:mt-6 md:mt-5 text-menu-text xl:text-base lg:text-sm md:text-sm">
                가격: {price.toLocaleString()}원
              </p>
              <p className="xl:text-base lg:text-sm md:text-sm">
                상세정보:{content}
              </p>
              <div className="my-4 grid grid-cols-2 gap-2 xl:text-sm lg:text-xs md:text-xs text-gray-700">
                <p>
                  카테고리:{' '}
                  {extra?.category
                    ?.map(
                      categoryCode =>
                        ProductCategories.find(
                          item => item.code === categoryCode,
                        )?.value,
                    )
                    ?.join(' , ') || '미등록'}
                </p>
                <p>등록일: {createdAt}</p>
                <p>총 수량: {quantity}</p>
                <p>판매 수량: {buyQuantity}</p>
                <p>남은 수량: {quantity - buyQuantity}</p>
                <p>리뷰수: {replies}</p>
              </div>
            </figcaption>
          </figure>
        </Link>

        <div className="font-basic flex flex-col gap-4 xl:pl-6 lg:pl-5 md:pl-4 font-bold text-center border-l-2 border-button-color-opaque-25 flex-shrink-0">
          <Link
            type="button"
            className="nahonsan-btn-3d-sky border-button-color mx-auto rounded-radius-full py-3 px-5"
            href={`/my_page/registration_edit/${_id}`}
          >
            수정하기
          </Link>
          <button
            type="button"
            className="nahonsan-btn-3d-red border-button-color mx-auto rounded-radius-full py-3 px-5 text-white"
            onClick={async () => {
              await deleteProductRegistrationList(token, _id);
              router.refresh();
            }}
          >
            삭제하기
          </button>
        </div>
      </div>

      {/* 모바일 레이아웃 (768px 미만) */}
      <div className="md:hidden">
        <Link href={`/products/${_id}`}>
          <p className="font-basic font-bold pb-3 text-sm">
            {' '}
            {quantity - buyQuantity > 0 ? '판매중' : '품절'}
          </p>
          <figure className="flex gap-3 mb-4">
            {mainImages && mainImages.length > 0 ? (
              <Image
                src={mainImages[0].path}
                alt={mainImages[0].name || '상품 이미지'}
                width={80}
                height={80}
                className="w-[80px] h-[80px] rounded-radius-lg object-cover flex-shrink-0"
              />
            ) : (
              <div className="w-[80px] h-[80px] rounded-radius-lg object-cover flex-shrink-0">
                <span className="text-gray-500 text-sm">이미지 없음</span>
              </div>
            )}
            <figcaption className="font-basic font-bold text-sm flex-1">
              <p>상품명: {name}</p>
              <p className="mt-3 text-menu-text">
                {' '}
                가격: {price.toLocaleString()}원
              </p>
              <p>상세정보:{content}</p>
              <div className="my-4 grid grid-cols-2 gap-2 sm:text-sm text-gray-700">
                <p>카테고리: {extra?.category?.join(', ') || '미등록'}</p>
                <p>등록일: {createdAt}</p>
                <p>총 수량: {quantity}</p>
                <p>판매 수량: {buyQuantity}</p>
                <p>남은 수량: {quantity - buyQuantity}</p>
                <p>리뷰수: {replies}</p>
              </div>
            </figcaption>
          </figure>
        </Link>

        <div className="font-basic flex gap-3 font-bold text-center space-y-2 border-t-2 border-button-color-opaque-25 pt-3">
          <Link
            type="button"
            className="nahonsan-btn-3d-sky border-button-color mx-auto rounded-radius-full py-2 px-3"
            href={'/my_page/registration_edit'}
          >
            수정하기
          </Link>
          <button
            type="button"
            className="nahonsan-btn-3d-red border-button-color mx-auto rounded-radius-full py-2 px-3 text-white"
            onClick={async () => {
              await deleteProductRegistrationList(token, _id);
              router.refresh();
            }}
          >
            삭제하기
          </button>
        </div>
      </div>
    </li>
  );
}
export default memo(ProductRegistrationInfo);
