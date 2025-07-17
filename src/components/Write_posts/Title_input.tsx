'use client';
import { useState } from 'react';

export default function TitleInput() {
  const [title, setTitle] = useState('');

  return (
    <div className="mt-6 w-[600px] font-variable flex border-b">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
        maxLength={60}
        className="w-full text-xl py-5 font-medium outline-none placeholder-gray-300"
      />
      <div className="p-5 text-right text-lg text-gray-400 bg-white">{title.length}/60</div>
    </div>
  );
}
