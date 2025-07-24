'use client';
import ProductCard from '@/components/product_component/product_card';
import { getProductList } from '@/data/actions/products.fetch';
import { ProductListProps } from '@/types';
import useUserStore from '@/zustand/useUserStore';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function RecommendBox() {
  const [productData, setProductData] = useState<ProductListProps[]>([]);
  const { user } = useUserStore();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

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
              className="bg-gradient-to-b from-vanilla-300 to-columbia-blue-300 mb-10 rounded-2xl"
            >
              <div className="flex justify-between p-5">
                <p className="text-lg font-bold text-livealone-cal-poly-green">
                  {tag} 인기 상품 추천 ✨
                </p>
                <Link href="/shopping/category">
                  <span className="text-gray-400">{`더보기 >`}</span>
                </Link>
              </div>
              {tagProduct.map((product, index) => {
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
                    rank={index + 1}
                    rating={product.extra?.star ? product.extra?.star : 0}
                    reviewCount={100} //리뷰카운트 계산예정
                    isLiked={product.extra?.isLike ? true : false}
                    onClick={() => {}}
                  />
                );
              })}
            </div>
          );
        })
      ) : (
        //비회원이면
        <div className="bg-gradient-to-b from-vanilla-300 to-columbia-blue-300 mb-10 rounded-2xl">
          <div className="flex justify-between p-5">
            <p className="text-lg font-bold text-livealone-cal-poly-green">
              홈카페 인기 상품 추천 ✨
            </p>
            <Link href="">
              <span className="text-gray-400">{`더보기 >`}</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
export default RecommendBox;
