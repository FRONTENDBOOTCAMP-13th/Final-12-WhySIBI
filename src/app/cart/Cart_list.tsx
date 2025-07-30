'use client';

import Image from 'next/image';
import CartDeleteButton from './list_delete_button';
import { CartListProps } from '@/types/cart';
import { useEffect, useState } from 'react';

export default function CartList({
  id,
  color,
  size,
  name,
  img,
  price,
  quantity,
  token,
}: CartListProps) {
  const [count, setCount] = useState(quantity);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 1) setCount(count - 1);
    return count;
  }

  useEffect(() => {
    if (!token) return;
    async function fetchCart() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/carts/${id}`,
        {
          method: 'PATCH',
          body: JSON.stringify({
            quantity: count,
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
    }
    fetchCart();
  }, [token, id, count]);

  return (
    <li className="flex gap-4 px-5 pt-6 pb-6 border-b-1 last:border-b-0">
      <input type="checkbox" id="check" className="w-5 h-5" />
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
            <span>{count}</span>
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
