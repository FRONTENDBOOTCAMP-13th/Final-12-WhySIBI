'use server';
import { upLoadFile } from '@/data/actions/file';
import { ApiRes, ApiResPromise, User } from '@/types';
import axios, { AxiosResponse } from 'axios';
import { cookies } from 'next/headers';

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
  let res: Response;
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
    // 회원가입 API 호출
    // res = await axios.post(`${API_URL}/users`, body, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Client-Id': CLIENT_ID,
    //   },
    // });
    res = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
      body: JSON.stringify(body),
    });
    data = await res.json();
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
  let res: Response;
  let data: ApiRes<User>;

  try {
    res = await fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
      body: JSON.stringify(body),
    });
    data = await res.json();

    if (data.ok === 1 && data.item?.token?.accessToken) {
      (await cookies()).set('accessToken', data.item.token.accessToken, {
        maxAge: 60 * 60 * 24 * 1, // 1일
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
      });
      (await cookies()).set('_id', String(data.item._id), {
        maxAge: 60 * 60 * 24 * 1, // 1일
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
      });
      (await cookies()).set('type', String(data.item.type), {
        maxAge: 60 * 60 * 24 * 1, // 1일
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
      });
    }
  } catch (error) {
    // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제가 발생했습니다.' };
  }

  return data;
}
export async function logoutAction() {
  (await cookies()).delete('accessToken');
}


// ========= toast watermark helpers (users/{_id} - extra.lastToastAt) =========

/** API 타임스탬프 포맷: "YYYY.MM.DD HH:mm:ss" */
function formatAPITime(date: Date) {
  const p2 = (v: number) => String(v).padStart(2, '0');
  return `${date.getFullYear()}.${p2(date.getMonth()+1)}.${p2(date.getDate())} ${p2(date.getHours())}:${p2(date.getMinutes())}:${p2(date.getSeconds())}`;
}

/** API 타임 파서 */
function parseAPITime(str?: string | null) {
  if (!str) return new Date(NaN);
  const m = str.match(/^(\d{4})\.(\d{2})\.(\d{2}) (\d{2}):(\d{2}):(\d{2})$/);
  if (!m) return new Date(NaN);
  const [, y, mo, d, h, mi, s] = m.map(Number);
  return new Date(y, mo - 1, d, h, mi, s);
}

/** 쿠키에서 현재 사용자 인증 정보 꺼내기 */
async function getAuthFromCookies() {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value || '';
  const userIdStr = cookieStore.get('_id')?.value || '';
  const userId = Number(userIdStr) || 0;
  return { token, userId };
}

/** 내 현재 user를 GET (권한 필요 시 토큰 포함) */
export async function getMeByCookie(): ApiResPromise<User> {
  try {
    const { token, userId } = await getAuthFromCookies();
    if (!userId) return { ok: 0, message: '로그인 정보가 없습니다.' };
    const res = await fetch(`${API_URL}/users/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      cache: 'no-store',
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
    return { ok: 0, message: '내 정보 조회 실패' };
  }
}

type ExtraPatch = Partial<User['extra']> & { lastToastAt?: string };

/**
 * users/{_id} extra 병합 업데이트
 * (GET으로 extra를 읽어와 partial과 병합 후 PATCH)
 */
export async function updateMyExtra(partialExtra: ExtraPatch): ApiResPromise<User> {
  try {
    const { token, userId } = await getAuthFromCookies();
    if (!userId || !token) return { ok: 0, message: '로그인 필요' };

    // 현재 extra 읽기
    const cur = await getMeByCookie();
    if (!cur.ok || !cur.item) return { ok: 0, message: '내 정보 조회 실패' };
    const curExtra = ((cur.item.extra ?? {}) as ExtraPatch);
    const nextExtra: ExtraPatch = { ...curExtra, ...partialExtra };

    // PATCH /users/{_id}
    const res = await fetch(`${API_URL}/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
      body: JSON.stringify({ extra: nextExtra }),
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
    return { ok: 0, message: '사용자 정보 업데이트 실패' };
  }
}

type MinimalNotification = { createdAt: string };

/**
 * 로그인 직후: 최신 알림 목록을 받아 ‘lastToastAt’ 이후 것만 골라서 반환하고,
 * 새 알림이 있었다면 lastToastAt을 그 중 최댓값으로 올립니다.
 * - notifications: getNotifications()에서 받은 res.item 배열(최신 순 권장)
 * - return: toasts 배열(클라이언트에서 토스트로 노출)
 */
export async function pickNewNotificationsAndBumpToastMark(
  notifications: ReadonlyArray<MinimalNotification> | undefined,
): Promise<{ toasts: MinimalNotification[] }> {
  if (!Array.isArray(notifications) || notifications.length === 0) return { toasts: [] };

  const me = await getMeByCookie();
  const lastToastAtStr =
    me.ok && me.item?.extra && 'lastToastAt' in me.item.extra
      ? (me.item.extra as Partial<User['extra']> & { lastToastAt?: string }).lastToastAt
      : undefined;  
  const lastToastAt = lastToastAtStr ? parseAPITime(lastToastAtStr) : null;

  const toasts = notifications.filter(n => {
    const created = parseAPITime(n?.createdAt);
    if (Number.isNaN(created.getTime())) return false;
    return !lastToastAt || created > lastToastAt;
  });

  if (toasts.length > 0) {
    // 문자열 정렬 == 시간 정렬(이 포맷에서는 안전)
    const maxCreatedAtStr = toasts.map(n => n.createdAt).sort().at(-1);
    if (maxCreatedAtStr) {
      await updateMyExtra({ lastToastAt: maxCreatedAtStr });
    }
  }

  return { toasts };
}

/**
 * 전체 읽음 처리 성공 직후: 중복 토스트 방지용으로 lastToastAt을 현재시각으로 올려두기(선택).
 * 알림 목록을 다시 받아 max(createdAt)로 올리고 싶으면 그 값을 넣어도 됩니다.
 */
export async function bumpToastMarkToNow(): ApiResPromise<User> {
  const now = new Date();
  const stamp = formatAPITime(now);
  return updateMyExtra({ lastToastAt: stamp });
}
