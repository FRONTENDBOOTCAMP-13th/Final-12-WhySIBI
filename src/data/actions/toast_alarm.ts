'use server';

import { cookies } from 'next/headers';
const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

type AddressBookItem = { name: string; value: string };

type APIUserExtra = {
  birthday?: string;
  preference?: string[];
  addressBook?: AddressBookItem[];
  /** 추가로 쓰는 필드 */
  lastToastAt?: string;
  /** 예비 확장 */
  [k: string]: unknown;
};

type APIUser = {
  _id: number;
  extra?: APIUserExtra;
  [k: string]: unknown;
};

type ApiListRes<T> =
  | { ok: 1; item: T[] }
  | { ok: 0; message: string };

type ApiItemRes<T> =
  | { ok: 1; item: T }
  | { ok: 0; message: string };

type NotificationActor = { _id: number; name: string | null; image: string | null };

type NotificationExtra = {
  postId?: string | number;
  replyId?: number;
  url?: string;
  mentionName?: string;
  mentioner?: NotificationActor;
  [k: string]: unknown;
};

type NotificationUser = {
  _id: number;
  name: string;
  email?: string;
  image?: string | null;
};

export type NotificationItem = {
  _id: number;
  type: string;
  target_id: number;
  content: string;
  channel?: string;
  extra?: NotificationExtra;
  user?: NotificationUser;
  isRead?: boolean;
  createdAt: string;
  updatedAt?: string;
  [k: string]: unknown;
};


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
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const d = Number(m[3]);
  const h = Number(m[4]);
  const mi = Number(m[5]);
  const s = Number(m[6]);
  return new Date(y, mo - 1, d, h, mi, s);
}

/** 내 정보(GET /users/{_id}) */
async function getMeByCookie():
  Promise<{ ok: 1; token: string; userId: number; me: APIUser } | { ok: 0 }> {
  const c = await cookies();
  const token = c.get('accessToken')?.value || '';
  const userId = Number(c.get('_id')?.value || 0);
  if (!token || !userId) return { ok: 0 };

  const res = await fetch(`${API_URL}/users/${userId}`, {
    headers: authHeaders(token),
    cache: 'no-store',
  });
  const data: ApiItemRes<APIUser> = await res.json();
  if (data.ok !== 1) return { ok: 0 };
  return { ok: 1, token, userId, me: data.item };
}

/** extra 병합 PATCH /users/{_id} */
async function updateMyExtra(userId: number, token: string, partialExtra: Partial<APIUserExtra>,) {
  // 현재 extra 읽기
  const meRes = await fetch(`${API_URL}/users/${userId}`, {
    headers: authHeaders(token),
    cache: 'no-store',
  });
  const meData: ApiItemRes<APIUser> = await meRes.json();
  const curExtra = (meData.ok === 1 ? meData.item.extra : undefined) ?? {};
  const nextExtra = { ...curExtra, ...partialExtra };

  const res = await fetch(`${API_URL}/users/${userId}`, {
    method: 'PATCH',
    headers: authHeaders(token),
    cache: 'no-store',
    body: JSON.stringify({ extra: nextExtra }),
  });
  return res.json() as Promise<{ ok: 1 | 0; [k: string]: unknown }>;
}

/** 알림 목록 GET */
async function getNotifications(
  token: string,
  page = 1,
  limit = 20,
): Promise<ApiListRes<NotificationItem>> {
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
export async function getToastablesOnce(): Promise<{ toasts: NotificationItem[] }> {
  const auth = await getMeByCookie();
  if (auth.ok !== 1) return { toasts: [] };

  const lastToastAtStr = auth.me.extra?.lastToastAt;
  const lastToastAt = lastToastAtStr ? parseAPITime(lastToastAtStr) : null;

  const noti = await getNotifications(auth.token, 1, 20);
  const items: NotificationItem[] = noti.ok === 1 ? noti.item : [];

  const toasts = items.filter((n) => {
    const created = parseAPITime(n.createdAt);
    return !lastToastAt || created > lastToastAt;
  });

  if (toasts.length > 0) {
    // createdAt이 문자열(시간 오름차순 정렬이 안맞을 수도 있으니 Date로 Max)
    const maxDate = toasts
      .map((n) => parseAPITime(n.createdAt))
      .filter((d) => !Number.isNaN(d.getTime()))
      .sort((a, b) => a.getTime() - b.getTime())
      .at(-1);

    const maxStr = maxDate
      ? (() => {
          // API 포맷으로 되돌릴 필요가 있으면 여기서 포맷; 지금은 서버가 그대로 저장해도 무방하면 원문 사용
          // 가장 최근 알림의 원본 createdAt 문자열을 다시 찾음
          const recent = toasts.reduce<NotificationItem | null>((acc, cur) => {
            if (!acc) return cur;
            const a = parseAPITime(acc.createdAt).getTime();
            const b = parseAPITime(cur.createdAt).getTime();
            return b > a ? cur : acc;
          }, null);
          return recent?.createdAt ?? undefined;
        })()
      : undefined;

    if (maxStr) {
      await updateMyExtra(auth.userId, auth.token, { lastToastAt: maxStr });
    }
  }

  return { toasts };
}