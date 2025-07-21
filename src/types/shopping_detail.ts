import { ReactElement } from 'react';

export interface ProductReviewProps {
  stars: ReactElement[][];
}

export interface ReviewListProps {
  stars: ReactElement[][];
  profile: string;
  author: string;
  content: string;
  image?: string;
  date: string;
  star: number;
}
