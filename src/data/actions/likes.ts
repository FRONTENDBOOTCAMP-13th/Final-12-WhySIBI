// src/data/actions/likes.ts
'use server';

import { cookies } from 'next/headers';

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

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
  const found = list?.ok && Array.isArray(list.item)
    ? list.item.find((it: any) => String(it.target_id) === String(targetId))
    : null;

  if (wantLiked) {
    if (found) return { ok: 1 as const, liked: true as const };
    const crt = await createPostLike(targetId);
    if (crt?.ok) return { ok: 1 as const, liked: true as const };
    // 서버가 “이미 등록” 메시지를 주면 성공 처리
    if (typeof crt?.message === 'string' && crt.message.includes('이미 등록')) {
      return { ok: 1 as const, liked: true as const };
    }
    return { ok: 0 as const, message: crt?.message || '좋아요 생성 실패' };
  } else {
    if (!found) return { ok: 1 as const, liked: false as const };
    const del = await deleteLike(found._id);
    return del?.ok
      ? { ok: 1 as const, liked: false as const }
      : { ok: 0 as const, message: del?.message || '좋아요 삭제 실패' };
  }
}

/** 초기값 조회용 */
export async function getMyPostLike(targetId: number | string) {
  const list = await listMyPostLikes();
  const found = list?.ok && Array.isArray(list.item)
    ? list.item.find((it: any) => String(it.target_id) === String(targetId))
    : null;
  return found ? { liked: true as const } : { liked: false as const };
}
