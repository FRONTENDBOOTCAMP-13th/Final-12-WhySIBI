'use server';
import { upLoadFile } from '@/data/actions/file';
import { ApiRes, ApiResPromise, User } from '@/types';
import axios, { AxiosResponse } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

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
  let res: AxiosResponse;
  let data: ApiRes<User>;
  try {
    const attach = formData.get('attach') as File;
    let image;
    if (attach.size > 0) {
      const fileRes = await upLoadFile(formData);
      if (fileRes.ok) {
        image = fileRes.item[0].path;
      } else {
        return fileRes;
      }
    }
    // 회원가입 요청 바디 생성
    const body = {
      type: formData.get('type') || 'user',
      name: formData.get('name'),
      nickname: formData.get('nickname'),
      email: formData.get('email'),
      password: formData.get('password'),
      phone: formData.get('phone_number'),
      extra: {
        birthday:
          formData.get('birth_year') +
          '-' +
          formData.get('birth_month') +
          '-' +
          formData.get('birth_day'),
        preference: formData.getAll('preference'),
        addressBook: [
          {
            name: formData.get('address_name'),
            value: formData.get('address_value'),
          },
        ],
      },
      ...(image ? { image } : {}),
    };
    console.log('전송할 preference:', formData.getAll('preference'));
    // 회원가입 API 호출
    res = await axios.post(`${API_URL}/users`, body, {
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
    });

    data = res.data;
  } catch (error) {
    // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제가 발생했습니다.' };
  }
  return data;
}

/**
 * 회원 정보 변경 함수
 * @param state - 이전 상태(사용하지 않음)
 * @param formData - 회원가입 폼 데이터(FormData 객체)
 * @returns 회원가입 결과 응답 객체
 * @description
 * 첨부파일(프로필 이미지)이 있으면 파일 업로드 후, 회원가입 API를 호출합니다.
 */

export async function EditUserInfo(
  state: ApiRes<User> | null,
  formData: FormData,
): ApiResPromise<User> {
  let res: AxiosResponse;
  let data: ApiRes<User>;

  try {
    const attach = formData.get('attach') as File;
    let image;
    if (attach.size > 0) {
      const fileRes = await upLoadFile(formData);
      console.log(`fileRes`, fileRes);
      if (fileRes.ok) {
        image = fileRes.item[0].path;
      } else {
        return fileRes;
      }
    }
    const token = formData.get('token') as string;
    const userID = formData.get('user_id');
    // 회원정보 수정 요청 바디 생성
    const body = {
      type: formData.get('type') || 'user',
      name: formData.get('name'),
      nickname: formData.get('nickname'),
      email: formData.get('email'),
      password: formData.get('password'),
      phone: formData.get('phone_number'),
      extra: {
        birthday:
          formData.get('birth_year') +
          '-' +
          formData.get('birth_month') +
          '-' +
          formData.get('birth_day'),

        preference: formData.getAll('preference'),
        addressBook: [
          {
            name: formData.get('address_name'),
            value: formData.get('address_value'),
          },
        ],
      },
      ...(image ? { image } : {}),
    };
    // 회원정보 수정 API 호출
    res = await axios.patch(`${API_URL}/users/${userID}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
    });

    return { ok: 1, item: res.data.item };
  } catch (error) {
    // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제가 발생했습니다.' };
  }
  return data;
}
/**
 * 회원 정보 가져오는 함수
 * @param state - 이전 상태(사용하지 않음)
 * @param formData - 회원가입 폼 데이터(FormData 객체)
 * @returns 회원가입 결과 응답 객체
 * @description
 * 첨부파일(프로필 이미지)이 있으면 파일 업로드 후, 회원가입 API를 호출합니다.
 */

export async function GetUserInfo(userId: string): ApiResPromise<User> {
  let res: AxiosResponse;
  try {
    // 회원정보  API 호출
    res = await axios.get(`${API_URL}/users/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
    });
    return { ok: 1, item: res.data.item };
  } catch (error) {
    // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제가 발생했습니다.' };
  }
}

/**
 * 로그인 함수
 * @param state - 이전 상태(사용하지 않음)
 * @param formData - 로그인 폼 데이터(FormData 객체)
 * @returns 로그인 결과 응답 객체
 * @description
 * 이메일/비밀번호로 로그인 API를 호출합니다.
 */
export async function login(
  state: ApiRes<User> | null,
  formData: FormData,
): ApiResPromise<User> {
  const body = Object.fromEntries(formData.entries());
  console.log(body);
  let res: AxiosResponse;
  let data: ApiRes<User>;

  try {
    res = await axios.post(`${API_URL}/users/login`, body, {
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
    });
    data = res.data;
  } catch (error) {
    // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제가 발생했습니다.' };
  }

  return data;
}
