'use client';
import Pagenation from '@/components/basic_component/Pagenation';
import OrderProductInfo from '@/components/order_list/order_info/order_info';
import SkeletonUI from '@/components/product_component/skeleton_ui';
import { OrderItem } from '@/types/order';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
interface OrderListProp {
  orderItem: OrderItem[];
}

export default function OrderList({ orderItem }: OrderListProp) {
  //상품 리스트 불러오는 부분
  const [productList, setProductList] = useState<OrderItem[] | null>(null);
  //페이지 네이션
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const orderListData = async () => {
      try {
        if (orderItem) {
          setProductList(orderItem);
        } else {
          setProductList(null);
        }
      } catch (error) {
        console.error('상품 정보 로딩 실패:', error);
      } finally {
        setLoading(false);
      }
    };
    orderListData();
  }, [orderItem]);

  const onePage = 10; //한 페이지에 보여줄 상품 수
  const totalPage = Math.max(
    1,
    Math.ceil((productList?.length || 0) / onePage),
  ); //총 페이지 수
  const startPage = (page - 1) * onePage; //(1-1) * 12 = 0 , (2-1) * 12 = 12
  const endPage = page * onePage; //1 * 12 = 12 , 2 * 12 = 24
  const sliceData = productList?.slice(startPage, endPage); //12 , 24 ... 개씩 잘라서 보여주기
  const handlePagenation = (page: number) => {
    setPage(page);
  };

  return (
    <>
      {productList && productList?.length > 0 ? (
        isLoading ? (
          <div className="flex justify-center items-center xl:mt-20 lg:mt-16 md:mt-12 mt-8">
            <SkeletonUI count={10} />
          </div>
        ) : (
          <nav className="xl:mt-20 lg:mt-16 md:mt-12 mt-8">
            <ul className="flex flex-col flex-wrap xl:gap-16 lg:gap-12 md:gap-10 gap-8">
              {sliceData?.map(order =>
                order.products.map(product => (
                  <OrderProductInfo
                    key={order._id}
                    orderId={String(order._id)}
                    _id={product._id}
                    price={product.price}
                    name={product.name}
                    image={product.image}
                    state={order.state}
                  />
                )),
              )}
            </ul>
            <div className="w-full xl:mt-5 lg:mt-4 md:mt-3 mt-2">
              <Pagenation
                page={page}
                totalPage={totalPage}
                onPageTurner={handlePagenation}
              />
            </div>
          </nav>
        )
      ) : (
        <div>
          {' '}
          <section className="h-72 flex flex-col justify-center items-center gap-3">
            <h3 className="font-bold text-2xl">상품을 구매한거 맞냥?</h3>
            <Image
              src="/image/category_icon/furniture.svg"
              alt="주문이 필요하다냥"
              width="150"
              height="150"
              className="opacity-20 mt-5 mb-2.5"
              aria-hidden="true"
            />
            <Link
              href="/shooping/category"
              className={`box-border cursor-pointer bg-flame-250 w-[300px] h-[48px] text-white border-2 border-flame-250 rounded-sm font-bold flex items-center justify-center`}
            >
              <span>주문하러 가기</span>
            </Link>
          </section>
        </div>
      )}
    </>
  );
}
