'use client';

import LikeButton from './Like_button';
import DropdownSize from '../Dropdown/Dropdown_size';
import ButtonBasic from '../Buttons/Button_basic';
import { ChangeEvent, useState } from 'react';
import { ShoppingFormType } from '@/types/shopping_detail';

export default function ShoppingForm({
  title,
  originalPrice,
  price,
  stars,
  color,
  size,
  reviewCount,
  avg,
}: ShoppingFormType) {
  // 폼태그 상태관리
  const [option, setOption] = useState({
    size: '',
    color: '',
    quantity: 1,
  });

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

  //할인율
  const discountRate = Math.round(
    ((originalPrice - price) / originalPrice) * 100,
  );

  return (
    <section className="min-w-[500]">
      <header className="flex items-center gap-28 relative">
        <h2 className="text-2xl font-semibold mt-4">{title}</h2>
        <LikeButton isLiked={false} position={'absolute right-20 top-3'} />
      </header>

      {/* 평점, 리뷰 */}
      {/* 리뷰가 하나도 없을떄 처리 */}
      <p className="flex gap-2 items-center">
        {avg ? (
          <>
            <span className="flex gap-[1px]">{stars[5 - Math.round(avg)]}</span>
            <span className="font-bold text-xl" aria-label="5점 만점에 4점">
              {avg.toFixed(1)}
            </span>
          </>
        ) : (
          <>
            <span className="flex gap-[1px]">
              {
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.85419 2.53038C7.82887 -0.469378 12.0727 -0.469378 13.0474 2.53038C13.4833 3.87191 14.7334 4.78019 16.144 4.78019C19.2981 4.78019 20.6096 8.81634 18.0578 10.6703C16.9166 11.4994 16.4391 12.969 16.875 14.3106C17.8497 17.3103 14.4164 19.8048 11.8646 17.9508C10.7234 17.1217 9.17817 17.1217 8.03699 17.9508C5.48525 19.8048 2.0519 17.3103 3.02658 14.3106C3.46247 12.969 2.98495 11.4994 1.84378 10.6703C-0.707966 8.81634 0.603456 4.78019 3.75759 4.78019C5.16815 4.78019 6.4183 3.87191 6.85419 2.53038Z"
                    fill="#D9D9D9"
                  />
                </svg>
              }
            </span>
            <span
              className="font-bold text-xl"
              aria-label="아직 점수가 없습니다."
            >
              0
            </span>
          </>
        )}
        <span className="text-[#777777] ">리뷰 {reviewCount}</span>
      </p>

      {/* 가격정보 */}
      <section>
        <h3 className="sr-only">가격정보</h3>
        <p className="pt-1">
          <strong className="text-flame-250 text-2xl" aria-label="할인율">
            {discountRate}%
          </strong>
          <s className="text-[#a7a7a7] text-xl ml-3" aria-label="정가">
            {originalPrice.toLocaleString()}원
          </s>
        </p>
        <p className="text-3xl font-black pt-2" aria-label="할인가">
          {price.toLocaleString()}
          <span className="text-xl font-bold ml-2">원</span>
        </p>
        <dl className="text-[#777777] font-bold w-[160px] flex justify-between pt-6 pb-3">
          <dt>배송</dt>
          <dd>무료배송</dd>
        </dl>
      </section>

      {/* 상품 옵션 선택 영역 */}
      {/* 나중에 셀렉박스 안에 들어올옵션 받아올 예정 */}
      <form action="">
        <fieldset className="w-[400px] border-y-1 border-[#eaeaea]">
          <legend className="sr-only">상품 옵션 선택</legend>
          <div className="w-[400px] border-b-1 border-[#eaeaea] pt-5 pb-2">
            <div className="w-[340px] flex justify-between">
              <label htmlFor="size-select" className="w-[64px] text-center">
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
              <label className="w-[64px] text-center">색상</label>
              <DropdownSize
                option={color}
                onChange={handleColorChange}
                id={'color-select'}
                content={'색상을 선택해주세요'}
              ></DropdownSize>
            </div>
          </div>
          <div className="w-[340px] flex justify-between pt-3 pb-4 items-center">
            <label className="w-[64px] text-center">구매수량</label>

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
        </fieldset>
      </form>

      {/* 구매 버튼 영역 */}
      {/* 장바구니는 zustnad사용해야할듯 */}
      <div className="pt-4 flex gap-3">
        <ButtonBasic
          text={'장바구니'}
          background={'white'}
          color={'flame-250'}
        ></ButtonBasic>
        <ButtonBasic
          text={'바로구매'}
          background={'flame-250'}
          color={'white'}
        ></ButtonBasic>
      </div>
    </section>
  );
}
