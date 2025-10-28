'use client';
import ViewedList from '@/components/recent_viewed/ViewedList';
import { useState } from 'react';

export default function ViewedButton() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(prev => !prev);
  const handleMouseEnter = () => setOpen(true);

  return (
    <div className="fixed z-50 bottom-24 right-6 font-basic">
      <div
        className="relative flex flex-col items-center"
        onMouseEnter={handleMouseEnter}
      >
        {/* 버튼 */}
        <div
          onClick={handleToggle}
          className={`flex flex-col items-center justify-center text-white transition rounded-full shadow-lg cursor-pointer w-14 h-14 ${
            open ? 'bg-livealone-columbia-blue' : 'bg-livealone-vanilla'
          }`}
        >
          👀
          <span className="text-xs font-bold text-livealone-cal-poly-green">
            최근 본
          </span>
        </div>
        {open && (
          <div className="absolute right-0 mb-4 bottom-full animate-slide-up">
            <ViewedList />
          </div>
        )}
      </div>
    </div>
  );
}
