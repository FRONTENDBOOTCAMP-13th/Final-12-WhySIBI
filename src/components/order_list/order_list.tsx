'use client';
import OrderProductInfo from '@/components/order_list/order_info/order_info';
import { getOrderList } from '@/data/actions/order';
import { OrderItem } from '@/types/order';
import useUserStore from '@/zustand/useUserStore';
import { useEffect, useState } from 'react';

export default function OrderList() {
  //상품 리스트 불러오는 부분
  const [productList, setProductList] = useState<OrderItem[] | null>(null);
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

  return (
    <nav className="mt-20">
      <ul className="flex flex-col flex-wrap gap-16">
        {productList?.map(order =>
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
    </nav>
  );
}
