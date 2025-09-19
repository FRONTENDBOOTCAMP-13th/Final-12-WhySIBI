'use server';

import { ApiResPromise } from '@/types';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import type { NotificationItem } from './toast_alarm';

function decodeJwt(token?: string) {
  try {
    if (!token) return null;
    const [, payload] = token.split('.');
    return JSON.parse(Buffer.from(payload, 'base64url').toString());
  } catch {
    return null;
  }
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

type NotificationExtra = {
  postId?: string | number;
  replyId?: number;
  url?: string;
  mentionName?: string;
  mentioner?: { _id: number; name: string | null; image: string | null };
  [k: string]: unknown;
};

/** 알림 등록 */
export async function createNotification(body: {
  type?: string;
  target_id: number;
  content: string;
  channel?: string;
  extra?: NotificationExtra;
  accessToken?: string;
}): ApiResPromise<NotificationItem> {
  try {
    const { accessToken, ...safeBody } = body;
    const cookieToken = (await cookies()).get('accessToken')?.value || '';
    const token = accessToken || cookieToken;

    const res = await fetch(`${API_URL}/notifications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-cache',
      body: JSON.stringify(safeBody),
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      const text = await res.text();
      return { ok: 0, message: `알림 조회 실패 (${res.status}) ${text}` };
    }
    return res.json();
  } catch (e) {
    console.error(e);
    return { ok: 0, message: '알림 조회 중 네트워크 오류가 발생했습니다.' };
  }
}

/** 내 알림 목록 가져오기 */
export async function getNotifications(page = 1, limit = 10) {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value || '';
  try {
    const res = await fetch(`${API_URL}/notifications?page=${page}&limit=${limit}`, {
      method: 'GET',
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${token}`, 
      },
      cache: 'no-store',
      next: { revalidate: 0, tags: ['notifications'] },
    });
    return res.json();
  } catch (e) {
    console.error(e);
    return { ok: 0, message: '알림 목록 조회 실패' };
  }
}

/** 알림 전체 읽음 처리 */
export async function readAllNotifications(token: string): ApiResPromise<{ ok: 1 | 0 }> {
  try {
    const res = await fetch(`${API_URL}/notifications/read`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Client-Id': CLIENT_ID,
      },
    });
    const data = await res.json();

    if (data.ok) {
      revalidatePath('/notification'); // 페이지 갱신
    }
    return data;
  } catch (e) {
    console.error(e);
    return { ok: 0, message: '전체 읽음 처리 중 네트워크 오류가 발생했습니다.' };
  }
}

/** 특정 알림 읽음 처리 */
export async function readNotification(id: number) {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value || '';
  const me = decodeJwt(token);
  console.log('[READ] try', { notifId: id, asUser: me?._id }); // ← 여기서 asUser=8 확인

  try {
    const res = await fetch(`${API_URL}/notifications/${id}/read`, {
      method: 'PATCH',
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${token}`,        // ✅ 수신자(현재 세션)의 토큰
      },
      cache: 'no-store',
      next: { revalidate: 0 },
    });
    const data = await res.json();
      console.log('[READ] result', { status: res.status, data }); // 404면 서버 검증 실패 확정
    if (data.ok) revalidatePath('/notification');
    return data;
  } catch (e) {
    console.error(e);
    return { ok: 0, message: '읽음 처리 중 네트워크 오류' };
  }
}
