'use client';

import { ReactElement, useState } from 'react';
import StarBar from './Star_bar';
import Image from 'next/image';

interface ProductReviewProps {
  stars: ReactElement[][];
}

export default function ProductReview({ stars }: ProductReviewProps) {
  const selectedStar = [...stars, '별점순'];
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(selectedStar[5]);
  return (
    <section className="max-w-[1028px] mx-auto mt-12 ">
      <div className="flex justify-between border-b-2 pb-3 border-[#a5a5a5]">
        <h3 className="text-xl font-semibold text-[#777777]">리뷰 876</h3>
        <div className="flex  items-center gap-8">
          <span>추천순</span>
          <span>최근등록순</span>
          <span>사진리뷰</span>
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
          <StarBar rank={3} count={343} score={5}></StarBar>
          <StarBar rank={4} count={44} score={4}></StarBar>
          <StarBar rank={3} count={55} score={3}></StarBar>
          <StarBar rank={2} count={12} score={2}></StarBar>
          <StarBar rank={1} count={999} score={1}></StarBar>
        </div>
      </div>
      {/* 댓글 영역 */}
      <ul>
        <li className="flex">
          <div>
            <Image
              className="w-10 h-10 rounded-full border-1 "
              src="/image/profile.png"
              alt="프로필 이미지"
              width={60}
              height={60}
            ></Image>
            <div>
              <h4>농담곰 운동 좀 그만해</h4>
              <span className="flex">{stars[4]}</span>
              <time dateTime="2020-01-01">2020.01.01</time>
            </div>
          </div>
          <p>
            이거 사지마시고 다른거 사세요 소음이 진짜 기분 나쁘게 나요 진짜
            짜증남.
            <Image
              src="/image/main_banner_image_4.png"
              alt="리뷰사진"
              className="w-30 h-30 rounded-xl"
              width={60}
              height={60}
            ></Image>
            {/* ㅇㄹㅇㄹㅇ */}
          </p>
          <button></button>
        </li>
      </ul>
    </section>
  );
}
