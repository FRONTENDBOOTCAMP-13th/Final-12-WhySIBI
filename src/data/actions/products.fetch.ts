import { ApiResPromise, Product, ProductListProps } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_WHY_SIBI_CLIENT_ID || '';

/**
 * 등록된 상품 리스트를 가져옵니다.
 * @returns {Promise<ApiRes<ProductList[]>>} - 상품 목록 응답 객체
 */
export async function getProductList(): ApiResPromise<ProductListProps[]> {
  try {
    const res = await fetch(`${API_URL}/products/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
    });

    return await res.json();
  } catch (error) {
    // 네트워크 오류 처리
    console.error('상품 리스트 조회 실패:', error);
    return { ok: 0, message: '상품 정보를 불러오는데 실패했습니다.' };
  }
}

/**
 * 상품의 상세정보를 가져옵니다.
 * @returns {Promise<ApiRes<Product[]>>} - 상품 목록 응답 객체
 */
export async function getProductInfo(path: string): ApiResPromise<Product> {
  try {
    const res = await fetch(`${API_URL}/products/${path}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
    });
    return await res.json();
  } catch (error) {
    // 네트워크 오류 처리
    console.error('상품 조회 실패:', error);
    return { ok: 0, message: '상품 정보를 불러오는데 실패했습니다.' };
  }
}
