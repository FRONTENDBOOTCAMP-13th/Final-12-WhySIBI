'use server';

export async function addAddressAction(
  _: { status?: boolean; error: string },
  formData: FormData,
) {
  const token = formData.get('token')?.toString();
  const id = formData.get('id');
  const name = formData.get('name');
  const phone = formData.get('phone');
  const address = formData.get('address');
  const addressBookString = formData.get('addressBook');

  if (!addressBookString || typeof addressBookString !== 'string') {
    return {
      status: false,
      error: '상품 목록이 없습니다.',
    };
  }
  const addressBook = JSON.parse(addressBookString);
  console.log('잘넘어오나?', addressBook);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
      {
        method: 'PATCH',
        body: JSON.stringify({
          extra: {
            addressBook: [
              ...addressBook,
              {
                id: addressBook.length + 1,
                name: name,
                value: address,
                phone: phone,
              },
            ],
          },
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Client-Id': 'febc13-final12-emjf',
        },
      },
    );
    //디버깅 코드
    const responseText = await response.text();
    console.log('응답 상태:', response.status);
    console.log('응답 내용:', responseText);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    //재검증
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
