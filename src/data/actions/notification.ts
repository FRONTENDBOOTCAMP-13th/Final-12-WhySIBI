'use server';

import { ApiRes, ApiResPromise } from '@/types';
import { revalidatePath } from 'next/cache';
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

/** 알림 등록 */
export async function createNotification(body: {
  type?: string;
  target_id: number;
  content: string;
  channel?: string;
  extra?: Record<string, any>;
  accessToken: string;
}): ApiResPromise<any> {
  try {
    const res = await fetch(`${API_URL}/notifications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${body.accessToken}`,
      },
      cache: 'no-cache',
      body: JSON.stringify(body),
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
export async function getNotifications(
  token: string,
  page = 1,
  limit = 10,
): ApiResPromise<any[]> {
  try {
    const res = await fetch(`${API_URL}/notifications?page=${page}&limit=${limit}`, {
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${token}`,
      },
      next: { tags: ['notifications'] },
    });
    return res.json();
  } catch (error) {
    console.error(error);
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
export async function readNotification(id: number, token: string): ApiResPromise<{ ok: 1 | 0 }> {
  try {
    const res = await fetch(`${API_URL}/notifications/${id}/read`, {
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
    return { ok: 0, message: '읽음 처리 중 네트워크 오류가 발생했습니다.' };
  }
}