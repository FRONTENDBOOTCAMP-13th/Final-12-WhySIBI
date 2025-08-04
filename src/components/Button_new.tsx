'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ButtonNew({ boardType }: { boardType: string }) {
  const router = useRouter();
  const handleClick = () => {
    if (!boardType) {
    alert("잘못된 게시판입니다.");
    return;
  }
  router.push(`/community/${boardType}/new`);
  };

  return (
    <div className="relative w-[60px] h-[60px] overflow-hidden rounded-3xl bg-gradient-to-r from-livealone-vanilla to-livealone-columbia-blue group active:translate-y-0.5 active:opacity-50">
      <button onClick={handleClick} className="w-full h-full relative z-10 cursor-pointer btn-gradient-animate">
        <Image
          src="/image/community_icon/pencilIcon.svg"
          width={76}
          height={76}
          className="absolute w-full h-full p-3.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:duration-300 group-hover:scale-105 animate-pencil-zigzag"
          alt="글쓰기(연필)"
        />
      </button>
    </div>
  );
}
