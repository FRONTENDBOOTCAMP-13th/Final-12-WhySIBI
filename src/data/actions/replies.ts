import { upLoadFile } from '@/data/actions/file';
import { ApiRes, ApiResPromise } from '@/types';
import { replie, ReviewItem } from '@/types/replies';
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';
export async function createReplie(
  state: ApiRes<replie> | null,
  formData: FormData,
): ApiResPromise<replie> {
  let res: Response;
  let data: ApiRes<replie>;

  try {
    const attach = formData.getAll('attach') as File[];
    let imageObject = null;
    if (attach.length > 0) {
      const fileRes = await upLoadFile(formData);
      if (fileRes.ok) {
        // 여러 이미지 중 첫 번째를 객체로, 나머지는 배열로
        const images = fileRes.item.map(item => ({
          path: item.path,
          name: item.name,
          originalname: item.originalname,
        }));
        imageObject = images[0];
      } else {
        return fileRes;
      }
    }

    // 날짜를 단순하게 생성 (무한루프 방지)
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const dateString = `${year}.${month}.${day}`;

    const token = formData.get('token') as string;
    const userID = Number(formData.get('user_id'));
    // body 객체를 단계별로 안전하게 생성
    const baseBody = {
      order_id: Number(userID),
      product_id: Number(formData.get('product_id')),
      rating: Number(formData.get('rating')),
      content: formData.get('content'),
      extra: {
        star: Number(formData.get('rating')),
        date: dateString,
        image: imageObject,
      },
    };

    res = await fetch(`${API_URL}/replies`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
      body: JSON.stringify(baseBody),
    });

    data = await res.json();
  } catch (error) {
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제가 발생했습니다.' };
  }

  return data;
}

export async function GetReplie(token: string): ApiResPromise<ReviewItem[]> {
  try {
    const res = await fetch(`${API_URL}/replies`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    // 네트워크 오류 처리
    console.error('상품 조회 실패:', error);
    return { ok: 0, message: '상품 정보를 불러오는데 실패했습니다.' };
  }
}

export async function DeleteReplie(
  ID: string,
  token: string,
): ApiResPromise<ReviewItem[]> {
  try {
    const res = await fetch(`${API_URL}/replies/${ID}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
      cache: 'no-store',
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.error('상품 조회 실패:', error);
    return { ok: 0, message: '상품 정보를 불러오는데 실패했습니다.' };
  }
}
