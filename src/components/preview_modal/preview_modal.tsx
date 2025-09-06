import Image from 'next/image';
import LikeButton from '../Shopping_detail/Like_button';
import ShoppingFormTag from '../Shopping_detail/Shopping_form_tag';
import Link from 'next/link';

export default function RegistrationPreview({
  onClose,
  productData,
}: {
  onClose: () => void;
  productData: {
    name: string;
    sale: number;
    price: number;
    shippingFees: string;
    content: string;
    quantity: string;
    keyword: string[];
    extra: {
      category: string[];
      color: string[];
      size: string[];
      tag: string;
      originalPrice: number;
      contentImage: Array<{
        path: string;
        name: string;
      }>;
    };
    mainImages: Array<{
      path: string;
      name: string;
    }>;
  } | null;
}) {
  return (
    <div
      id="modalContainer"
      className="fixed inset-0 bg-[rgba(0,0,0,0.3)] bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        id="modalContent"
        className="bg-white p-6 rounded-lg shadow-lg max-w-7xl w-full max-h-[90vh] overflow-y-auto mx-4"
        onClick={e => e.stopPropagation}
      >
        <div className="mt-5 flex justify-between">
          <strong>상품 등록 상태 미리보기</strong>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl font-bold"
            aria-label="닫기"
          >
            X
          </button>
        </div>
        <div>
          <section className="bg-white w-full my-5 sm:my-10 flex flex-col md:flex-row lg:gap-8 xl:gap-24 justify-center py-4">
            <figure className="bg-white w-full  sm:max-w-[600px] sm:max-h-[600px] overflow-hidden flex justify-center items-center rounded-sm shadow-md">
              <Image
                src={productData?.mainImages[0]?.path || ''}
                width={590}
                height={590}
                className="object-cover "
                alt={`${productData?.mainImages[0]?.name} 상품이미지`}
              />
              <figcaption className="sr-only">{productData?.name}</figcaption>
            </figure>

            <section className="w-full mt-6 sm:mt-0 sm:w-[85%] md:min-w-[300px] lg:min-w-[450px] xl:min-w-[500px] flex flex-col items-start md:items-center relative px-2 sm:px-4 md:px-3">
              <div className="w-full">
                <header className="flex flex-row sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 md:gap-8 lg:gap-10 ">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-2 sm:mt-3 md:mt-4 flex-1 pr-2 leading-tight">
                    {productData?.name}
                  </h2>
                  <Image
                    src={'/image/community_icon/heartIcon.svg'}
                    alt="찜하기"
                    width={20}
                    height={20}
                  />
                </header>

                {/* <p className="flex gap-2 items-center mt-3 sm:mt-4">
                  {avg ? (
                    <>
                      <span className="flex gap-[1px]">
                        {stars[5 - Math.round(avg)]}
                      </span>
                      <span
                        className="font-bold text-lg sm:text-xl"
                        aria-label="5점 만점에 4점"
                      >
                        {avg.toFixed(1)}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="flex gap-[1px]">
                        <svg
                          width="16"
                          height="15"
                          className="sm:w-[18px] sm:h-[17px] md:w-[20px] md:h-[19px]"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.85419 2.53038C7.82887 -0.469378 12.0727 -0.469378 13.0474 2.53038C13.4833 3.87191 14.7334 4.78019 16.144 4.78019C19.2981 4.78019 20.6096 8.81634 18.0578 10.6703C16.9166 11.4994 16.4391 12.969 16.875 14.3106C17.8497 17.3103 14.4164 19.8048 11.8646 17.9508C10.7234 17.1217 9.17817 17.1217 8.03699 17.9508C5.48525 19.8048 2.0519 17.3103 3.02658 14.3106C3.46247 12.969 2.98495 11.4994 1.84378 10.6703C-0.707966 8.81634 0.603456 4.78019 3.75759 4.78019C5.16815 4.78019 6.4183 3.87191 6.85419 2.53038Z"
                            fill="#D9D9D9"
                          />
                        </svg>
                      </span>
                      <span
                        className="font-bold text-lg sm:text-xl"
                        aria-label="아직 점수가 없습니다."
                      >
                        0
                      </span>
                    </>
                  )}
                  <span className="text-[#777777] text-sm sm:text-base">
                    리뷰 {reviewCount}
                  </span>
                </p> */}

                {/* 가격정보 */}
                <section className="mt-4 sm:mt-5">
                  <h3 className="sr-only">가격정보</h3>
                  <p className="pt-1">
                    {/* 할인률이 0%이상일때만 */}
                    {productData && productData.sale > 0 && (
                      <>
                        <strong
                          className="text-flame-250 text-xl sm:text-2xl"
                          aria-label="할인율"
                        >
                          {productData?.sale}%
                        </strong>
                        <s
                          className="text-[#a7a7a7] text-lg sm:text-xl ml-2 sm:ml-3"
                          aria-label="정가"
                        >
                          {productData?.extra.originalPrice.toLocaleString()}원
                        </s>
                      </>
                    )}
                  </p>
                  <p
                    className="text-2xl sm:text-3xl font-black pt-2"
                    aria-label="할인가"
                  >
                    {productData?.price.toLocaleString()}
                    <span className="text-lg sm:text-xl font-bold ml-2">
                      원
                    </span>
                  </p>
                  <dl className="text-[#777777] font-bold w-full max-w-[200px] flex justify-between pt-4 sm:pt-5 md:pt-6 pb-3 text-sm sm:text-base">
                    <dt>배송</dt>
                    <dd>무료배송</dd>
                  </dl>
                </section>

                {/* 상품 옵션 선택 영역 */}
                <div className="mt-4 sm:mt-5 md:mt-6 w-full">
                  <ShoppingFormTag
                    color={productData?.extra.color ?? []}
                    size={productData?.extra.size ?? []}
                    price={productData?.price ?? 0}
                    id={''}
                  />
                </div>
              </div>
            </section>
          </section>

          <nav className="bg-[#d9d9d9] text-size-md md:text-xl font-bold flex pl-6  xl:gap-8 xl:pl-24">
            <Link
              href={'?tab=info'}
              scroll={false} // 이거 쓰면 링크 클릭할때마다 맨위로 안감
              className={`p-4 text-flame-250 border-b-3 border-flame-250`}
            >
              상품정보
            </Link>
            <Link href={'?tab=review'} scroll={false} className="p-4">
              리뷰
            </Link>
            <Link href={'?tab=inquiry'} scroll={false} className={`p-4 `}>
              판매자문의
            </Link>
          </nav>
          <section className="py-24 px-5 sm:px-10">
            <h3 className="sr-only">상품정보</h3>
            <Image
              className="my-0 mx-auto"
              src={
                productData?.extra.contentImage[0].path ||
                `/image/product_detail/detail_img.png`
              }
              width={800}
              height={600}
              alt="상품 상세 이미지 준비중 입니다."
            ></Image>
            <p>{productData?.content}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
