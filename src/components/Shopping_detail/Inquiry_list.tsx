'use client';

import { useEffect, useState } from 'react';
import { Inquiry_Detail } from './fetch/Inquiry_detail';
import { InquiryItem } from '@/types/shopping_detail';

interface InquiryListProps {
  item: InquiryItem;
}
export default function InquiryList({ item }: InquiryListProps) {
  const [active, setActive] = useState(false);
  const [replyContent, setReplyContent] = useState(null);

  useEffect(() => {
    async function fetch() {
      if (item.repliesCount > 0) {
        const reply = await Inquiry_Detail(`/${item._id}`);
        setReplyContent(reply.replies[0].content);
      }
    }
    fetch();
  }, [item]);

  return (
    <>
      <li
        onClick={() => {
          setActive(!active);
        }}
        className="flex p-5 border-b-1 border-gray-150 text-gray-550 font-bold items-center cursor-pointer"
      >
        <h4 className=" flex-1 text-center">{item.title}</h4>
        <span className="w-[150px] text-center">{item.user.name}</span>
        <time className="w-[150px] text-center" dateTime={item.createdAt}>
          {item.createdAt.split(' ')[0]}
        </time>
        {replyContent ? (
          <span className="w-[100px] text-center text-flame-250">답변완료</span>
        ) : (
          <span className="w-[100px] text-center">답변대기</span>
        )}

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
          <p className="pt-3 text-gray-550 font-semibold">{item.content}</p>
        </div>
        {/* 대댓글이 있을때만 표시 */}
        {replyContent ? (
          <div className="flex gap-12">
            <span className="text-button-color text-3xl font-bold">A.</span>
            <p className="pt-3 text-gray-550 font-semibold">{replyContent}</p>
          </div>
        ) : (
          ''
        )}
      </article>
    </>
  );
}
