'use server';

import { ApiRes, ApiResPromise } from '@/types';
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
      body: JSON.stringify(body),
    });
    
    return res.json();
  } catch (error) {
    console.error(error);
    return { ok: 0, message: '알림 등록에 실패했습니다.' };
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
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  } catch (error) {
    console.error(error);
    return { ok: 0, message: '전체 읽음 처리 실패' };
  }
}

/** 특정 알림 읽음 처리 */
export async function readNotification(id: number, token: string): ApiResPromise<{ ok: 1 | 0 }> {
  try {
    const res = await fetch(`${API_URL}/notifications/${id}/read`, {
      method: 'PATCH',
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  } catch (error) {
    console.error(error);
    return { ok: 0, message: '개별 읽음 처리 실패' };
  }
}
