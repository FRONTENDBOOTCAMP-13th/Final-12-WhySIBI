import { upLoadFile } from '@/data/actions/file';
import { ApiRes, ApiResPromise } from '@/types';
import { replie } from '@/types/replies';
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_WHY_SIBI_CLIENT_ID || '';
export async function createReplie(
  state: ApiRes<replie> | null,
  formData: FormData,
): ApiResPromise<replie> {
  let res: Response;
  let data: ApiRes<replie>;
  try {
    const userStronge = JSON.parse(sessionStorage.getItem('user') as string);
    const user = userStronge.state.user;
    const userID = user._id;
    const token = user.token.accessToken;

    const attach = formData.getAll('attach') as File[];
    let images: string[] = [];

    if (attach.length > 0) {
      const fileRes = await upLoadFile(formData);
      if (fileRes.ok) {
        images = fileRes.item.map(item => item.path);
      } else {
        return fileRes;
      }
    }

    const body = {
      order_id: userID,
      product_id: Number(formData.get('product_id')),
      rating: formData.get('rating'),
      content: formData.get('content'),
      extra: {
        star: formData.get('rating'),
      },
      ...(images ? { images } : {}),
    };
    res = await fetch(`${API_URL}/replies`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
      body: JSON.stringify(body),
    });

    data = await res.json();
  } catch (error) {
    // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제가 발생했습니다.' };
  }
  return data;
}
