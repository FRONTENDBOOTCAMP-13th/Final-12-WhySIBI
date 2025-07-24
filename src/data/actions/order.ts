'use server';
import { ApiResPromise } from '@/types';
import { OrderItem } from '@/types/order';
import { error } from 'console';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_WHY_SIBI_CLIENT_ID || '';

/**
 * 등록된 주문 목록 리스트를 가져옵니다.
 * @returns {Promise<ApiRes<OrderProductList>>} - 상품 목록 응답 객체
 */
export async function getOrderList(token: string): ApiResPromise<OrderItem[]> {
  try {
    const res = await fetch(`${API_URL}/orders`, {
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
    console.error('상품 리스트 조회 실패:', error);
    return { ok: 0, message: '주문 정보를 불러오는데 실패했습니다.' };
  }
}

// /**
//  * 주문 상품의 상세정보를 가져옵니다.
//  * @returns {Promise<ApiRes<Product>>} - 상품 목록 응답 객체
//  */
// export async function getOrderInfo(
//   path: string,
//   token: string,
// ): ApiResPromise<OrderItem> {
//   try {
//     const res = await fetch(`${API_URL}/orders/${path}`, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//         'Client-Id': CLIENT_ID,
//       },
//     });

//     const data = await res.json();
//     console.log('주문 목록 API 응답:', data);
//     return data;
//   } catch (error) {
//     // 네트워크 오류 처리
//     console.error('상품 조회 실패:', error);
//     return { ok: 0, message: `상품 정보를 불러오는데 실패했습니다.` };
//   }
// }
