'use client';

import { useRecommendStore } from '@/zustand/recommendStore';

export default function RecommendButton({
  rating,
  id,
}: {
  rating: number;
  id: number;
}) {
  const reviewId = String(id);
  const { recommendations, recommended, toggleRecommend } = useRecommendStore();

  const count = recommendations[reviewId] ?? rating;
  const isRecommended = recommended[reviewId] ?? false;

  const handleRecommend = () => {
    toggleRecommend(reviewId, rating);
  };

  return (
    <form action={handleRecommend}>
      <button
        className={`cursor-pointer flex border-1 border-gray-350 h-7 w-31 gap-1  rounded-2xl items-center justify-center absolute bottom-0 right-0  text-sm  ${
          isRecommended
            ? 'bg-flame-250 text-white'
            : 'text-gray-550 hover:bg-gray-50'
        }`}
      >
        <svg
          className="w-5 h-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.94062 23.2859H3.80516C2.65071 23.2859 1.71484 22.365 1.71484 21.229V14.029C1.71484 12.8929 2.65071 11.9719 3.80516 11.9719H6.94062M6.94062 23.2859V11.9719M6.94062 23.2859L18.73 23.2861C19.7723 23.2976 20.664 22.5517 20.8202 21.5375L22.2626 12.2804C22.3547 11.6837 22.1757 11.0773 21.7734 10.6219C21.3708 10.1665 20.7856 9.90792 20.1722 9.91476H14.2567V5.80052C14.2567 4.09635 12.8529 2.71484 11.1212 2.71484L6.94062 11.9719"
            stroke={`${isRecommended ? '#ffffff' : '#999999'}`}
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        도움돼요
        <span>{count}</span>
      </button>
    </form>
  );
}
