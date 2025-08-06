'use client';

import InputCheckBox from '@/components/Input/input_checkbox';
import ProductCard from '@/components/product_component/product_card';
import { getProductList } from '@/data/actions/products.fetch';
import { ProductListProps } from '@/types';
import PreferenceTagMap from '@/utils/preferenceTagMap';
import useUserStore from '@/zustand/useUserStore';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import SkeletonUI from '@/components/product_component/skeleton_ui';

//추천 상품 박스
function MainRecommendBox() {
  const [checkTag, setCheckTag] = useState<string[]>([]);
  const [productData, setProductData] = useState<ProductListProps[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUserStore();
  const token = user?.token?.accessToken;
  //비회원 - 태그 값 불러옴
  const handleTag = () => {
    const checkedInputs = document.querySelectorAll(
      'input[name="preference"]:checked',
    );
    const selectedTags = Array.from(checkedInputs)
      .map(input => (input as HTMLInputElement).dataset.valueText || '')
      .filter(Boolean) as string[];

    setCheckTag([...new Set(selectedTags)]);
  };

  const productsList = useCallback(async () => {
    try {
      const res = await getProductList();
      if (res.ok === 1) {
        setProductData(res.item);
      } else {
        console.error(res.message);
      }
    } catch (err) {
      console.error('상품을 불러오지 못했습니다.', err);
    } finally {
      setLoading(false);
    }
  }, []);

  //상품 불러오기
  useEffect(() => {
    productsList();
  }, [productsList]);

  return (
    <>
      {user ? ( //회원이면
        <Swiper
          modules={[Scrollbar]}
          loop={false} // 슬라이드 루프
          spaceBetween={16} // 슬라이스 사이 간격
          slidesPerView={2}
          slidesPerGroup={2}
          grabCursor={true} //마우스 선택
          scrollbar={{
            //스크롤바
            el: '.swiper-scrollbar',
            draggable: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1 },
            768: { slidesPerView: 2, slidesPerGroup: 2 },
          }}
        >
          {user.extra.preference?.map((tag, index) => {
            const tagProduct = productData
              .filter(product => product.extra?.tag?.includes(tag))
              .slice(0, 2);

            return (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-b from-vanilla-300 to-columbia-blue-300 mb-6 md:mb-10 rounded-xl md:rounded-2xl p-4 md:p-6">
                  <p className="text-sm text-left md:text-lg  font-bold text-livealone-cal-poly-green mb-4">
                    {PreferenceTagMap[tag]} 인기 상품 추천 ✨
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {loading ? (
                      <SkeletonUI count={2} />
                    ) : (
                      // 로딩중이 아니면 프로덕트 카드로 대체
                      tagProduct.map(product => {
                        const discount = product?.extra?.originalPrice
                          ? `${Math.round(100 - (product.price * 100) / product.extra.originalPrice)}%`
                          : ''; //할인율
                        return (
                          <ProductCard
                            key={product._id}
                            id={product._id}
                            name={product.name}
                            imageUrl={product.mainImages[0]?.path}
                            price={`${product.price.toLocaleString()}원`}
                            discount={discount}
                            rating={
                              product.extra?.star ? product.extra?.star : 0
                            }
                            reviewCount={product.replies}
                            token={token}
                            isLiked={product.extra?.isLike ? true : false}
                            onClick={() => {}}
                          />
                        );
                      })
                    )}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="swiper-scrollbar"></div>
        </Swiper>
      ) : (
        //비회원이면
        <>
          {/* 비회원 관심 태그 선택창 */}
          <p className="text-lg font-bold text-livealone-cal-poly-green mb-5">
            요즘 자취 관심사를 선택해주세요
          </p>

          <div className="recommend-swiper mb-10">
            <Swiper
              loop={false} // 슬라이드 루프
              spaceBetween={16} // 슬라이스 사이 간격
              slidesPerView="auto" // 보여질 슬라이스 수
              grabCursor={true} //마우스 선택
              // navigation={true} // prev, next button
            >
              <SwiperSlide>
                <div className="min-w-[120px]">
                  <InputCheckBox
                    text={'🛁 욕실꾸미기'}
                    idValue={'bathroom_decor'}
                    inputType={'checkbox'}
                    bgImg={'/image/theme_image/bathroom_deco.png'}
                    valueText="TAG1"
                    onTagChange={handleTag}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="min-w-[120px]">
                  <InputCheckBox
                    text={'☕ 홈카페'}
                    idValue={'home_cafe'}
                    inputType={'checkbox'}
                    bgImg={'/image/theme_image/home_cafe.png'}
                    valueText="TAG2"
                    onTagChange={handleTag}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="min-w-[120px]">
                  <InputCheckBox
                    text={'💻 재택근무'}
                    idValue={'home_work'}
                    inputType={'checkbox'}
                    bgImg={'/image/theme_image/home_work.png'}
                    valueText="TAG5"
                    onTagChange={handleTag}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="min-w-[120px] ">
                  <InputCheckBox
                    text={'🥗 1인 식단'}
                    idValue={'solo_meal'}
                    inputType={'checkbox'}
                    bgImg={'/image/theme_image/solo_meal.png'}
                    valueText="TAG7"
                    onTagChange={handleTag}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="min-w-[120px] ">
                  <InputCheckBox
                    text={'🧹 공간 분리'}
                    idValue={'space_division'}
                    inputType={'checkbox'}
                    bgImg={'/image/theme_image/space_division.png'}
                    valueText="TAG4"
                    onTagChange={handleTag}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="min-w-[120px] ">
                  <InputCheckBox
                    text={'🎨 DIY'}
                    idValue={'diy'}
                    inputType={'checkbox'}
                    bgImg={'/image/theme_image/diy.png'}
                    valueText="TAG3"
                    onTagChange={handleTag}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="min-w-[120px]">
                  <InputCheckBox
                    text={'📚 책상꾸미기'}
                    idValue={'desk_decor'}
                    inputType={'checkbox'}
                    bgImg={'/image/theme_image/desk_decor.png'}
                    valueText="TAG9"
                    onTagChange={handleTag}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="min-w-[120px]  ">
                  <InputCheckBox
                    text={'🛋️ 인테리어'}
                    idValue={'interior_design'}
                    inputType={'checkbox'}
                    bgImg={'/image/theme_image/interior_design.png'}
                    valueText="TAG8"
                    onTagChange={handleTag}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="min-w-[120px] ">
                  <InputCheckBox
                    text={'🧸 미니멀'}
                    idValue={'minimal_style'}
                    inputType={'checkbox'}
                    bgImg={'/image/theme_image/minimal_style.png'}
                    valueText="TAG11"
                    onTagChange={handleTag}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="min-w-[120px] ">
                  <InputCheckBox
                    text={'🎮 디지털테크'}
                    idValue={'digital_tag'}
                    inputType={'checkbox'}
                    bgImg={'/image/theme_image/digital_tag.png'}
                    valueText="TAG10"
                    onTagChange={handleTag}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="min-w-[120px] ">
                  <InputCheckBox
                    text={'🫧 청소광'}
                    idValue={'clean_freak'}
                    inputType={'checkbox'}
                    bgImg={'/image/theme_image/clean_freak.png'}
                    valueText="TAG12"
                    onTagChange={handleTag}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="min-w-[120px] ">
                  <InputCheckBox
                    text={'🛏️ 침구정리'}
                    idValue={'bedding_organize'}
                    inputType={'checkbox'}
                    bgImg={'/image/theme_image/bedding_organize.png'}
                    valueText="TAG6"
                    onTagChange={handleTag}
                  />
                </div>
              </SwiperSlide>

              {/* <div className="swiper-scrollbar"></div> */}
            </Swiper>
          </div>

          {/* 비회원 선택 기반 추천 상품 */}
          {checkTag.length > 0 ? (
            <Swiper
              modules={[Scrollbar]}
              loop={false}
              spaceBetween={16}
              slidesPerView={2}
              slidesPerGroup={2}
              grabCursor={true}
              scrollbar={{
                el: '.swiper-scrollbar',
                draggable: true,
              }}
              breakpoints={{
                0: { slidesPerView: 1, slidesPerGroup: 1 },
                768: { slidesPerView: 2, slidesPerGroup: 2 },
              }}
            >
              {' '}
              {checkTag.map((tag, index) => {
                const tagProduct = productData
                  .filter(product => product.extra?.tag?.includes(tag))
                  .slice(0, 2);

                return (
                  <SwiperSlide key={index}>
                    <div className="bg-gradient-to-b from-vanilla-300 to-columbia-blue-300 rounded-xl md:rounded-2xl p-4 md:p-6 mb-6">
                      <p className="text-sm text-left md:text-lg font-bold text-livealone-cal-poly-green mb-3">
                        {PreferenceTagMap[tag]} 인기 상품 추천 ✨
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {loading ? (
                          <SkeletonUI count={2} />
                        ) : (
                          tagProduct.map(product => {
                            const discount = product?.extra?.originalPrice
                              ? `${Math.round(100 - (product.price * 100) / product.extra.originalPrice)}%`
                              : '';
                            return (
                              <ProductCard
                                key={product._id}
                                id={product._id}
                                name={product.name}
                                imageUrl={product.mainImages[0]?.path}
                                price={`${product.price.toLocaleString()}원`}
                                discount={discount}
                                rating={
                                  product.extra?.star ? product.extra?.star : 0
                                }
                                reviewCount={product.replies}
                                isLiked={product.extra?.isLike ? true : false}
                                onClick={() => {}}
                              />
                            );
                          })
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <div className="swiper-scrollbar"></div>
            </Swiper>
          ) : (
            /* 미선택 시 기본 화면 */
            <div className="bg-gradient-to-b border-2 border-gray-200 rounded-xl md:rounded-2xl flex flex-col items-center justify-center py-8 md:py-12 mx-2 md:mx-0">
              <Image
                src="/image/category_icon/furniture.svg"
                alt="관심사 미선택"
                width="200"
                height="200"
                className="w-16 md:w-[100px] opacity-20 mb-3 md:mb-2.5"
              />
              <p className="text-center text-gray-500 text-sm md:text-base px-4">
                관심사를 골라보세요 <br /> 취향저격 상품을 소개할게요
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
}
export default MainRecommendBox;
