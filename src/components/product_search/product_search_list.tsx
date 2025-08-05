'use client';
import ProductCard from '@/components/product_component/product_card';
import SkeletonUI from '@/components/product_component/skeleton_ui';
import ProductSearchTitle from '@/components/product_search/product_search_title';
import SearchingUI from '@/components/product_search/searching_ui';
import DropdownShoppingList from '@/components/Shopping_list/Dropdown_shopping_list';
import { getProductList } from '@/data/actions/products.fetch';
import { ProductListProps } from '@/types';
import useProductSearchStore from '@/zustand/productSearchStore';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

function ProductSearchList() {
  const { searchText } = useProductSearchStore();
  const { searchKeywords } = useProductSearchStore(); // 비슷한 상품 찾기
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState<ProductListProps[]>([]);
  const [sort, setSort] = useState<
    | 'latest'
    | 'low-cost'
    | 'high-cost'
    | 'high-star'
    | 'high-review'
    | 'best-selling'
  >('latest'); //신상품

  //API 호출
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getProductList({
        sort,
      });
      if (res.ok === 1) {
          const text = searchText.trim().toLowerCase().replace(/\s+/g, '');
          const keywords = searchKeywords.map(k =>
            k.trim().toLowerCase().replace(/\s+/g, ''),
          ); // 비슷한 상품 찾기 (키워드 병렬로 받음)
          const filter = res.item.filter((product: ProductListProps) => {
          const name = product.name.toLowerCase().replace(/\s+/g, '');
          const productKeywords = product.keyword.map(k =>
            k.toLowerCase().replace(/\s+/g, ''),
          ); // 비슷한 상품 찾기

          const nameMatch = text && name.includes(text);
          const keywordMatch =
            text &&
            productKeywords.some(keyword => keyword.includes(text));

          const multiKeywordMatch =
            keywords.length > 0 &&
            keywords.some(search => {
              return (
                name.includes(search) ||
                productKeywords.some(k => k.includes(search))
              );
            });

          return nameMatch || keywordMatch || multiKeywordMatch;
        });
        setProductData(filter);
      } else {
        console.error(res.message);
      }
    } catch (err) {
      console.error('상품을 불러오지 못했습니다.', err);
    } finally {
      setLoading(false);
    }
  }, [sort, searchText, searchKeywords]);

  //상품 불러오기
  useEffect(() => {
      if (searchKeywords.length > 0) {
      fetchProducts(); // 병렬 키워드 검색 우선
    } else if (searchText) {
      fetchProducts(); // 일반 검색
    } else {
      setProductData([]);
      setLoading(false);
    }
  }, [searchText, searchKeywords, fetchProducts]);

  const isSearch = productData.length > 0;

  return (
    <>
      <ProductSearchTitle />

      {/* 상품 로딩중일때 검색중 UI 불러옴 */}
      {loading ? (
        <SearchingUI text="상품 검색중 . . ." />
      ) : isSearch ? (
        <>
          {/* //검색된 상품이 있으면 */}
          <div className="flex justify-between items-center my-10">
            <span className="text-sm text-gray-500">
              전체 {productData.length}개
            </span>
            <DropdownShoppingList value={sort} onDropChange={setSort} />
          </div>

          <div
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
       items-center"
          >
            {/* 상품 배열이 0이면 스켈레톤 UI 보여줌 */}
            {productData.length === 0 ? (
              <SkeletonUI count={4} />
            ) : (
              // 상품 배열이 1개부터는 상품 보여줌
              productData.map(product => {
                const discount = product?.extra?.originalPrice
                  ? `${Math.round(100 - (product.price * 100) / product.extra.originalPrice)}%`
                  : ''; //할인율
                return (
                  <ProductCard
                    id={product._id}
                    key={product._id}
                    name={product.name}
                    imageUrl={`/${product.mainImages[0]?.path}`}
                    price={`${product.price.toLocaleString()}원`}
                    discount={discount}
                    rating={product.extra?.star ? product.extra?.star : 0}
                    reviewCount={product?.replies}
                    isLiked={product.extra?.isLike ? true : false}
                    onClick={() => {}}
                  />
                );
              })
            )}
          </div>
        </>
      ) : (
        // 검색된 상품이 없을 시
        <div className="flex items-center justify-center flex-col mt-10">
          <Image
            src="/image/category_icon/furniture.svg"
            alt="검색된 상품이 없습니다."
            width="150"
            height="150"
            className="opacity-20 mt-5 mb-2.5"
          />
          <p className="text-center mt-3 font-bold text-gray-500 text-xl">
            앗! 검색된 상품이 없어요
          </p>
          <p className="text-center mt-3 text-gray-400 text-sm mb-5">
            검색어를 확인해 주세요
          </p>
        </div>
      )}
    </>
  );
}

export default ProductSearchList;
