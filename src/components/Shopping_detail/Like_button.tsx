import Image from 'next/image';

export default function LikeButton({
  isLiked,
  position,
}: {
  isLiked: boolean;
  position: string;
}) {
  return (
    <button
      className={`w-8 h-8 ${position} rounded-full flex justify-center cursor-pointer  ${isLiked ? 'bg-[var(--color-flame-250)]' : 'bg-black'}`}
    >
      <Image src="/image/heartIcon.svg" alt="찜하기" width={20} height={20} />
    </button>
  );
}
