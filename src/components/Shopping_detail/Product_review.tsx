'use client';

import { useState } from 'react';
import StarBar from './Star_bar';
import ReviewList from './Review_list';
import { ProductReviewProps } from '@/types/shopping_detail';

const mockData = [
  {
    id: 1,
    star: 1,
    profile: '/image/profile.png',
    author: '농담곰 운동 좀 그만해',
    content:
      ' 이거 사지마시고 다른거 사세요 소음이 진짜 기분 나쁘게 나요 진짜 짜증남.',
    image: '/image/main_banner_image_5.png',
    date: '2020.10.20',
  },
  {
    id: 2,
    star: 5,
    profile: '/image/profile.png',
    author: '허허',
    content: '요즘 더워서 나보다 고양이가 먼저 더위를 호소하더라고요 😮😂',
    image: '/image/main_banner_image_3.png',
    date: '2020.02.01',
  },
  {
    id: 3,
    star: 1,
    profile: '/image/profile.png',
    author: '치악산복숭아당도최고',
    content: '글쎄요 그냥 그럼',
    image: '',
    date: '2020.11.11',
  },
  {
    id: 4,
    star: 4,
    profile: '/image/profile.png',
    author: '최강롯데자이언츠',
    content: '좋아요 야구 보면서 선풍기 바람쐬기 좋아요',
    image: '',
    date: '2000.10.20',
  },
];

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
          <StarBar rank={4} count={343} score={5}></StarBar>
          <StarBar rank={2} count={44} score={4}></StarBar>
          <StarBar rank={3} count={55} score={3}></StarBar>
          <StarBar rank={1} count={12} score={2}></StarBar>
          <StarBar rank={5} count={999} score={1}></StarBar>
        </div>
      </div>

      {/* 댓글 영역 */}
      <ul className="pb-12">
        {mockData.map(item => {
          return (
            <ReviewList
              key={item.id}
              stars={stars} //별점 1-5 들어있는 배열
              star={5 - item.star} //별점 배열의 인덱스
              profile={item.profile}
              author={item.author}
              content={item.content}
              image={item.image}
              date={item.date}
            ></ReviewList>
          );
        })}
      </ul>
    </section>
  );
}
