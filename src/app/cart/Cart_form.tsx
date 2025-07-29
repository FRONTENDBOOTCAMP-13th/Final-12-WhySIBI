'use client';
import useUserStore from '@/zustand/useUserStore';
import CartList from './Cart_list';
import { useEffect, useState } from 'react';

export default function CartForm() {
  const { user } = useUserStore();
  const token = user?.token?.accessToken;
  console.log('유전데', user);

  const [cartData, setCartData] = useState(null);
  // 로그인한 유저의 장바구니를 불러옴
  useEffect(() => {
    if (!token) return;
    async function fetchCart() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carts`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Client-Id': 'febc13-final12-emjf',
        },
        next: { tags: [`cartData`] },
      });
      const data = await response.json();
      setCartData(data);
    }
    fetchCart();
  }, [token]);
  console.log('이게 된다고?', cartData);
  // const cost = cartData?.cost;
  // const items = cartData?.item;

  //장바구니가 비어있을때 처리
  if (cartData?.item.length === 0) {
    return (
      <section className="h-72 flex flex-col justify-center items-center gap-3">
        <h3 className="font-bold text-2xl">장바구니에 담긴 상품이 없어요</h3>
        <p className="text-gray-550 pb-4">상품을 담아보세요</p>
        <button
          className={`box-border cursor-pointer bg-flame-250 w-[300px] h-[48px] text-white border-2 border-flame-250 rounded-sm font-bold`}
        >
          장바구니 채우러가기
        </button>
      </section>
    );
  }

  return (
    <section className="flex justify-center gap-5">
      <div className="min-w-[630px] flex flex-col gap-6">
        <div className="border-1 px-5 py-3 rounded-2xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <input type="checkbox" id="allcheck" className="w-4 h-4" />
            <label htmlFor="allcheck" className="text-lg text-gray-550">
              모두 선택
            </label>
          </div>
          <button className="border-2 rounded-3xl text-button-color w-24 h-9 font-bold">
            선택삭제
          </button>
        </div>

        {/* 장바구니 목록 영역 */}
        <ul className="flex flex-col border-1 px-5 pt-3 rounded-2xl">
          {cartData?.item.map(item => {
            return (
              <CartList
                key={item._id}
                id={item._id}
                color={item.color || null}
                size={item.size || null}
                name={item.product.name}
                img={item.product.image.path}
                price={item.product.price}
                quantity={item.quantity}
              />
            );
          })}

          {/* <CartList /> */}
        </ul>
      </div>
      <aside className="min-w-[630px] flex flex-col gap-6">
        <section className="border-1 px-5 py-6 rounded-2xl">
          <h3 className="text-xl font-extrabold border-b-1 pb-3 border-gray-150">
            배송지
          </h3>
          <p className="text-gray-550 pb-8 border-b-1 border-gray-150 mt-3">
            {user?.extra.addressBook[0].value}
          </p>
          <div className="flex justify-center mt-6">
            <button className="border-2 rounded-3xl text-button-color w-24 h-9 font-bold">
              변경하기
            </button>
          </div>
        </section>
        <section className="border-1 px-5 py-6 rounded-2xl">
          <h3 className="text-xl font-extrabold border-b-1 pb-3 border-gray-150">
            결제금액
          </h3>
          <dl className="flex flex-col gap-5 pt-4 pb-6 border-b-1 border-gray-150">
            <div className="flex justify-between text-xl">
              <dt className="text-gray-550 ">총 상품금액</dt>
              <dd className="font-extrabold">
                {cartData?.cost.products.toLocaleString()} 원
              </dd>
            </div>
            <div className="flex justify-between text-xl ">
              <dt className="text-gray-550">총 배송비</dt>
              <dd className="text-flame-250 font-extrabold">무료배송</dd>
            </div>
          </dl>

          <dl className="flex justify-between text-xl pt-6">
            <dt className="text-gray-550">결제예정금액</dt>
            <dd className="font-extrabold">
              {cartData?.cost.products.toLocaleString()} 원
            </dd>
          </dl>
        </section>
        <button
          className={`box-border cursor-pointer bg-flame-250 w-full h-[48px] text-white border-2 border-flame-250 rounded-sm font-bold`}
        >
          총 {cartData?.cost.products.toLocaleString()} 구매하기
        </button>
      </aside>
    </section>
  );
}
