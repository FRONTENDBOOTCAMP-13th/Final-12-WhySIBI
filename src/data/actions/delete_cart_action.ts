'use server';

export async function deleteCartAction(
  _: { status?: boolean; error: string },
  formData: FormData,
) {
  const id = formData.get('id')?.toString();
  const token = formData.get('token')?.toString();
  console.log(id);

  if (!id) {
    return {
      status: false,
      error: '삭제할 상품이 없습니다.',
    };
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/carts/${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'client-Id': 'febc13-final12-emjf',
        },
      },
    );
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
      error: `상품 삭제에 실패했습니다: ${err}`,
    };
  }
}
