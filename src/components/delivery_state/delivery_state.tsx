'use client';
import { Product } from '@/types';
import Image from 'next/image';
const API_URL = process.env.NEXT_PUBLIC_API_URL;
interface DeliveryStateClientProps {
  productID: string;
  productData: Product;
}
export default function DeliveryState({
  productID,
  productData,
}: DeliveryStateClientProps) {
  
  let userName = '';
  let userAddress = '';
  const userStorageString = sessionStorage.getItem('user');

  if (userStorageString) {
    try {
      const userStorage = JSON.parse(userStorageString);
      if (userStorage?.state?.user?.token?.accessToken) {
        userName = userStorage.state.user.name;
        userAddress = userStorage.state.user.extra.addressBook[0].value;
      }
    } catch (error) {
      console.error('JSON 파싱 오류:', error);
    }
  }

  return (
    <>
      <h2 className="font-logo text-5xl ml-9 my-9">배송조희</h2>
      <section className="w-3/4 mx-auto p-7 bg-[#F8F8F8] text-center">
        <p className="font-logo text-5xl pt-14">
          주문하신 상품은 내일 도착 예정입니다
        </p>
        <ul className="grid grid-cols-4 items-center border-t-[1px] border-button-color-opaque-25">
          <li className="border-r-[1px]  border-button-color-opaque-25  my-6">
            <figure className="text-center w-full">
              <Image
                src={'/image/delivery_icon/preparing_product.svg'}
                alt="상품 준비중"
                width={100}
                height={100}
                className="max-w-28 max-h-28 mx-auto"
              />
              <figcaption className="mt-3.5 text-lg font-bold font-basic">
                상품 준비중
              </figcaption>
            </figure>
          </li>
          <li className="border-r-[1px] border-button-color-opaque-25   my-6">
            <figure>
              <Image
                src={'/image/delivery_icon/preparing_delivery.svg'}
                alt="배송 준비중"
                width={100}
                height={100}
                className="max-w-28 max-h-28 mx-auto"
              />
              <figcaption className="mt-3.5 text-lg font-bold font-basic">
                배송 준비중
              </figcaption>
            </figure>
          </li>
          <li className="border-r-[1px] border-button-color-opaque-25  my-6">
            <figure>
              <Image
                src={'/image/delivery_icon/delivery.svg'}
                alt="배송중"
                width={100}
                height={100}
                className="max-w-28 max-h-28 mx-auto"
              />
              <figcaption className="mt-3.5 text-lg font-bold font-basic">
                배송중
              </figcaption>
            </figure>
          </li>
          <li className=" my-6">
            <figure>
              <Image
                src={'/image/delivery_icon/delivery_completed.svg'}
                alt="배송완료"
                width={100}
                height={100}
                className="max-w-28 max-h-28 mx-auto"
              />
              <figcaption className="mt-3.5 text-lg font-bold font-basic">
                배송완료
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>

      <section className="w-3/4 mx-auto p-7 grid grid-cols-2 bg-[#F8F8F8] mt-6">
        <div className="flex border-r-[1px] border-button-color-opaque-25">
          {productData.mainImages[0] && (
            <Image
              src={`${API_URL}/${productData.mainImages[0].path}`}
              alt={`${productID}상품 이미지`}
              width={200}
              height={200}
            />
          )}
          <div className="ml-4 text-lg font-basic">
            <p>상품명:{productData?.name}</p>
            <p className="mt-2.5">배송업체:롯데운송</p>
            <p className="mt-2.5">송장번호:</p>
          </div>
        </div>
        <div className="ml-4 text-lg font-basic">
          <p>받는사람:{userName}</p>
          <p className="mt-2.5">배송지:{userAddress}</p>
        </div>
      </section>
    </>
  );
}
