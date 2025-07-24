'use client';

import DropdownShoppingList from '@/components/Dropdown/Dropdown_shopping_list';
import Pagenation from '@/components/Pagenation';
import ProductCard from '@/components/product_card';
import { getProductList } from '@/data/actions/products.fetch';
import { ProductListProps } from '@/types';
import { useEffect, useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function ShoppingProductsList() {
  const [productData, setProductData] = useState<ProductListProps[]>([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('latest'); //신상품 기본필터

  const onePage = 12; //한 페이지에 보여줄 상품 수

  const totalPage = Math.ceil(productData.length / onePage); //총 페이지 수

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

  //상품 정렬하기
  console.log('필터링기준:', sort);

  const sortData = [...productData].sort((a, b) => {
    if (sort === 'latest') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    if (sort === 'low-cost') {
      return a.price - b.price;
    }
    if (sort === 'high-cost') {
      return b.price - a.price;
    }
    if (sort === 'high-star') {
      return (
        (b.extra?.star ? b.extra?.star : 0) -
        (a.extra?.star ? a.extra?.star : 0)
      );
    }
    if (sort === 'high-review') {
      // return b.extra?.reviewCount - a.extra?.reviewCount;
      return 0; //리뷰카운트 계산 필요
    }
    return 0;
  });

  //상품 slice해서 보여주기
  const handlePagenation = (page: number) => {
    setPage(page);
  };

  const startPage = (page - 1) * onePage; //(1-1) * 12 = 0 , (2-1) * 12 = 12
  const endPage = page * onePage; //1 * 12 = 12 , 2 * 12 = 24
  const sliceData = sortData.slice(startPage, endPage); //12 , 24 ... 개씩 잘라서 보여주기

  return (
    <>
      <DropdownShoppingList value={sort} onDropChange={setSort} />
      <div
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-4 gap-4
       items-center"
      >
        {sliceData.map(product => {
          const discount = product?.extra?.originalPrice
            ? `${Math.round(100 - (product.price * 100) / product.extra.originalPrice)}%`
            : ''; //할인율
          return (
            <ProductCard
              key={product._id}
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
      <Pagenation
        page={page}
        totalPage={totalPage}
        onPageTurner={handlePagenation}
      />
    </>
  );
}
export default ShoppingProductsList;
