'use server';

export async function createEachPurchaseAction(
  _: { status?: boolean; error: string },
  formData: FormData,
) {
  const token = formData.get('token')?.toString();
  const stringProduct = formData.get('product');

  // 토큰 검증 추가
  if (!token) {
    return {
      status: false,
      error: '로그인이 필요합니다.',
    };
  }

  if (!stringProduct || typeof stringProduct !== 'string') {
    return {
      status: false,
      error: '구매할 상품이 없습니다.',
    };
  }
  const product = JSON.parse(stringProduct);

  if (!product.size || !product.color) {
    return {
      status: false,
      error: '옵션을 선택해주세요.',
    };
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/`, {
      method: 'POST',
      body: JSON.stringify({ products: [product] }),
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

    //재검증
    // revalidatePath(``);
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
