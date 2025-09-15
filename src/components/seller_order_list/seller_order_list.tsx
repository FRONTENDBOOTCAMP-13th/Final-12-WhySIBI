'use client';
import Pagenation from '@/components/basic_component/Pagenation';
import SkeletonUI from '@/components/product_component/skeleton_ui';
// import OrderModal from '@/components/seller_order_list/order_state_modal/order_state_modal';
import SellerOrderInfo from '@/components/seller_order_list/seller_order_info/seller_order_info';
import { ProductList } from '@/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';
interface SellerOrderListProp {
  res: ProductList[];
  token: string;
}

export default function SellerOrderList({ res, token }: SellerOrderListProp) {
  const [sellerOrderList, setSellerOrderList] = useState<ProductList[] | null>(
    null,
  );
  // const [modalState, setModalState] = useState(false);
  // const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);
  // const handleDeliveryState = (orderId: number) => {
  //   setSelectedOrderId(orderId);
  //   setModalState(true);
  // };
  //페이지 네이션
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const orderListData = async () => {
      try {
        if (res) {
          setSellerOrderList(res);
        } else {
          setSellerOrderList(null);
        }
      } catch (error) {
        console.error('상품 정보 로딩 실패:', error);
      } finally {
        setLoading(false);
      }
    };
    orderListData();
  }, [res]);

  const onePage = 10; //한 페이지에 보여줄 상품 수
  const totalPage = Math.max(
    1,
    Math.ceil((sellerOrderList?.length || 0) / onePage),
  ); //총 페이지 수
  const startPage = (page - 1) * onePage; //(1-1) * 12 = 0 , (2-1) * 12 = 12
  const endPage = page * onePage; //1 * 12 = 12 , 2 * 12 = 24
  const sliceData = sellerOrderList?.slice(startPage, endPage); //12 , 24 ... 개씩 잘라서 보여주기
  const handlePagenation = (page: number) => {
    setPage(page);
  };
  return (
    <>
      {res && res?.length > 0 ? (
        isLoading ? (
          <div className="flex justify-center items-center xl:mt-20 lg:mt-16 md:mt-12 mt-8">
            <SkeletonUI count={10} />
          </div>
        ) : (
          <nav className="xl:mt-20 lg:mt-16 md:mt-12 mt-8">
            <ul className="flex flex-col flex-wrap xl:gap-16 lg:gap-12 md:gap-10 gap-8">
              {sliceData?.map((productList, i) =>
                productList.products?.map((product, j) => (
                  <SellerOrderInfo
                    key={`${i}-${product._id}-${j}`}
                    _id={product._id}
                    price={product.price}
                    name={product.name}
                    mainImages={
                      product.image ? [product.image] : product.mainImages || []
                    }
                    state={productList.state || ''}
                    content={product.content || product.name}
                    replies={product.replies}
                    buyQuantity={product.buyQuantity}
                    quantity={product.quantity}
                    extra={product.extra}
                    createdAt={product.createdAt}
                    keyword={product.keyword || []}
                    user={productList.user}
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
            <h3 className="font-bold text-2xl">
              상품이 아직 주문된적이 없다냥
            </h3>
            <Image
              src="/image/category_icon/furniture.svg"
              alt="상품 등록이 필요하다냥"
              width="150"
              height="150"
              className="opacity-20 mt-5 mb-2.5"
              aria-hidden="true"
            />
          </section>
        </div>
      )}
      {/* <OrderModal token={token} _id={selectedOrderId} /> */}
    </>
  );
}
