import { ApiRes, ApiResPromise, User } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.WHY_SIBI_CLIENT_ID || '';
/**
 * 회원가입 함수
 * @param state - 이전 상태(사용하지 않음)
 * @param formData - 회원가입 폼 데이터(FormData 객체)
 * @returns 회원가입 결과 응답 객체
 * @description
 * 첨부파일(프로필 이미지)이 있으면 파일 업로드 후, 회원가입 API를 호출합니다.
 */
export async function createUser(
  state: ApiRes<User> | null,
  formData: FormData,
): ApiResPromise<User> {
  let res: Response;
  let data: ApiRes<User>;

  const attach = formData.get('profile') as File;

  // 회원가입 요청 바디 생성
  const body = {
    type: formData.get('type') || 'user',
    name: formData.get('name'),
    nickname: formData.get('nickname'),
    email: formData.get('email'),
    password: formData.get('password'),
    phone: formData.get('phone_number'),
    ['extra.addressBook']: formData.get('address'),
    // ...(image ? { image } : {}),
  };

  // 회원가입 API 호출
  res = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Client-Id': CLIENT_ID,
    },
    body: JSON.stringify(body),
  });

  data = await res.json();
  return data;
}
