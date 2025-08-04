'use client';

import { ChangeEvent, useState } from 'react';
import DropdownSize from '../Dropdown/Dropdown_size';
import ProductCartButton from './Product_cart_button';
import ProductPurchaseButton from './Product_purchase_button';

export default function ShoppingFormTag({
  color,
  size,
  price,
  id,
}: {
  color: string[];
  size: string[];
  price: number;
  id: string;
}) {
  // 폼태그 상태관리
  const [option, setOption] = useState({
    size: '',
    color: '',
    quantity: 1,
  });

  // 이렇게 안하면 next 에러 나더라 ㅠ 언디파인드 일수도 있어서
  const safeOption = {
    size: option.size || '',
    color: option.color || '',
    quantity: option.quantity || 1,
  };

  //사이즈
  function handleSizeChange(e: ChangeEvent<HTMLSelectElement>) {
    setOption({ ...option, size: e.target.value });
  }

  //색상
  function handleColorChange(e: ChangeEvent<HTMLSelectElement>) {
    setOption({ ...option, color: e.target.value });
  }

  function increase() {
    setOption(prev => {
      return { ...prev, quantity: option.quantity + 1 };
    });
  }
  //구매수량 1밑으로는 떨어지지 않게
  function decrease() {
    setOption(prev => {
      if (prev.quantity > 1) {
        return { ...prev, quantity: prev.quantity - 1 };
      }
      return prev;
    });
  }

  return (
    <section>
      <div className="w-[400px] border-y-1 border-gray-150">
        {/* 서버액션에 넘겨주기 위한 히든 인풋들 */}

        <div className="w-[400px] border-b-1 border-gray-150 pt-5 pb-2">
          <div className="w-[340px] flex justify-between">
            <label htmlFor="size-select" className="w-16 text-center">
              사이즈
            </label>
            <DropdownSize
              option={size}
              onChange={handleSizeChange}
              id={'size-select'}
              content={'사이즈를 선택해 주세요'}
            ></DropdownSize>
          </div>
          <div className="w-[340px] flex justify-between pt-3">
            <label className="w-16 text-center">색상</label>
            <DropdownSize
              option={color}
              onChange={handleColorChange}
              id={'color-select'}
              content={'색상을 선택해주세요'}
            ></DropdownSize>
          </div>
        </div>
        <div className="w-[340px] flex justify-between pt-3 pb-4 items-center">
          <label className="w-16 text-center">구매수량</label>

          {/* 구매수량 카운터 */}
          <div className="flex gap-10 items-center border-1 border-gray-150 rounded-md overflow-hidden w-[170px]">
            <button
              className="bg-flame-250 p-2 w-8 text-white cursor-pointer"
              onClick={e => {
                e.preventDefault();
                decrease();
              }}
            >
              -
            </button>
            <span className="flex-1 text-center">{option.quantity}</span>
            <button
              className="bg-flame-250 p-2 w-8 text-white cursor-pointer"
              onClick={e => {
                e.preventDefault();
                increase();
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-end pb-2">
          <span className="text-xl ">TotalPrice :</span>
          <span className="text-3xl font-bold text-flame-300 w-[120px]">
            {(price * option.quantity).toLocaleString()}
          </span>
        </div>
      </div>
      {/* 구매 버튼 영역 */}
      <div className="pt-4 flex gap-3">
        {/* 장바구니 버튼 폼 */}
        <ProductCartButton option={safeOption} id={id ?? ''} />
        {/* 구매버튼 폼 */}
        <ProductPurchaseButton option={safeOption} id={id ?? ''} />
      </div>
    </section>
  );
}
