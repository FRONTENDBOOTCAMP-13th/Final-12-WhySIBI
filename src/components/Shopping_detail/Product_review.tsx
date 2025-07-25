'use client';

import { useState } from 'react';
import StarBar from './Star_bar';
import ReviewList from './Review_list';
import { ProductReviewProps } from '@/types/shopping_detail';
import Image from 'next/image';
// import CommentItem from '../Detail_posts/CommentItem';

export default function ProductReview({ stars, replies }: ProductReviewProps) {
  const selectedStar = [...stars, '별점순'];
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(selectedStar[5]);

  // 리뷰들의 별점을 받아와서 배열에 저장함
  const repliesStars = [];
  for (let i = 0; i < replies.length; i++) {
    repliesStars.push(replies[i].extra.star);
  }

  //별점의 평균 구하기
  let sum = 0;
  for (let i = 0; i < repliesStars.length; i++) {
    sum += repliesStars[i];
  }
  const avg = sum / repliesStars.length;

  //각 별점을 각각 몇개 있는지 객체 형태로 저장
  const starBoard = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  for (let i = 0; i < repliesStars.length; i++) {
    switch (repliesStars[i]) {
      case 1:
        starBoard[1]++;
        break;
      case 2:
        starBoard[2]++;
        break;
      case 3:
        starBoard[3]++;
        break;
      case 4:
        starBoard[4]++;
        break;
      case 5:
        starBoard[5]++;
        break;
      default:
        console.log('잘못된 별점 입력');
    }
  }

  const sortedByCount = Object.entries(starBoard).sort((a, b) => b[1] - a[1]);
  console.log('정렬됐나?', sortedByCount);
  const maxCount = sortedByCount[0][1];

  return (
    <section className="max-w-[1028px] mx-auto mt-12 ">
      <div className="flex justify-between border-b-2 pb-3 border-[#a5a5a5]">
        <h3 className="text-xl font-semibold text-gray-550">
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
                  className={`w-full h-full transition-transform duration-300 ease-out ${
                    active ? 'rotate-180' : 'rotate-0'
                  }`}
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

      <div className="bg-vanilla-opaque-50 flex min-h-[188px] m-12 rounded-xl items-center gap-25 justify-center">
        {replies.length > 0 ? (
          <>
            <span className="flex scale-200 transform origin-center gap-1">
              {stars[5 - avg]}
            </span>
            <span className="text-5xl font-extrabold">{avg}</span>
            <div className="flex gap-10">
              {/* rank에 순위를 넣으면 높은거 순서대로 게이지가 많이 차있음 */}
              <StarBar
                count={starBoard[5]}
                score={5}
                maxCount={maxCount}
              ></StarBar>
              <StarBar
                count={starBoard[4]}
                score={4}
                maxCount={maxCount}
              ></StarBar>
              <StarBar
                count={starBoard[3]}
                score={3}
                maxCount={maxCount}
              ></StarBar>
              <StarBar
                count={starBoard[2]}
                score={2}
                maxCount={maxCount}
              ></StarBar>
              <StarBar
                count={starBoard[1]}
                score={1}
                maxCount={maxCount}
              ></StarBar>
            </div>
          </>
        ) : (
          <div className="text-3xl font-semibold text-flame-250 flex flex-col items-center gap-4">
            <Image
              src="/image/logo/footer_logo.svg"
              width={60}
              height={60}
              alt="메인로고"
              aria-hidden="true"
            ></Image>
            이 상품의 첫 리뷰를 작성할 기회입니다!
          </div>
        )}
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
