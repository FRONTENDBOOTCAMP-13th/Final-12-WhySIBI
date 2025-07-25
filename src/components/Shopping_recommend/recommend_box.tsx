'use client';
import InputCheckBox from '@/components/Input/input_checkbox';
import ProductCard from '@/components/product_component/product_card';
import { getProductList } from '@/data/actions/products.fetch';
import { ProductListProps } from '@/types';
import PreferenceTagMap from '@/utils/preferenceTagMap';
import useUserStore from '@/zustand/useUserStore';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function RecommendBox() {
  const [checkTag, setCheckTag] = useState<string[]>([]);
  const [productData, setProductData] = useState<ProductListProps[]>([]);
  const { user } = useUserStore();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  //비회원 - 태그 값 불러옴
  const handleTag = () => {
    const checkedInputs = document.querySelectorAll(
      'input[name="preference"]:checked',
    );
    const selectedTags = Array.from(checkedInputs)
      .map(input => (input as HTMLInputElement).dataset.valueText)
      .filter(Boolean) as string[];

    setCheckTag(selectedTags);
    // console.log(selectedTags);
  };

  //상품 불러오기
  useEffect(() => {
    const productsList = async () => {
      try {
        const res = await getProductList();
        if (res.ok === 1) {
          // console.log(res.item);
          setProductData(res.item);
        } else {
          console.error(res.message);
        }
      } catch (err) {
        console.error('상품을 불러오지 못했습니다.', err);
      }
    };

    productsList();
  }, []);

  return (
    <>
      {user ? ( //회원이면
        user.extra.preference?.map((tag, index) => {
          //상품 Tag 와 회원 preference 같은 값을 4개까지 필터
          const tagProduct = productData
            .filter(product => product.extra?.tag?.includes(tag))
            .slice(0, 4);

          return (
            <div
              key={index}
              className="bg-gradient-to-b  from-vanilla-300 to-columbia-blue-300 mb-10 rounded-2xl"
            >
              <div className="flex justify-between p-5">
                <p className="text-lg font-bold text-livealone-cal-poly-green">
                  {PreferenceTagMap[tag]} 인기 상품 추천 ✨
                </p>
                <Link href="/shopping/best">
                  <span className="text-gray-400">{`더보기 >`}</span>
                </Link>
              </div>
              <div
                className="grid sm:grid-cols-2 md:grid-cols-2 
                lg:grid-cols-4 gap-4 items-center"
              >
                {tagProduct.map(product => {
                  const discount = product?.extra?.originalPrice
                    ? `${Math.round(100 - (product.price * 100) / product.extra.originalPrice)}%`
                    : ''; //할인율
                  return (
                    <ProductCard
                      key={product._id}
                      id={product._id}
                      name={product.name}
                      imageUrl={`${API_URL}/${product.mainImages[0]?.path}`}
                      price={`${product.price.toLocaleString()}원`}
                      discount={discount}
                      rating={product.extra?.star ? product.extra?.star : 0}
                      reviewCount={100} //리뷰카운트 계산예정
                      isLiked={product.extra?.isLike ? true : false}
                      onClick={() => {}}
                    />
                  );
                })}
              </div>
            </div>
          );
        })
      ) : (
        //비회원이면
        <>
          {/* 비회원 관심 태그 선택창 */}
          <p className="text-lg font-bold text-livealone-cal-poly-green mb-5">
            요즘 자취 관심사를 알려주세요
          </p>
          <div className="overflow-x-auto h-[250px]  whitespace-nowrap mb-10">
            <div className="flex gap-4 w-max">
              <div className="min-w-[120px] ">
                <InputCheckBox
                  text={'🛁 욕실꾸미기'}
                  idValue={'bathroom_decor'}
                  inputType={'checkbox'}
                  bgImg={'/image/theme_image/bathroom_deco.png'}
                  valueText="TAG1"
                  onTagChange={handleTag}
                />
              </div>
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
              <div className="min-w-[120px]  ">
                <InputCheckBox
                  text={'📚 책상꾸미기'}
                  idValue={'desk_decor'}
                  inputType={'checkbox'}
                  bgImg={'/image/theme_image/desk_decor.png'}
                  valueText="TAG9"
                  onTagChange={handleTag}
                />
              </div>
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
            </div>
          </div>

          {/* 비회원 선택 기반 추천 상품 */}
          {checkTag.length > 0 && //checkTag 배열이 0 보다 크면
            checkTag.map((tag, index) => {
              //checkTag 배열을 돌면서 태그 필터 -> 상품 4개 가져옴
              const tagProduct = productData
                .filter(product => product.extra?.tag?.includes(tag))
                .slice(0, 4);

              return (
                <div
                  key={index}
                  className="bg-gradient-to-b from-vanilla-300 to-columbia-blue-300 mb-10 rounded-2xl"
                >
                  <div className="flex justify-between p-5">
                    <p className="text-lg font-bold text-livealone-cal-poly-green">
                      {PreferenceTagMap[tag]} 인기 상품 추천 ✨
                    </p>
                    <Link href="/shopping/best">
                      <span className="text-gray-400">{`더보기 >`}</span>
                    </Link>
                  </div>
                  <div
                    className="grid sm:grid-cols-2 md:grid-cols-2 
                lg:grid-cols-4 gap-4 items-center"
                  >
                    {tagProduct.map(product => {
                      const discount = product?.extra?.originalPrice
                        ? `${Math.round(100 - (product.price * 100) / product.extra.originalPrice)}%`
                        : ''; //할인율
                      return (
                        <ProductCard
                          key={product._id}
                          id={product._id}
                          name={product.name}
                          imageUrl={`${API_URL}/${product.mainImages[0]?.path}`}
                          price={`${product.price.toLocaleString()}원`}
                          discount={discount}
                          rating={product.extra?.star ? product.extra?.star : 0}
                          reviewCount={100} //리뷰카운트 계산예정
                          isLiked={product.extra?.isLike ? true : false}
                          onClick={() => {}}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </>
      )}
    </>
  );
}
export default RecommendBox;
