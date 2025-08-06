'use client';

import { Star } from 'lucide-react';
import { useState } from 'react';

export default function ReviewStar() {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex flex-col gap-1 sm:gap-2 mt-3 sm:mt-4 md:mt-2">
      <div className="flex items-center gap-0.5 sm:gap-1 md:gap-1.5">
        {[1, 2, 3, 4, 5].map(grade => (
          <button key={grade} onClick={() => setRating(grade)} type="button">
            <Star
              className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${
                rating >= grade ? 'text-[#EB692F]' : 'text-gray-300'
              } transition-colors duration-200`}
              fill="currentColor"
            />
          </button>
        ))}
      </div>
      <input type="hidden" name="rating" value={rating} />
    </div>
  );
}
