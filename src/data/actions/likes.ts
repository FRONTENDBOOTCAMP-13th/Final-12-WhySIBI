'use server';

import { cookies } from 'next/headers';

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

type BookmarkLikeItem = {
  _id: number;
  target_id: number;
  user_id?: number;
  memo?: string;
  createdAt?: string;
};

async function authHeaders() {
  const token = (await cookies()).get('accessToken')?.value || '';
  return {
    'Client-Id': CLIENT_ID,
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
}

async function listMyPostLikes() {
  const headers = await authHeaders();
  const res = await fetch(`${API_URL}/bookmarks/post?is_like=true`, {
    headers,
    cache: 'no-store',
  });
  return res.json().catch(() => ({ ok: 0 }));
}

async function createPostLike(targetId: number | string) {
  const headers = await authHeaders();
  const res = await fetch(`${API_URL}/bookmarks/post`, {
    method: 'POST',
    headers,
    cache: 'no-store',
    body: JSON.stringify({ target_id: Number(targetId), is_like: true }),
  });
  return res.json().catch(() => ({ ok: 0 }));
}

async function deleteLike(likeId: number | string) {
  const headers = await authHeaders();
  const res = await fetch(`${API_URL}/bookmarks/${likeId}`, {
    method: 'DELETE',
    headers,
    cache: 'no-store',
    body: JSON.stringify({ target_id: 'any' }),
  });
  return res.json().catch(() => ({ ok: 0 }));
}

/** 서버에서 '원하는 상태'로 맞추기(멱등) */
export async function setPostLikeServer(targetId: number | string, wantLiked: boolean) {
  const list = await listMyPostLikes();
  const items: BookmarkLikeItem[] = list.ok === 1 ? list.item : [];
  const found = items.find((it) => String(it.target_id) === String(targetId));

  if (wantLiked) {
    if (found) return { ok: 1 as const, liked: true as const };
    const crt = await createPostLike(targetId);
    if (crt.ok === 1) return { ok: 1 as const, liked: true as const };
    if (
      crt.ok === 0 &&
      typeof crt.message === 'string' &&
      crt.message.includes('이미 등록')
    ) {
      return { ok: 1 as const, liked: true as const };
    }
    return { ok: 0 as const, message: (crt as { message?: string }).message || '좋아요 생성 실패' };
  } else {
    if (!found) return { ok: 1 as const, liked: false as const };
    const del = await deleteLike(found._id);
    return del.ok === 1
      ? { ok: 1 as const, liked: false as const }
      : { ok: 0 as const, message: (del as { message?: string }).message || '좋아요 삭제 실패' };
  }
}

/** 초기값 조회용 */
export async function getMyPostLike(targetId: number | string) {
  const list = await listMyPostLikes();
  const items: BookmarkLikeItem[] = list.ok === 1 ? list.item : [];
  const found = items.find((it) => String(it.target_id) === String(targetId));
  return found ? { liked: true as const } : { liked: false as const };
}
