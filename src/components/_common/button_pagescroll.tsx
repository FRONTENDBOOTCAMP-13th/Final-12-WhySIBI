'use client';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

export default function PageScrollButtons() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-50 right-6 flex flex-col gap-3 z-50">
      <button
        onClick={scrollToTop}
        className="p-3 rounded-full  bg-livealone-vanilla stroke-1 text-livealone-cal-poly-green shadow-lg hover:bg-livealone-cal-poly-green hover:text-livealone-vanilla transition"
        aria-label="페이지 업"
      >
        <div className="no-invert">
          <FaArrowUp />
        </div>
      </button>
      <button
        onClick={scrollToBottom}
        className="p-3 rounded-full bg-livealone-vanilla stroke-1 text-livealone-cal-poly-green shadow-lg hover:bg-livealone-cal-poly-green hover:text-livealone-vanilla transition"
        aria-label="페이지 다운"
      >
        <div className="no-invert">
          <FaArrowDown />
        </div>
      </button>
    </div>
  );
}
