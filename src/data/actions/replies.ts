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

    // 날짜를 단순하게 생성 (무한루프 방지)
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const dateString = `${year}.${month}.${day}`;

    // body 객체를 단계별로 안전하게 생성
    const baseBody = {
      order_id: Number(userID),
      product_id: Number(formData.get('product_id')),
      rating: Number(formData.get('rating')),
      content: formData.get('content'),
      extra: {
        star: Number(formData.get('rating')),
        date: dateString,
      },
      // 이미지를 처음부터 포함 (빈 배열이라도)
      ...(images && images.length > 0 ? { images: images } : {}),
    };

    console.log('전송할 body:', baseBody);

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