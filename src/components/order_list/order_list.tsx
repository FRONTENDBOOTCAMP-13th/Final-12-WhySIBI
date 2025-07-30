'use client';
import Pagenation from '@/components/basic_component/Pagenation';
import OrderProductInfo from '@/components/order_list/order_info/order_info';
import { getOrderList } from '@/data/actions/order';
import { OrderItem } from '@/types/order';
import useUserStore from '@/zustand/useUserStore';
import { useEffect, useState } from 'react';

export default function OrderList() {
  //상품 리스트 불러오는 부분
  const [productList, setProductList] = useState<OrderItem[] | null>(null);
  //페이지 네이션
  const [page, setPage] = useState(1);

  const { user } = useUserStore();

  useEffect(() => {
    const orderListData = async () => {
      try {
        const res = await getOrderList(user?.token?.accessToken as string);
        if (res.ok === 1) {
          setProductList(res.item);
          console.log(res.item);
        } else {
          setProductList(null);
        }
      } catch (error) {
        console.error('상품 정보 로딩 실패:', error);
      }
    };

    orderListData();
  }, [user?.token?.accessToken]);
  const onePage = 10; //한 페이지에 보여줄 상품 수
  const totalPage = Math.max(1, Math.ceil((productList?.length || 0) / onePage)); //총 페이지 수
  const startPage = (page - 1) * onePage; //(1-1) * 12 = 0 , (2-1) * 12 = 12
  const endPage = page * onePage; //1 * 12 = 12 , 2 * 12 = 24
  const sliceData = productList?.slice(startPage, endPage); //12 , 24 ... 개씩 잘라서 보여주기
  const handlePagenation = (page: number) => {
    setPage(page);
  };

  return (
    <nav className="mt-20">
      <ul className="flex flex-col flex-wrap gap-16">
        {sliceData?.map(order =>
          order.products.map(product => (
            <OrderProductInfo
              key={``}
              _id={product._id}
              price={product.price}
              name={product.name}
              image={product.image}
              state={order.state}
            />
          )),
        )}
      </ul>
      <Pagenation
        page={page}
        totalPage={totalPage}
        onPageTurner={handlePagenation}
      />
    </nav>
  );
}
