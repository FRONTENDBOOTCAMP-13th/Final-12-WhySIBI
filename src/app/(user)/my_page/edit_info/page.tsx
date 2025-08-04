import EditInfoForm from '@/components/edit_info_form/EditInfoForm';
import { GetUserInfo } from '@/data/actions/user';
import { cookies } from 'next/headers';

export default async function EditInfo() {
  const token = (await cookies()).get('accessToken');
  const user_id = (await cookies()).get('_id');
  const res = await GetUserInfo(user_id?.value as string);
  return res.ok ? (
    <EditInfoForm user_id={user_id?.value as string} token={token?.value as string} MyInfo={res.item} />
  ) : (
    <>
      <div>회원정보가 없습니다</div>
    </>
  );
}
