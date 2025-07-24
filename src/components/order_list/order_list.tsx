'use client';
import OrderProductInfo from '@/components/order_list/order_info/order_info';
import { getOrderList } from '@/data/actions/order';
import { OrderItem } from '@/types/order';
import { useEffect, useState } from 'react';

export default function OrderList() {
  //상품 리스트 불러오는 부분
  const [productList, setProductList] = useState<OrderItem[] | null>(null);

  let token = null;
  const userStorageString = sessionStorage.getItem('user');
  if (userStorageString) {
    try {
      const userStorage = JSON.parse(userStorageString);
      if (userStorage?.state?.user?.token?.accessToken) {
        token = userStorage.state.user.token.accessToken;
      }
    } catch (error) {
      console.error('JSON 파싱 오류:', error);
    }
  }

  useEffect(() => {
    const orderListData = async () => {
      try {
        const res = await getOrderList(token);
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
  }, []);

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
