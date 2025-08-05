'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqData } from '@/utils/faqData';

export interface FAQItem {
  _id: number;
  type: string;
  question: string;
  answer: string;
}

const categoryTabs = [
  '전체',
  '주문/결제',
  '배송관련',
  '취소/환불',
  '반품/교환',
  '로그인/회원정보',
];

export default function CustomerServicePage() {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const filteredFAQ =
    selectedCategory === '전체'
      ? faqData
      : faqData.filter(item => item.type === selectedCategory);

  const toggleFAQ = (question: string) => {
    setActiveQuestion(activeQuestion === question ? null : question);
  };

  return (
    <div className="max-w-[1280px]  mx-auto my-0 ">
      <div className="flex justify-center p-20 font-variable bg-white">
        <div className="w-[600px]">
          {/* 헤더 */}
          <div className="text-center mb-15">
            <h1 className="text-3xl font-extrabold mb-2 text-livealone-cal-poly-green">
              고객센터
            </h1>
            <p className="text-2xl text-stroke font-extrabold text-livealone-vanilla">
              09:00~18:00
            </p>
            <p className="text-size-sm text-gray-icon mt-5">
              평일: 전체 문의 상담
              <br />
              토요일, 일요일, 공휴일: 휴무
            </p>
            <div className="flex justify-center gap-4 mt-10">
              <a
                href="tel:1234-5678"
                className="rounded-full text-xl text-stroke text-white bg-livealone-columbia-blue border font-extrabold border-cal-poly-green-600 py-[10px] px-[25px] cursor-pointer hover:opacity-80"
              >
                1234-5678
              </a>
              <a
                href="mailto:example@email.com"
                className="rounded-full text-xl text-stroke text-white bg-livealone-columbia-blue border font-extrabold border-cal-poly-green-600 py-[10px] px-[25px] cursor-pointer hover:opacity-80"
              >
                1:1 문의하기
              </a>
            </div>
          </div>

          {/* 가장 많이 하는 질문 */}
          <div className="mb-15 flex justify-center space-x-20">
            <h2 className="text-lg font-bold">가장 많이 하는 질문</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {faqData
                .filter(item => [5, 10, 13, 15].includes(item._id))
                .map(item => (
                  <li
                    key={item.question}
                    onClick={() => {
                      const targetItem = faqData.find(
                        f => f.question === item.question,
                      );
                      if (!targetItem) return;
                      if (
                        selectedCategory !== '전체' &&
                        selectedCategory !== targetItem.type
                      ) {
                        setSelectedCategory(targetItem.type);
                      }
                      setActiveQuestion(prev =>
                        prev === item.question ? null : item.question,
                      );
                    }}
                    className="cursor-pointer hover:underline font-regular text-size-sm"
                  >
                    <span className="text-livealone-cal-poly-green font-extrabold text-size-lg pb-2 flex-col items-center ">
                      Q
                    </span>
                    <span className="ml-3">{item.question}</span>
                  </li>
                ))}
            </ul>
          </div>

          {/* 카테고리 필터 */}
          <div className="mb-6">
            <div className="flex flex-wrap justify-between">
              {categoryTabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => {
                    setSelectedCategory(tab);
                    setActiveQuestion(null); // 카테고리 변경 시 열려 있던 항목 닫기
                  }}
                  className={`border-1 rounded-full px-4 py-2 text-size-sm font-semibold ${
                    selectedCategory === tab
                      ? 'text-black bg-livealone-columbia-blue border-1'
                      : 'text-gray-icon'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ 목록 */}
          <div>
            {filteredFAQ.length === 0 ? (
              <p className="text-sm text-gray-400 text-center">
                해당 카테고리의 FAQ가 없습니다.
              </p>
            ) : (
              filteredFAQ.map(item => (
                <div key={item.question}>
                  <button
                    onClick={() => toggleFAQ(item.question)}
                    className="w-full flex justify-between items-center py-3 px-2 text-left text-sm font-medium border-b border-columbia-blue-100"
                  >
                    <span className="text-livealone-cal-poly-green font-extrabold text-size-xl pb-2">
                      Q
                      <span
                        className={`text-size-md ml-4 ${activeQuestion === item.question ? 'font-extrabold' : 'font-normal'}`}
                      >
                        {item.question}
                      </span>
                    </span>
                    {activeQuestion === item.question ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>
                  <div
                    className={`origin-top transition-all ease overflow-hidden ${
                      activeQuestion === item.question
                        ? 'max-h-[500px] opacity-100 scale-y-100'
                        : 'max-h-0 opacity-0 scale-y-0'
                    }`}
                  >
                    {/* ✅ padding은 안쪽에만 줌 */}
                    <div className="px-10 pt-4 pb-5 bg-columbia-blue-100 text-size-md text-gray-600">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
