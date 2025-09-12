'use client';
import { useRef, useState } from 'react';
import { QNA } from './qnaData';
import Image from 'next/image';

export default function Chatbot() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>(
    [],
  );
  const [open, setOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  //스크롤 아래로
  const scrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  const handleClick = (q: string, a: string) => {
    setMessages(prev => [
      ...prev,
      { role: 'user', text: q },
      { role: 'bot', text: a },
    ]);
    setTimeout(scrollDown, 0);
  };

  const handleToggle = () => {
    if (!open) {
      setMessages([
        {
          role: 'bot',
          text: '안녕하세요! 나혼산 이용안내 봇 입니다. 궁금한 사항을 아래 버튼으로 선택해주세요 😊',
        },
      ]);
      setTimeout(scrollDown, 0);
    }
    setOpen(!open);
  };

  const handleClose = () => {
    setMessages([]);
    setOpen(false);
  };

  return (
    <>
      {/* 챗봇 버튼 */}
      <button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 btn-gradient-animate cursor-pointer z-50 p-4 rounded-full shadow-lg"
      >
        <div className="no-invert">
          <Image
            src="/image/left_cat_button_dark.svg"
            alt=""
            width="30"
            height="30"
            className="object-cover z-60"
          />
        </div>
      </button>

      {/* 챗봇 */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 h-[500px] z-50 bg-white shadow-xl rounded-xl flex flex-col overflow-hidden">
          <div className="p-3 bg-livealone-vanilla  text-livealone-cal-poly-green font-bold flex justify-between items-center">
            <span>나혼산 이용안내 (FAQ)</span>
            <button
              onClick={handleClose}
              className=" px-2 py-1 z-60 rounded transition-colors text-sm cursor-pointer text-gray-400 font-normal"
            >
              close
            </button>
          </div>

          {/* 대화 창*/}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50 scroll-smooth"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-xl text-sm ${
                  m.role === 'user'
                    ? 'bg-livealone-columbia-blue max-w-[35%]  ml-auto text-center ' //user
                    : 'bg-gray-200 mr-auto max-w-[75%] text-left' //bot
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* 버튼 */}
          <div className="p-2 border-t border-gray-300 bg-white grid grid-cols-2 gap-2">
            {QNA.map((b, i) => (
              <button
                key={i}
                onClick={() => handleClick(b.q, b.a)}
                className="bg-livealone-columbia-blue hover:bg-sky-100  cursor-pointer  p-2 rounded-lg text-sm"
              >
                {b.q}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
