import useMenuStore from '@/zustand/menuStore';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import CategoryItem from '@/utils/categoryItem';

export default function Categroy() {
  const { handleMenuClick, mainCategoryId, subCategoryId } = useMenuStore();

  return (
    <>
      <section className="categroy category-swiper block w-full bg-white py-10 md:py-15 px-5">
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
        <ul className="hidden md:flex xl:text-2xl lg:text-lg md:text-md justify-center xl:gap-16 lg:gap-14 md:gap-6 gap-4 text-size-md font-logo font-bold text-button-color text-center">
          <li>
          <CategoryItem
            href="/shopping/category/PC0301"
            img="/image/category_icon/summer_product.svg"
            video="/image/category_icon/summer.mp4"
            label="여름나기 용품"
          />
          </li>
          <li>
          <CategoryItem
            href="/shopping/category/PC0301"
            img="/image/category_icon/furniture.svg"
            video="/image/category_icon/furniture.mp4"
            label="가구"
          />
          </li>
          <li>
          <CategoryItem
            href="/shopping/category/PC0301"
            img="/image/category_icon/household_item.svg"
            video="/image/category_icon/household.mp4"
            label="생활 용품"
          />
          </li>
          <li>
          <CategoryItem
            href="/shopping/category/PC0301"
            img="/image/category_icon/decoration_product.svg"
            video="/image/category_icon/decoration.mp4"
            label="소품 · 데코"
          />
          </li>
          <li>
          <CategoryItem
            href="/shopping/category/PC0301"
            img="/image/category_icon/digital_product.svg"
            video="/image/category_icon/digital.mp4"
            label="가전 · 디지털"
          />
          </li>
          <li>
          <CategoryItem
            href="/shopping/category/PC0301"
            img="/image/category_icon/diy_product.svg"
            video="/image/category_icon/diy.mp4"
            label="공구 · DIY"
          />
          </li>
          <li>
          <CategoryItem
            href="/shopping/category/PC0301"
            img="/image/category_icon/acceptance_product.svg"
            video="/image/category_icon/acceptance.mp4"
            label="수납 · 정리"
          />
          </li>
        </ul>
      </section>
    </>
  );
}
