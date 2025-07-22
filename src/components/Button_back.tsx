'use client';
import { useRouter } from 'next/navigation';

export function ButtonBack(){
  const router = useRouter();

  return(
  <>
    <button onClick={() => router.back()} className="cursor-pointer group">
      <img src="/image/community_icon/backIcon.svg" alt="이전페이지" className="opacity-50 w-4 group-hover:opacity-80">
      </img>
      </button>
  </>
  );
}