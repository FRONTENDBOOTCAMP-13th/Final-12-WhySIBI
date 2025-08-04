'use server';

import { revalidatePath } from 'next/cache';
interface PurchaseItem {
  _id: number;
  quantity: number;
}
export async function createPurchaseAction(
  _: { status?: boolean; error: string },
  formData: FormData,
) {
  const purchaseListString = formData.get('purchaseList');
  const token = formData.get('token')?.toString();

  //이 밑에 타입에러 나는 코드 고치는거는 클로드가 해줌.. ㅎ
  if (!purchaseListString || typeof purchaseListString !== 'string') {
    return {
      status: false,
      error: '상품 목록이 없습니다.',
    };
  }

  const purchaseList: PurchaseItem[] = JSON.parse(purchaseListString);
  console.log('니가 문제냐', purchaseList);
  console.log('토큰이 안넘어오나?', token);
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/`, {
      method: 'POST',
      body: JSON.stringify({ products: purchaseList }),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Client-Id': 'febc13-final12-emjf',
      },
    });
    //디버깅 코드
    const responseText = await response.text();
    console.log('응답 상태:', response.status);
    console.log('응답 내용:', responseText);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    //장바구니 비우는 코드
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carts/cleanup`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Client-Id': 'febc13-final12-emjf',
      },
    });
    //재검증
    revalidatePath(`/cart`);
    return {
      status: true,
      error: '',
    };
  } catch (err) {
    return {
      status: false,
      error: `상품구매에 실패했습니다 : ${err}`,
    };
  }
}
