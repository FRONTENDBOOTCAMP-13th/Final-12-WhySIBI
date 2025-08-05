'use client';
import useUserStore from '@/zustand/useUserStore';
import CartItem from './Cart_item';
import { useEffect, useState } from 'react';
import { CartData } from '@/types/cart';
import CartAllDeleteButton from './Cart_all_delete_button';
import CartPurchaseButton from './Cart_purchase_button';
import useCartRefreshStore from '@/zustand/useCartRefreshStore';
import CartAddressInput from './Cart_address_input';
import CartListSkeleton from './skeleton/Cart_list_skeleton';
import Link from 'next/link';
import Image from 'next/image';

export default function CartMain() {
  const { user } = useUserStore();
  const token = user?.token?.accessToken;

  const { refreshTrigger } = useCartRefreshStore();

  const [allcheck, setAllcheck] = useState(false);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const [cartData, setCartData] = useState<CartData | null>(null);
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
      });
      const data = await response.json();
      setCartData(data);
    }
    fetchCart();
  }, [token, refreshTrigger]);

  // 모든 상품 선택/해제 핸들러
  function handleAllCheck() {
    //올체크가 아닐때 클릭하면 checkedItem배열에 모든것을 넣고 올체크 상태를 true로 설정
    if (!allcheck) {
      if (cartData?.item) {
        const allItemId = cartData?.item.map(item => item._id);
        setCheckedItems(allItemId);
        setAllcheck(true);
      }
      //올체크 일때 클릭하면 checkedItem배열을 비우고 올체크 상태를 false로설정
    } else {
      setCheckedItems([]);
      setAllcheck(false);
    }
  }

  //개별 아이템 선택/해제 핸들러
  function handleItemCheck(itemId: number, isChecked: boolean) {
    if (isChecked) {
      const newCheckedItems = [...checkedItems, itemId];
      setCheckedItems(newCheckedItems);

      //모든 상품을 개별로 체크하면 allcheck상태를 true로 설정해줌
      if (cartData?.item && newCheckedItems.length === cartData.item.length) {
        setAllcheck(true);
      }
    } else {
      //상품 선택 해제
      const newCheckedItems = checkedItems?.filter(id => id !== itemId);
      setCheckedItems(newCheckedItems);
      setAllcheck(false);
    }
  }

  //개별 아이템 수량 업데이트 함수
  function handleQuantity(itemId: number, newQuantity: number) {
    if (!cartData) return;

    // 장바구니 아이템 아이디가 일치하는 것만 찾아서 수량만 바꿔준다.
    const updatedItems = cartData.item.map(item =>
      item._id === itemId ? { ...item, quantity: newQuantity } : item,
    );

    // 새로운 총 금액 계산
    let newTotalCost = 0;
    for (let i = 0; i < updatedItems.length; i++) {
      const item = updatedItems[i];
      newTotalCost += item.product.price * item.quantity;
    }

    setCartData({
      ...cartData,
      item: updatedItems,
      cost: {
        ...cartData.cost,
        products: newTotalCost,
      },
    });
  }

  if (!token) {
    return (
      <section className="h-72 flex flex-col justify-center items-center gap-3">
        <h3 className="font-bold text-2xl">로그인이 필요하다냥</h3>
        <Image
          src="/image/category_icon/furniture.svg"
          alt="로그인이 필요하다냥"
          width="150"
          height="150"
          className="opacity-20 mt-5 mb-2.5"
          aria-hidden="true"
        />
        <Link
          href="login"
          className={`box-border cursor-pointer bg-flame-250 w-[300px] h-[48px] text-white border-2 border-flame-250 rounded-sm font-bold flex items-center justify-center`}
        >
          <span>로그인 하러 가기</span>
        </Link>
      </section>
    );
  }

  if (cartData?.item.length === 0) {
    //장바구니가 비어있을때 보여줄 화면
    return (
      <section className="h-72 flex flex-col justify-center items-center gap-3">
        <h3 className="font-bold text-2xl">장바구니에 담긴 상품이 없어요</h3>
        <p className="text-gray-550 pb-4">상품을 담아보세요</p>
        <Link
          href="/shopping/best"
          className={`box-border cursor-pointer bg-flame-250 w-[300px] h-[48px] text-white border-2 border-flame-250 rounded-sm font-bold flex items-center justify-center`}
        >
          <span>장바구니 채우러 가기</span>
        </Link>
      </section>
    );
  }

  return (
    <section className="flex justify-center gap-5 flex-col md:flex-row">
      <div className="w-[480px] md:w-[630px] flex flex-col gap-6 ">
        <div className="border-1 px-5 py-3 rounded-2xl flex justify-between items-center border-gray-550">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="allcheck"
              className="w-4 h-4"
              checked={allcheck}
              onChange={handleAllCheck}
            />
            <label htmlFor="allcheck" className="text-lg text-gray-550">
              모두 선택
            </label>
          </div>
          <CartAllDeleteButton checkedItems={checkedItems} />
        </div>

        {/* 장바구니 목록 영역 */}
        {cartData ? (
          <ul className="flex flex-col border-1 px-5 pt-3 rounded-2xl">
            {cartData?.item.map(item => {
              return (
                <CartItem
                  key={item._id}
                  id={item._id}
                  color={item.color || null}
                  size={item.size || null}
                  name={item.product.name}
                  img={item.product.image.path}
                  price={item.product.price}
                  quantity={item.quantity}
                  productId={item.product_id}
                  token={token}
                  // checkedItem배열에 포함되어 있냐 없냐로checked설정
                  isChecked={checkedItems?.includes(item._id)}
                  handleItemCheck={handleItemCheck}
                  handleQuantity={handleQuantity}
                />
              );
            })}
          </ul>
        ) : (
          <CartListSkeleton count={3} />
        )}
      </div>
      <aside className="w-[480px] md:w-[630px] flex flex-col gap-6">
        <CartAddressInput />
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
        <CartPurchaseButton
          price={cartData?.cost.products}
          cartData={cartData}
        />
      </aside>
    </section>
  );
}
