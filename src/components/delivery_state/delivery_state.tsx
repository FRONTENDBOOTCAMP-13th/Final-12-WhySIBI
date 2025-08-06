'use client';
import { OrderItem } from '@/types/order';
import useUserStore from '@/zustand/useUserStore';
import Image from 'next/image';

interface DeliveryStateClientProps {
  productID: string;
  productData: OrderItem;
}
export default function DeliveryState({
  productID,
  productData,
}: DeliveryStateClientProps) {
  const { user } = useUserStore();
  let deliveryState = '';
  if (productData.state === 'OS010') {
    deliveryState = '주문하신 상품은 3일뒤에 도착 예정입니다';
  } else if (productData.state === 'OS020') {
    deliveryState = '주문하신 상품은 이틀뒤에 도착 예정입니다';
  } else if (productData.state === 'OS030') {
    deliveryState = '주문하신 상품은 내일 도착 예정입니다';
  } else if (productData.state === 'OS035') {
    deliveryState = '주무하신 상품이 도착했습니다';
  }
  return (
    <>
      <h2 className="font-logo text-5xl ml-9 my-9">배송조회</h2>
      <section className="w-full lg:w-3/4 mx-auto p-3 sm:p-5 md:p-7 bg-[#F8F8F8] text-center">
        <p className="font-logo text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 px-2">
          {deliveryState}
        </p>
        <ul className="grid grid-cols-4 items-center border-t-[1px] border-button-color-opaque-25 gap-1 sm:gap-2 md:gap-0">
          <li className="border-r-[1px] border-button-color-opaque-25 my-3 sm:my-4 md:my-6 px-1 sm:px-2">
            <figure className="text-center w-full">
              <Image
                src={
                  productData.state === 'OS010'
                    ? '/image/delivery_icon/preparing_product_active.svg'
                    : '/image/delivery_icon/preparing_product.svg'
                }
                alt="상품 준비중"
                width={100}
                height={100}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 mx-auto"
              />
              <figcaption className="mt-1.5 sm:mt-2 md:mt-3 lg:mt-3.5 text-xs sm:text-sm md:text-base lg:text-lg font-bold font-basic leading-tight">
                상품 준비중
              </figcaption>
            </figure>
          </li>
          <li className="border-r-[1px] border-button-color-opaque-25 my-3 sm:my-4 md:my-6 px-1 sm:px-2">
            <figure className="text-center w-full">
              <Image
                src={
                  productData.state === 'OS020'
                    ? '/image/delivery_icon/preparing_delivery_active.svg'
                    : '/image/delivery_icon/preparing_delivery.svg'
                }
                alt="배송 준비중"
                width={100}
                height={100}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 mx-auto"
              />
              <figcaption className="mt-1.5 sm:mt-2 md:mt-3 lg:mt-3.5 text-xs sm:text-sm md:text-base lg:text-lg font-bold font-basic leading-tight">
                배송 준비중
              </figcaption>
            </figure>
          </li>
          <li className="border-r-[1px] border-button-color-opaque-25 my-3 sm:my-4 md:my-6 px-1 sm:px-2">
            <figure className="text-center w-full">
              <Image
                src={
                  productData.state === 'OS030'
                    ? '/image/delivery_icon/delivery_active.svg'
                    : '/image/delivery_icon/delivery.svg'
                }
                alt="배송중"
                width={100}
                height={100}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 mx-auto"
              />
              <figcaption className="mt-1.5 sm:mt-2 md:mt-3 lg:mt-3.5 text-xs sm:text-sm md:text-base lg:text-lg font-bold font-basic leading-tight">
                배송중
              </figcaption>
            </figure>
          </li>
          <li className="my-3 sm:my-4 md:my-6 px-1 sm:px-2">
            <figure className="text-center w-full">
              <Image
                src={
                  productData.state === 'OS035'
                    ? '/image/delivery_icon/delivery_completed_active.svg'
                    : '/image/delivery_icon/delivery_completed.svg'
                }
                alt="배송완료"
                width={100}
                height={100}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 mx-auto"
              />
              <figcaption className="mt-1.5 sm:mt-2 md:mt-3 lg:mt-3.5 text-xs sm:text-sm md:text-base lg:text-lg font-bold font-basic leading-tight">
                배송완료
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>

      <section className="w-full lg:w-3/4 mx-auto p-7 grid grid-cols-2 bg-[#F8F8F8] mt-6">
        <div className="flex flex-col md:flex-row border-r-[1px] border-button-color-opaque-25">
          {productData.products?.[0].image ? (
            <Image
              src={productData.products?.[0].image.path}
              alt={`${productID}상품 이미지`}
              width={150}
              height={150}
              className="xl:w-[140px] xl:h-[140px] lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] rounded-radius-lg object-cover"
            />
          ) : (
            <Image src={``} alt="이미지 오류" width={150} height={150} />
          )}
          <div className="ml-2 sm:ml-3 md:ml-4 text-xs sm:text-sm md:text-base lg:text-lg font-basic">
            <p className="leading-relaxed break-words">
              <span className="font-semibold">상품명:</span>
              <br className="sm:hidden" />
              <span className="sm:ml-1">{productData.products?.[0].name}</span>
            </p>
            <p className="mt-1.5 sm:mt-2 md:mt-2.5 leading-relaxed">
              <span className="font-semibold">배송업체:</span>
              <br className="sm:hidden" />
              <span className="sm:ml-1">롯데운송</span>
            </p>
            <p className="mt-1.5 sm:mt-2 md:mt-2.5 leading-relaxed">
              <span className="font-semibold">송장번호:</span>
            </p>
          </div>
        </div>
        <div className="ml-2 sm:ml-3 md:ml-4 text-xs sm:text-sm md:text-base lg:text-lg font-basic">
          <p className="leading-relaxed break-words">
            <span className="font-semibold">받는사람:</span>
            <br className="sm:hidden" />
            <span className="sm:ml-1">{user?.name}</span>
          </p>
          <p className="mt-1.5 sm:mt-2 md:mt-2.5 leading-relaxed break-words">
            <span className="font-semibold">배송지:</span>
            <br className="sm:hidden" />
            <span className="sm:ml-1 block sm:inline">
              {user?.extra.addressBook[0].value}
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
