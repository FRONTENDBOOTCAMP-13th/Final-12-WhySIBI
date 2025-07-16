import Image from 'next/image';

function LikeButton({ isLiked }: { isLiked: boolean }) {
  return (
    <button
      className={`w-8 h-8 rounded-full flex justify-center cursor-pointer  ${isLiked ? 'bg-[var(--color-flame-250)]' : 'bg-black'}`}
    >
      <Image src="/image/heartIcon.svg" alt="찜하기" width={20} height={20} />
    </button>
  );
}

export default LikeButton;
