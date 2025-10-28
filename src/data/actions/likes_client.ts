'use client';
import { refreshAccessToken } from '@/data/actions/auth_client';
import useUserStore from '@/zustand/useUserStore';

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

type BookmarkLikeItem = { _id: number; target_id: number };

async function listMyPostLikes(token: string) {
  const res = await fetch(`${API_URL}/bookmarks/post?is_like=true`, {
    headers: {
      'Client-Id': CLIENT_ID,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });
  return res.json().catch(() => ({ ok: 0 }));
}

async function createPostLike(targetId: number | string, token: string) {
  const res = await fetch(`${API_URL}/bookmarks/post`, {
    method: 'POST',
    headers: {
      'Client-Id': CLIENT_ID,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify({ target_id: Number(targetId), is_like: true }),
  });
  return res.json().catch(() => ({ ok: 0 }));
}

async function deletePostLike(likeId: number, token: string) {
  const res = await fetch(`${API_URL}/bookmarks/${likeId}`, {
    method: 'DELETE',
    headers: {
      'Client-Id': CLIENT_ID,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });
  return res.json().catch(() => ({ ok: 0 }));
}

export async function setPostLikeClient(targetId: number | string, wantLiked: boolean, token: string) {
  // 현재 좋아요 목록 확인
  const list = await listMyPostLikes(token);
  const items: BookmarkLikeItem[] = list.ok === 1 ? list.item : [];
  const found = items.find(it => String(it.target_id) === String(targetId));

  // 좋아요 추가
  if (wantLiked) {
    if (found) return { ok: 1 as const, liked: true as const };
    const crt = await createPostLike(targetId, token);
    if (
        crt.ok === 0 &&
        typeof crt.message === 'string' &&
        crt.message.includes('이미 등록')
      ) {
        return { ok: 1 as const, liked: true as const };
      }

    return crt.ok === 1
      ? { ok: 1 as const, liked: true as const }
      : { ok: 0 as const, message: crt.message || '좋아요 생성 실패' };
  }

  // 좋아요 해제
  if (!found) return { ok: 1 as const, liked: false as const };
  const del = await deletePostLike(found._id, token);
  return del.ok === 1
    ? { ok: 1 as const, liked: false as const }
    : { ok: 0 as const, message: del.message || '좋아요 삭제 실패' };

    
}
