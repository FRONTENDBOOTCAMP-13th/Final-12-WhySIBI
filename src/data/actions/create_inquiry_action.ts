'use server';

import { revalidatePath } from 'next/cache';

export async function createInquiryAction(
  _: { status?: boolean; error: string },
  formData: FormData,
) {
  const content = formData.get('content')?.toString();
  const title = formData.get('title')?.toString();
  const id = formData.get('id');
  const token = formData.get('token');

  //예외 처리
  if (!content || !title) {
    return {
      status: false,
      error: '제목과 문의 내용을 입력해주세요.',
    };
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/`, {
      method: 'POST',
      body: JSON.stringify({
        type: 'qna',
        title: title,
        content: content,
        product_id: Number(id),
        seller_id: 2,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Client-Id': 'febc13-final12-emjf',
      },
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    //재검증
    revalidatePath(`/products/${id}`);
    return {
      status: true,
      error: '',
    };
  } catch (err) {
    return {
      status: false,
      error: `문의하기에 실패했습니다 : ${err}`,
    };
  }
}
