'use client';

import Image from 'next/image';
import CartDeleteButton from './Cart_delete_button';
import { CartListProps } from '@/types/cart';
import { useEffect } from 'react';

export default function CartItem({
  id,
  color,
  size,
  name,
  img,
  price,
  quantity,
  token,
  isChecked,
  handleItemCheck,
  handleQuantity,
}: CartListProps) {
  function increase() {
    handleQuantity(id, quantity + 1);
  }

  function decrease() {
    if (quantity > 1) {
      handleQuantity(id, quantity - 1);
    }
    return quantity;
  }

  function handleCheckChange(e: React.ChangeEvent<HTMLInputElement>) {
    handleItemCheck(id, e.target.checked);
  }

  //상품 수량 수정을 위한 patch로직
  //api를 그때그때 호출하는것 방지 하기 위해 수량 선택후 1초 딜레이줌
  useEffect(() => {
    if (!token) return;
    const timeoutId = setTimeout(async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/carts/${id}`,
          {
            method: 'PATCH',
            body: JSON.stringify({
              quantity: quantity,
            }),
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
              'Client-Id': 'febc13-final12-emjf',
            },
          },
        );
        const data = await response.json();
        console.log('된건가', data);
      } catch (err) {
        console.error(err);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [token, id, quantity]);

  return (
    <li className="flex gap-4 px-5 pt-6 pb-6 border-b-1 last:border-b-0">
      <input
        type="checkbox"
        id={`check-${id}`}
        className="w-5 h-5"
        //checkedItems배열에 포함되어 있냐없냐를 기준으로 checked설정
        checked={isChecked}
        onChange={handleCheckChange}
      />
      <label htmlFor="check" className="sr-only">
        선택
      </label>
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}/${img}`}
        className="w-30 h-33 rounded-md"
        width={80}
        height={80}
        alt="상품사진"
      ></Image>
      <div className="flex-1">
        <h3 className="text-xl font-bold pb-2">{name}</h3>
        <p className="text-gray-550 text-sm pb-1">
          옵션 | {size} / {color}
        </p>
        <p className="text-gray-550 text-sm pb-3">배송 | 무료</p>
        <strong className="block text-xl font-bold text-right pb-3">
          {price.toLocaleString()}원
        </strong>
        <div className="flex justify-end gap-6">
          <div className="border-2 rounded-3xl text-button-color w-24 h-9 font-bold flex justify-center items-center">
            <button className="flex-1 cursor-pointer" onClick={decrease}>
              -
            </button>
            <span>{quantity}</span>
            <button className="flex-1 cursor-pointer" onClick={increase}>
              +
            </button>
          </div>

          <CartDeleteButton id={id} />
        </div>
      </div>
    </li>
  );
}
