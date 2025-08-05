//찜 뱃지
'use client';
import Image from 'next/image';

type LikeBadgeProps = {
  isLiked?: boolean;
  onClick?: () => void;
  myBookmarkId: number | undefined;
  handleBookmark: () => void;
};

function LikeBadge({ myBookmarkId, handleBookmark }: LikeBadgeProps) {
  const handleLikeBadgeClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Link의 기본 동작 방지
    e.stopPropagation(); // 이벤트 버블링 방지
    handleBookmark(); // 북마크 기능만 실행
  };
  return (
    <>
      <button
        onClick={handleLikeBadgeClick}
        className={`
          cursor-pointer
        absolute bottom-2 right-2
        w-8 h-8
        flex items-center justify-center
        rounded-[var(--radius-radius-full)]
        ${'bg-gray-300'}`}
      >
        <Image
          src={
            myBookmarkId !== undefined
              ? '/image/community_icon/heartIcon_active.svg'
              : '/image/community_icon/heartIcon.svg'
          }
          alt="찜하기"
          width={16}
          height={16}
        />
      </button>
    </>
  );
}
export default LikeBadge;
