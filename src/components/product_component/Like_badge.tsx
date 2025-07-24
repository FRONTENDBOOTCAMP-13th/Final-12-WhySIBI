//찜 뱃지
'use client';

import Image from 'next/image';

type LikeBadgeProps = {
  isLiked: boolean;
  onClick: () => void;
};

function LikeBadge({ isLiked, onClick }: LikeBadgeProps) {
  return (
    <>
      <button
        onClick={onClick}
        className={`
       absolute bottom-2 right-2
       w-8 h-8
       flex items-center justify-center
       rounded-[var(--radius-radius-full)]
       ${isLiked ? 'bg-[var(--color-flame-200)]' : 'bg-gray-300'}
       `}
      >
        <Image src="/image/heartIcon.svg" alt="찜하기" width={16} height={16} />
      </button>
    </>
  );
}
export default LikeBadge;
