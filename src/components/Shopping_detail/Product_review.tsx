'use client';

import { useState } from 'react';
import StarBar from './Star_bar';
import ReviewList from './Review_list';
import { ProductReviewProps } from '@/types/shopping_detail';

export default function ProductReview({ stars, replies }: ProductReviewProps) {
  const selectedStar = [...stars, '별점순'];
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(selectedStar[5]);

  return (
    <section className="max-w-[1028px] mx-auto mt-12 ">
      <div className="flex justify-between border-b-2 pb-3 border-[#a5a5a5]">
        <h3 className="text-xl font-semibold text-[#777777]">
          리뷰 {replies.length}
        </h3>
        <div className="flex  items-center gap-8">
          <button className="cursor-pointer">추천순</button>
          <button className="cursor-pointer">최근등록순</button>
          <button className="cursor-pointer">사진리뷰</button>
          {/* 별점 셀렉박스 */}
          <div className="selectBox cursor-pointer inline-block">
            <div
              onClick={() => {
                setActive(!active);
              }}
              className="selected w-[110px] h-[32px] flex items-center justify-between px-3  border-2 border-[#c7c7c7] rounded-md"
            >
              <div className="selected-value flex w-16">{selected}</div>
              <div className="w-[13px] h-[13px]">
                <svg
                  className={`w-full h-full ${active ? 'scale-y-[-1] transition-all duration-100 ease-in' : ''}`}
                  viewBox="0 0 30 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 26L0.27757 0.499999L29.7224 0.499996L15 26Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
            </div>
            <ul
              className={`optionList absolute p-2 w-[110px] rounded-md bg-white  ${active ? '' : 'max-h-0 hidden'}`}
            >
              {stars.map((star, index) => {
                return (
                  <li
                    key={index}
                    className="flex gap-[2px] hover:bg-livealone-columbia-blue"
                    onClick={() => {
                      setSelected(star);
                      setActive(!active);
                    }}
                  >
                    {star}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-vanilla-300 flex min-h-[188px] m-12 rounded-xl items-center gap-25 justify-center">
        {/* 별점 평균 0-4까지 넣어줘야함 db 로 받아올수 있겠지..?*/}
        <span className="flex scale-200 transform origin-center gap-1">
          {stars[4]}
        </span>
        <span className="text-5xl font-extrabold">4.9</span>
        <div className="flex gap-10">
          {/* 순위를 1-5까지 넣으면 됩니당. */}
          <StarBar rank={4} count={343} score={5}></StarBar>
          <StarBar rank={2} count={44} score={4}></StarBar>
          <StarBar rank={3} count={55} score={3}></StarBar>
          <StarBar rank={1} count={12} score={2}></StarBar>
          <StarBar rank={5} count={999} score={1}></StarBar>
        </div>
      </div>

      {/* 댓글 영역 */}
      {/* 타입오류, 이미지 깨짐 */}
      <ul className="pb-12">
        {replies.map(item => {
          console.log('아이템임', item);
          return (
            <ReviewList
              key={item._id}
              stars={stars} //별점 1-5 들어있는 배열
              star={5 - item.extra.star} //별점 배열의 인덱스
              profile={item.user.image}
              author={item.user.name}
              content={item.content}
              image={item.extra.image?.path}
              date={item.extra.date}
            ></ReviewList>
          );
        })}
      </ul>
    </section>
  );
}
