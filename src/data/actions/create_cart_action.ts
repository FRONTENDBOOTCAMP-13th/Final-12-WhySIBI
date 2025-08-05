'use server';

export async function createCartAction(
  _: { status?: boolean; error: string },
  formData: FormData,
) {
  const size = formData.get('size')?.toString();
  const color = formData.get('color')?.toString();
  const quantity = Number(formData.get('quantity'));
  const id = Number(formData.get('id'));
  const token = formData.get('token')?.toString();

  //로그인 안했을때 예외처리
  if (!token) {
    return {
      status: false,
      error: '로그인이 필요합니다.',
    };
  }

  if (!size || !color) {
    return {
      status: false,
      error: '옵션을 선택해주세요.',
    };
  }
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carts/`, {
      method: 'POST',
      body: JSON.stringify({
        product_id: id,
        quantity: quantity,
        color: color,
        size: size,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'client-Id': 'febc13-final12-emjf',
      },
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return {
      status: true,
      error: '',
    };
  } catch (err) {
    return {
      status: false,
      error: `장바구니담기에 실패했습니다. : ${err}`,
    };
  }
}
