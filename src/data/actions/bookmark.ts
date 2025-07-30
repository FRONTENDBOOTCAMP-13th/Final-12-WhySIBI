import { ApiResPromise } from '@/types';
import { BookMarkItem } from '@/types/bookmark';
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';
export async function GetBookMarkList(
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

export async function AddBookMark(
  type: string,
  token: string,
  _id: number,
): ApiResPromise<BookMarkItem[]> {
  let res: Response;
  try {
    const body = {
      target_id: _id,
      type: type,
    };

    res = await fetch(`${API_URL}/bookmarks/${type}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(data);
    console.log('북마크 추가됨');
    return data;
  } catch (error) {
    console.log('error', error);
    return { ok: 0, message: '북마크를 추가하지 못했습니다' };
  }
}

export async function DeleteBookMark(
  token: string,
  _id: string,
): ApiResPromise<BookMarkItem[]> {
  let res: Response;
  try {
    res = await fetch(`${API_URL}/bookmarks/${_id}`, {
      method: 'POST',
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
    return { ok: 0, message: '북마크를 제거하지 못했습니다' };
  }
}
