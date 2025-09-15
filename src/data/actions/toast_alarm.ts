'use server';

import { cookies } from 'next/headers';
const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

function authHeaders(token?: string) {
  return {
    'Client-Id': CLIENT_ID,
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

function parseAPITime(str?: string | null) {
  if (!str) return new Date(NaN);
  const m = str.match(/^(\d{4})\.(\d{2})\.(\d{2}) (\d{2}):(\d{2}):(\d{2})$/);
  if (!m) return new Date(NaN);
  const [_, y, mo, d, h, mi, s] = m.map(Number);
  return new Date(y, mo - 1, d, h, mi, s);
}

/** 내 정보(GET /users/{_id}) */
async function getMeByCookie() {
  const c = await cookies();
  const token = c.get('accessToken')?.value || '';
  const userId = Number(c.get('_id')?.value || 0);
  if (!token || !userId) return { ok: 0 };

  const res = await fetch(`${API_URL}/users/${userId}`, {
    headers: authHeaders(token),
    cache: 'no-store',
  });
  const data = await res.json();
  return { ok: 1, token, userId, me: data?.item };
}

/** extra 병합 PATCH /users/{_id} */
async function updateMyExtra(userId: number, token: string, partialExtra: Record<string, any>) {
  // 현재 extra 읽기
  const meRes = await fetch(`${API_URL}/users/${userId}`, {
    headers: authHeaders(token),
    cache: 'no-store',
  });
  const meData = await meRes.json();
  const curExtra = (meData?.item?.extra ?? {}) as Record<string, any>;
  const nextExtra = { ...curExtra, ...partialExtra };

  const res = await fetch(`${API_URL}/users/${userId}`, {
    method: 'PATCH',
    headers: authHeaders(token),
    cache: 'no-store',
    body: JSON.stringify({ extra: nextExtra }),
  });
  return res.json();
}

/** 알림 목록 GET */
async function getNotifications(token: string, page = 1, limit = 20) {
  const res = await fetch(`${API_URL}/notifications?page=${page}&limit=${limit}`, {
    headers: authHeaders(token),
    cache: 'no-store',
  });
  return res.json();
}

/**
 * 클라이언트에서 호출:
 * - 새 알림만 돌려주고 (lastToastAt 이후)
 * - 새 알림이 있으면 lastToastAt을 그 중 최댓값으로 즉시 갱신
 */
export async function getToastablesOnce(): Promise<{ toasts: any[] }> {
  const auth = await getMeByCookie();
  if (!auth.ok || !auth.token || !auth.userId) return { toasts: [] };

  const lastToastAtStr: string | undefined = auth.me?.extra?.lastToastAt;
  const lastToastAt = lastToastAtStr ? parseAPITime(lastToastAtStr) : null;

  const noti = await getNotifications(auth.token, 1, 20);
  const items: any[] = noti?.ok ? noti.item : [];

  const toasts = items.filter(n => {
    const created = parseAPITime(n.createdAt);
    return !lastToastAt || created > lastToastAt;
  });

  if (toasts.length > 0) {
    const maxStr = toasts.map(n => n.createdAt).sort().at(-1) as string;
    await updateMyExtra(auth.userId, auth.token, { lastToastAt: maxStr });
  }

  return { toasts };
}
