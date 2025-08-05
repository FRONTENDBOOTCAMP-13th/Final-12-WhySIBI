'use client';
import TimeStamp from '@/components/basic_component/Time_stamp';
import SkeletonUI from '@/components/product_component/skeleton_ui';
import ProductCard from '@/components/product_component/product_card';
import DropdownShoppingList from '@/components/Shopping_list/Dropdown_shopping_list';
import Title from '@/components/Title';
import { getProductList } from '@/data/actions/products.fetch';
import { ProductListProps } from '@/types';
import useMenuStore from '@/zustand/menuStore';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

function ShoppingBestSection({ token }: { token: string | undefined }) {
  const { mainCategoryId, subMenuData, handleMenuClick } = useMenuStore();
  const [productData, setProductData] = useState<ProductListProps[]>([]);
  const [sort, setSort] = useState<
    | 'latest'
    | 'low-cost'
    | 'high-cost'
    | 'high-star'
    | 'high-review'
    | 'best-selling'
  >('best-selling'); //많이 팔린순
  const params = useParams();
  const [loading, setLoading] = useState(true);

  //카테고리가 없으면 top100
  const top100 = !params.mainCategoryId;

  //카테고리 가져오기
  const categoryItems = subMenuData?.shopping?.items?.['카테고리']?.items ?? {};
  const categoryData = Object.values(categoryItems);

  //API 호출
  const fetchProducts = useCallback(
    async (customMap: Record<string, string> = {}) => {
      try {
        const res = await getProductList(
          {
            sort,
            limit: 100,
            custom: customMap,
          },
          token,
        );
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
    },
    [sort, token],
  );

  //상품 불러오기
  useEffect(() => {
    if (top100) {
      fetchProducts();
    } else if (mainCategoryId) {
      fetchProducts({ 'extra.category': mainCategoryId });
    }
  }, [mainCategoryId, top100, fetchProducts]);

  if (!categoryData) {
    console.log('카테고리 데이터 없음', mainCategoryId);
    return <div>메인 카테고리에 데이터가 없습니다.</div>;
  }

  return (
    <>
      {/* 타이틀 */}
      <div className="text-center">
        <Title
          title="나혼산 BEST"
          subTitle={
            <>
              현재시각 <TimeStamp /> 실시간 인기상품 🔥🔥🔥
            </>
          }
        />

        {/* Top100 or 카테고리 베스트 */}
        <div className="flex justify-center mt-10 w-full mx-auto">
          <Link
            href="/shopping/best"
            className={`subcategory flex-1 font-bold text-xl py-3
                    ${top100 ? 'subcategory-active' : ''}
                    `}
          >
            TOP100
          </Link>
          <Link
            href={`/shopping/best/${mainCategoryId || categoryData[0].id}`}
            className={`subcategory flex-1 font-bold text-xl py-3
                    ${!top100 ? 'subcategory-active' : ''}
                    `}
          >
            카테고리 베스트
          </Link>
        </div>

        {/* Top100 이 아닐때만 서브카테고리 보여줌 */}
        {!top100 && (
          <ul className="subcategory-container">
            {categoryData.map(main => {
              const activeCategory = mainCategoryId === main.id;
              return (
                <li key={main.id}>
                  <Link
                    href={`/shopping/best/${main.id}/`}
                    onClick={() => {
                      handleMenuClick('shopping', main.id);
                    }}
                    className={`subsubcategory
                  ${activeCategory ? 'subsubcategory-active' : ''}
                  `}
                  >
                    {main.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}

        {/* 실시간 베스트 TOP100 */}
        <div className="flex justify-between items-center my-10">
          <span className="text-sm text-gray-500">
            전체 {productData.length}개
          </span>
          <DropdownShoppingList value={sort} onDropChange={setSort} />
        </div>
        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center"
        >
          {/* 상품 로딩중일때 스켈레톤 UI 불러옴 */}
          {loading ? (
            <SkeletonUI count={100} />
          ) : (
            productData.map((product, index) => {
              const discount = product?.extra?.originalPrice
                ? `${Math.round(100 - (product.price * 100) / product.extra.originalPrice)}%`
                : ''; //할인율
              return (
                <ProductCard
                  id={product._id}
                  key={product._id}
                  name={product.name}
                  imageUrl={product.mainImages[0]?.path}
                  price={`${product.price.toLocaleString()}원ㅌ`}
                  discount={discount}
                  rank={index + 1}
                  rating={product.extra?.star ? product.extra?.star : 0}
                  reviewCount={product?.replies}
                  isLiked={product.extra?.isLike ? true : false}
                  onClick={() => {}}
                  myBookmarkId={product.myBookmarkId}
                  token={token}
                  type={'product'}
                  UpdateProductState={fetchProducts}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default ShoppingBestSection;
