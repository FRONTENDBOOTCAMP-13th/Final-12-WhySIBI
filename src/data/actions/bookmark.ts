import { ApiResPromise } from '@/types';
import { BookMarkItem } from '@/types/bookmark';
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_WHY_SIBI_CLIENT_ID || '';
export default async function GetBookMarkList(
  type: string,
  token: string,
): ApiResPromise<BookMarkItem[]> {
  let res: Response;
  try {
    res = await fetch(`${API_URL}/bookmarks/${type}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log('error', error);
    return { ok: 0, message: '북마크 목록을 불러오지 못했습니다' };
  }
}
