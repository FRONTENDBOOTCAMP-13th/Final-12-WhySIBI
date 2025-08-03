'use client';

import { Star } from 'lucide-react'; // lucide가 아니라 lucide-react
import { useState } from 'react';

export default function ReviewStar() {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map(grade => (
          <button key={grade} onClick={() => setRating(grade)} type="button">
            <Star
              className={`w-7 h-7 ${
                rating >= grade ? 'text-[#EB692F]' : 'text-gray-300'
              }`}
              fill="currentColor"
            />
          </button>
        ))}
      </div>
      <input type="hidden" name="rating" value={rating} />
    </div>
  );
}
