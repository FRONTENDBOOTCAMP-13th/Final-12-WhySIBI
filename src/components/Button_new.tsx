'use client';
import { useRouter } from 'next/navigation';

export default function ButtonNew() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/showRoom/new');  // 🔥 /app/new/ 경로로 이동
  };

  return (
    <div className="relative w-[60px] h-[60px] overflow-hidden rounded-3xl bg-gradient-to-r from-livealone-vanilla to-livealone-columbia-blue group active:translate-y-0.5 active:opacity-50">
      <button onClick={handleClick} className="w-full h-full relative z-10 cursor-pointer btn-gradient-animate">
        <img
          src="/image/community_icon/pencilIcon.svg"
          className="absolute w-full h-full p-3.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:duration-300 group-hover:scale-105 animate-pencil-zigzag"
          alt="연필"
        />
      </button>
    </div>
  );
}
