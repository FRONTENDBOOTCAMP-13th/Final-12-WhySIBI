'use server';
import ReviewLists from '@/components/reviews/review_list';
import { GetReplie } from '@/data/actions/replies';
import { cookies } from 'next/headers';

export default async function ReviewList() {
  const token = (await cookies()).get('accessToken');
  const res = await GetReplie(token?.value as string);
  return res.ok ? (
    <ReviewLists reviewItem={res.item} />
  ) : (
    <>
      <div className="font-logo text-3xl">리뷰 목록이 없습니다</div>
    </>
  );
}
