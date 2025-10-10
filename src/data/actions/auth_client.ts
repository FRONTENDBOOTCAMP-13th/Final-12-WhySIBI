'use client';

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

export async function refreshAccessToken(refreshToken: string) {
  try {
    const res = await fetch(`${API_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Client-Id': CLIENT_ID,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    });

    const data = await res.json();
    return data; // { ok: 1, accessToken: '...', refreshToken: '...' } 형태 기대
  } catch (err) {
    console.error('토큰 갱신 실패:', err);
    return { ok: 0, message: '토큰 갱신 실패' };
  }
}
