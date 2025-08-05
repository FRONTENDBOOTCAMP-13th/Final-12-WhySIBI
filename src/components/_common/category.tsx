import useMenuStore from '@/zustand/menuStore';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
export default function Categroy() {
  const { handleMenuClick, mainCategoryId, subCategoryId } = useMenuStore();

  return (
    <>
      <section className="categroy block w-full bg-white pt-5">
        {/* 모바일: 스와이퍼 */}
        <div className="md:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={3}
            centeredSlides={false}
            breakpoints={{
              480: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
            }}
            grabCursor={true}
          >
            <SwiperSlide>
              <figure className="text-center">
                <Link href="/shopping/category/PC0301">
                  <Image
                    src={'/image/category_icon/summer_product.svg'}
                    alt=""
                    width={80}
                    height={80}
                    className="w-16 sm:w-20 h-auto mx-auto hover:animate-wobble-hor-bottom"
                  />
                  <figcaption className="mt-3 text-xs sm:text-sm font-logo font-bold text-button-color">
                    여름나기 용품
                  </figcaption>
                </Link>
              </figure>
            </SwiperSlide>

            <SwiperSlide>
              <figure className="text-center">
                <Link
                  href="/shopping/category/PC0302"
                  onClick={() =>
                    handleMenuClick(
                      'shopping',
                      mainCategoryId,
                      subCategoryId ?? undefined,
                    )
                  }
                >
                  <Image
                    src={'/image/category_icon/furniture.svg'}
                    alt=""
                    width={80}
                    height={80}
                    className="w-16 sm:w-20 h-auto mx-auto hover:animate-wobble-hor-bottom"
                  />
                  <figcaption className="mt-3 text-xs sm:text-sm font-logo font-bold text-button-color">
                    가구
                  </figcaption>
                </Link>
              </figure>
            </SwiperSlide>

            <SwiperSlide>
              <figure className="text-center">
                <Link href="/shopping/category/PC0303">
                  <Image
                    src={'/image/category_icon/household_item.svg'}
                    alt=""
                    width={80}
                    height={80}
                    className="w-16 sm:w-20 h-auto mx-auto hover:animate-wobble-hor-bottom"
                  />
                  <figcaption className="mt-3 text-xs sm:text-sm font-logo font-bold text-button-color">
                    생활 용품
                  </figcaption>
                </Link>
              </figure>
            </SwiperSlide>

            <SwiperSlide>
              <figure className="text-center">
                <Link href="/shopping/category/PC0304">
                  <Image
                    src={'/image/category_icon/decoration_product.svg'}
                    alt=""
                    width={80}
                    height={80}
                    className="w-16 sm:w-20 h-auto mx-auto hover:animate-wobble-hor-bottom"
                  />
                  <figcaption className="mt-3 text-xs sm:text-sm font-logo font-bold text-button-color">
                    소품 &middot; 데코
                  </figcaption>
                </Link>
              </figure>
            </SwiperSlide>

            <SwiperSlide>
              <figure className="text-center">
                <Link href="/shopping/category/PC0305">
                  <Image
                    src={'/image/category_icon/digital_product.svg'}
                    alt=""
                    width={80}
                    height={80}
                    className="w-16 sm:w-20 h-auto mx-auto hover:animate-wobble-hor-bottom"
                  />
                  <figcaption className="mt-3 text-xs sm:text-sm font-logo font-bold text-button-color">
                    가전 &middot; 디지털
                  </figcaption>
                </Link>
              </figure>
            </SwiperSlide>

            <SwiperSlide>
              <figure className="text-center">
                <Link href="/shopping/category/PC0306">
                  <Image
                    src={'/image/category_icon/diy_product.svg'}
                    alt=""
                    width={80}
                    height={80}
                    className="w-16 sm:w-20 h-auto mx-auto hover:animate-wobble-hor-bottom"
                  />
                  <figcaption className="mt-3 text-xs sm:text-sm font-logo font-bold text-button-color">
                    공구 &middot; DIY
                  </figcaption>
                </Link>
              </figure>
            </SwiperSlide>

            <SwiperSlide>
              <figure className="text-center">
                <Link href="/shopping/category/PC0307">
                  <Image
                    src={'/image/category_icon/acceptance_product.svg'}
                    alt=""
                    width={80}
                    height={80}
                    className="w-16 sm:w-20 h-auto mx-auto hover:animate-wobble-hor-bottom"
                  />
                  <figcaption className="mt-3 text-xs sm:text-sm font-logo font-bold text-button-color">
                    수납 &middot; 정리
                  </figcaption>
                </Link>
              </figure>
            </SwiperSlide>
            <div className="swiper-scrollbar"></div>
          </Swiper>
        </div>

        {/* 데스크톱: 기존 레이아웃 */}
        <ul className="hidden md:flex xl:text-2xl lg:text-xl md:text-lg justify-center xl:gap-20 lg:gap-14 md:gap-10 text-size-md font-logo font-bold text-button-color text-center">
          <li>
            <figure>
              <Link href="/shopping/category/PC0301">
                <Image
                  src={'/image/category_icon/summer_product.svg'}
                  alt=""
                  width={100}
                  height={100}
                  className="block hover:animate-wobble-hor-bottom"
                />
                <figcaption className="mt-5">여름나기 용품</figcaption>
              </Link>
            </figure>
          </li>
          <li>
            <figure>
              <Link
                href="/shopping/category/PC0302"
                onClick={() =>
                  handleMenuClick(
                    'shopping',
                    mainCategoryId,
                    subCategoryId ?? undefined,
                  )
                }
              >
                <Image
                  src={'/image/category_icon/furniture.svg'}
                  alt=""
                  width={100}
                  height={100}
                  className="block hover:animate-wobble-hor-bottom"
                />
                <figcaption className="mt-5">가구</figcaption>
              </Link>
            </figure>
          </li>
          <li>
            <figure>
              <Link href="/shopping/category/PC0303">
                <Image
                  src={'/image/category_icon/household_item.svg'}
                  alt=""
                  width={100}
                  height={100}
                  className="block hover:animate-wobble-hor-bottom"
                />
                <figcaption className="mt-5">생활 용품</figcaption>
              </Link>
            </figure>
          </li>
          <li>
            <figure>
              <Link href="/shopping/category/PC0304">
                <Image
                  src={'/image/category_icon/decoration_product.svg'}
                  alt=""
                  width={100}
                  height={100}
                  className="block hover:animate-wobble-hor-bottom"
                />
                <figcaption className="mt-5">소품 &middot; 데코</figcaption>
              </Link>
            </figure>
          </li>
          <li>
            <figure>
              <Link href="/shopping/category/PC0305">
                <Image
                  src={'/image/category_icon/digital_product.svg'}
                  alt=""
                  width={100}
                  height={100}
                  className="block hover:animate-wobble-hor-bottom"
                />
                <figcaption className="mt-5">가전 &middot; 디지털</figcaption>
              </Link>
            </figure>
          </li>
          <li>
            <figure>
              <Link href="/shopping/category/PC0306">
                <Image
                  src={'/image/category_icon/diy_product.svg'}
                  alt=""
                  width={100}
                  height={100}
                  className="block hover:animate-wobble-hor-bottom"
                />
                <figcaption className="mt-5">공구 &middot; DIY</figcaption>
              </Link>
            </figure>
          </li>
          <li>
            <figure>
              <Link href="/shopping/category/PC0307">
                <Image
                  src={'/image/category_icon/acceptance_product.svg'}
                  alt=""
                  width={100}
                  height={100}
                  className="block hover:animate-wobble-hor-bottom"
                />
                <figcaption className="mt-5">수납 &middot; 정리</figcaption>
              </Link>
            </figure>
          </li>
        </ul>
      </section>

      {/* 모바일 버전 Swiper */}
      <section
        className="categroy 
  category-swiper  block w-full bg-white"
      >
        <div className="block md:hidden px-4 text-2xl justify-center  py-5 font-logo font-bold text-button-color text-center">
          <Swiper
            spaceBetween={2}
            slidesPerView={2.5}
            scrollbar={{ draggable: true }}
            grabCursor={true}
          >
            <SwiperSlide>
              <li>
                <figure>
                  <Link href="/shopping/category/PC0301">
                    <Image
                      src={'/image/category_icon/summer_product.svg'}
                      alt=""
                      width={80}
                      height={80}
                      className="mx-auto block hover:animate-wobble-hor-bottom"
                    />
                    <figcaption className="mt-5">여름나기 용품</figcaption>
                  </Link>
                </figure>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <figure>
                  <Link
                    href="/shopping/category/PC0302"
                    onClick={() =>
                      handleMenuClick(
                        'shopping',
                        mainCategoryId,
                        subCategoryId ?? undefined,
                      )
                    }
                  >
                    <Image
                      src={'/image/category_icon/furniture.svg'}
                      alt=""
                      width={80}
                      height={80}
                      className="mx-auto block hover:animate-wobble-hor-bottom"
                    />
                    <figcaption className="mt-5">가구</figcaption>
                  </Link>
                </figure>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <figure>
                  <Link href="/shopping/category/PC0303">
                    <Image
                      src={'/image/category_icon/household_item.svg'}
                      alt=""
                      width={80}
                      height={80}
                      className="mx-auto block hover:animate-wobble-hor-bottom"
                    />
                    <figcaption className="mt-5">생활 용품</figcaption>
                  </Link>
                </figure>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <figure>
                  <Link href="/shopping/category/PC0304">
                    <Image
                      src={'/image/category_icon/decoration_product.svg'}
                      alt=""
                      width={80}
                      height={80}
                      className="mx-auto block hover:animate-wobble-hor-bottom"
                    />
                    <figcaption className="mt-5">소품 &middot; 데코</figcaption>
                  </Link>
                </figure>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <figure>
                  <Link href="/shopping/category/PC0305">
                    <Image
                      src={'/image/category_icon/digital_product.svg'}
                      alt=""
                      width={80}
                      height={80}
                      className="mx-auto block hover:animate-wobble-hor-bottom"
                    />
                    <figcaption className="mt-5">
                      가전 &middot; 디지털
                    </figcaption>
                  </Link>
                </figure>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <figure>
                  <Link href="/shopping/category/PC0306">
                    <Image
                      src={'/image/category_icon/diy_product.svg'}
                      alt=""
                      width={80}
                      height={80}
                      className="mx-auto block hover:animate-wobble-hor-bottom"
                    />
                    <figcaption className="mt-5">공구 &middot; DIY</figcaption>
                  </Link>
                </figure>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <figure>
                  <Link href="/shopping/category/PC0307">
                    <Image
                      src={'/image/category_icon/acceptance_product.svg'}
                      alt=""
                      width={80}
                      height={80}
                      className="mx-auto block hover:animate-wobble-hor-bottom"
                    />
                    <figcaption className="mt-5">수납 &middot; 정리</figcaption>
                  </Link>
                </figure>
              </li>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
