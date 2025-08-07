'use client';
import DropdownShoppingList from '@/components/Shopping_list/Dropdown_shopping_list';
import Pagenation from '@/components/basic_component/Pagenation';
import ProductCard from '@/components/product_component/product_card';
import SkeletonUI from '@/components/product_component/skeleton_ui';
import { getProductList } from '@/data/actions/products.fetch';
import { ProductListProps } from '@/types';
import useMenuStore from '@/zustand/menuStore';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

function ShoppingProductsList({ token }: { token?: string | undefined }) {
  const [productData, setProductData] = useState<ProductListProps[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [sort, setSort] = useState<
    | 'latest'
    | 'low-cost'
    | 'high-cost'
    | 'high-star'
    | 'high-review'
    | 'best-selling'
  >('latest'); //신상품 기본필터
  const { mainCategoryId, subCategoryId, handleMenuClick, resetMenu } =
    useMenuStore(); //zustand 에서 카테고리 상태 가져옴
  const params = useParams();
  const [loading, setLoading] = useState(true);

  //현재 카테고리 값 확인
  const currentRef = useRef<{ mainId: string; subId: string | null }>({
    mainId: 'PC0301', //기본값
    subId: null,
  });

  //주소에서 카테고리 값 가져오기
  useEffect(() => {
    const mainId = params.mainCategoryId as string;
    const subId = params.subCategoryId as string;
    if (mainId) {
      handleMenuClick('shopping', mainId, subId || undefined);
      currentRef.current = { mainId, subId: subId || null };
    } else {
      resetMenu('shopping', 'PC0301', null);
      currentRef.current = { mainId: 'PC0301', subId: null };
    }
    setPage(1);
  }, [params.mainCategoryId, params.subCategoryId, handleMenuClick, resetMenu]);

  const productsList = useCallback(async () => {
    try {
      // setLoading(true); // 로딩 상태 추가
      const res = await getProductList(
        {
          sort,
          page,
          limit: 12,
          custom: {
            ...(mainCategoryId ? { 'extra.category': mainCategoryId } : {}),
            ...(subCategoryId ? { 'extra.category': subCategoryId } : {}),
          },
        },
        token,
      );
      if (res.ok === 1) {
        setProductData(res.item);
        setTotalPage(res.pagination.totalPages);
        setTotalItems(res.pagination.total);
      } else {
        console.error(res.message);
      }
    } catch (err) {
      console.error('상품을 불러오지 못했습니다.', err);
    } finally {
      setLoading(false);
    }
  }, [sort, page, mainCategoryId, subCategoryId, token]);

  //딜레이 - 주스탄드 상태랑 충돌하는거 임시 해결
  useEffect(() => {
    const timer = setTimeout(() => {
      productsList();
    }, 100);
    return () => clearTimeout(timer);
  }, [productsList]);

  //상품 페이지네이션 핸들러
  const handlePagenation = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">전체 {totalItems}개</span>
        <DropdownShoppingList value={sort} onDropChange={setSort} />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
        {loading ? (
          <SkeletonUI count={12} />
        ) : (
          productData.map(product => {
            const discount = product?.extra?.originalPrice
              ? Math.round(
                  100 - (product.price * 100) / product.extra.originalPrice,
                )
              : 0; //할인율
            const discountVal = discount > 0 ? `${discount}%` : undefined;

            return (
              <ProductCard
                id={product._id}
                key={product._id}
                name={product.name}
                imageUrl={product.mainImages[0]?.path}
                price={`${product.price.toLocaleString()}원`}
                discount={discountVal}
                rating={product.extra?.star ? product.extra?.star : 0}
                reviewCount={product?.replies}
                isLiked={product.extra?.isLike ? true : false}
                onClick={() => {}}
                myBookmarkId={product.myBookmarkId}
                token={token}
                type={'product'}
                UpdateProductState={productsList}
              />
            );
          })
        )}
      </div>
      <Pagenation
        page={page}
        totalPage={totalPage}
        onPageTurner={handlePagenation}
      />
    </>
  );
}
export default ShoppingProductsList;
