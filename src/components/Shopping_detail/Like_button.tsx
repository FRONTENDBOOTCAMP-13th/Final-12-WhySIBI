'use client';
import Image from 'next/image';

export default function LikeButton({
  myBookmarkId,
  handleBookmark,
}: {
  isLiked: boolean;
  myBookmarkId: number | undefined;
  handleBookmark: () => void;
}) {
  return (
    <button
      className={`w-8 h-8 items-center pt-3 rounded-full flex justify-center cursor-pointer`}
      onClick={handleBookmark}
    >
      <Image
        src={
          myBookmarkId !== undefined
            ? '/image/community_icon/heartIcon_active.svg'
            : '/image/community_icon/heartIcon.svg'
        }
        alt="찜하기"
        width={20}
        height={20}
      />
    </button>
  );
}
