import MyInquryList from '@/components/my_inqury_list/my_inqury_list';
import { GetMyInqury } from '@/data/actions/inqury';
import { cookies } from 'next/headers';

export default async function EditInfo() {
  const token = (await cookies()).get('accessToken');
  const res = await GetMyInqury(token?.value as string);

  return res.ok === 1 ? (
    <MyInquryList MyInqury={res.item} />
  ) : (
    <>
      <div>문의 내역이 없습니다</div>
    </>
  );
}
