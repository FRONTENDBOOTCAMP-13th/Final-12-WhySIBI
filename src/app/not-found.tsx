'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <main className="bg-white p-20 h-150 flex justify-center">
        <div className="flex items-center justify-center flex-col">
          <Image
            src="/image/category_icon/furniture.svg"
            alt="찾는 페이지가 없습니다."
            width="150"
            height="150"
            className="opacity-20 mt-5 mb-2.5"
          />
          <p className="text-center mt-3 font-bold text-gray-500 text-xl">
            앗! 페이지를 찾을 수 없어요
          </p>
          <p className="text-center mt-3 text-gray-400 text-sm mb-5">
            존재하지 않는 주소를 입력하셨거나
            <br />
            요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
          </p>
          <div className="flex gap-3 mt-3 font-semibold ">
            <button
              onClick={() => router.back()}
              className="cursor-pointer border-2 rounded-sm p-1 px-10 text-livealone-cal-poly-green border-(var(#26422a))"
            >
              이전으로
            </button>
            <Link
              href="/"
              className="border-2 rounded-sm p-1 px-10  text-livealone-flame"
            >
              메인으로
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
