'use client';

import { useState } from 'react';

export default function InquiryList() {
  const [active, setActive] = useState(false);

  return (
    <>
      <li
        onClick={() => {
          setActive(!active);
        }}
        className="flex p-5 border-b-1 border-gray-150 text-gray-550 font-bold items-center cursor-pointer"
      >
        <h4 className=" flex-1 text-center">
          바람세기가 너무 약한데 고장난거 아닌가요?
        </h4>
        <span className="w-[150px] text-center">조현수</span>
        <time className="w-[150px] text-center" dateTime="2020.01.01">
          2020.01.01
        </time>
        <span className="w-[100px] text-center">답변완료</span>
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
      </li>
      <article
        className={`flex flex-col gap-6 bg-vanilla-opaque-50 p-6 w-[1028px] ${active ? '' : 'max-h-0 hidden'}`}
      >
        <div className="flex gap-12 ">
          <span className="text-flame-250 text-3xl font-bold">Q.</span>
          <p className="pt-3 text-gray-550 font-semibold">
            AI 코딩 도구를 활용하면 코드 생성 및 자동화, 개발 워크플로우와의
            통합 등이 가능하며 기존 개발 환경 대비 생산성을 높일 수 있습니다.
            그러나 개발자를 꿈꾸며 학습을하는 예비 개발자에게 AI 코딩 도구는
            양날의 검이 될 수 있습니다. AI 코딩 도구에만 의존하는 주니어
            개발자는 경쟁력을 갖출 수 없기 때문입니다. 오히려 더 깊이 있게
            언어를 학습하고 좋은 질문을 할 수 있도록 문해력(Literacy)을 기르는
            것이 필요합니다. 다만 AI 도구를 완전히 배제하는 것이 아닌 학습을
            위한 파트너로서 활용할 것을 추천합니다.
          </p>
        </div>
        <div className="flex gap-12">
          <span className="text-button-color text-3xl font-bold">A.</span>
          <p className="pt-3 text-gray-550 font-semibold">
            AI 코딩 도구를 활용하면 코드 생성 및 자동화, 개발 워크플로우와의
            통합 등이 가능하며 기존 개발 환경 대비 생산성을 높일 수 있습니다.
            그러나 개발자를 꿈꾸며 학습을하는 예비 개발자에게 AI 코딩 도구는
            양날의 검이 될 수 있습니다. AI 코딩 도구에만 의존하는 주니어
            개발자는 경쟁력을 갖출 수 없기 때문입니다. 오히려 더 깊이 있게
            언어를 학습하고 좋은 질문을 할 수 있도록 문해력(Literacy)을 기르는
            것이 필요합니다. 다만 AI 도구를 완전히 배제하는 것이 아닌 학습을
            위한 파트너로서 활용할 것을 추천합니다.
          </p>
        </div>
      </article>
    </>
  );
}
