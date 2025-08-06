import {
  ApiResPromise,
  Product,
  ProductListProps,
  ProductListResponse,
} from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

/**
 * 등록된 상품 리스트를 가져옵니다.
 * @returns {Promise<ApiRes<ProductList[]>>} - 상품 목록 응답 객체
 */
export async function getAllProductList(): ApiResPromise<ProductListProps[]> {
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
    console.error('전체 상품 조회 실패:', error);
    return { ok: 0, message: '상품 정보를 불러오는데 실패했습니다.' };
  }
}

/**
 * 등록된 상품 리스트를 옵션순 정렬하여 가져옵니다. (페이지네이션 + 필터 + 정렬)
 * @param {ProductListOptions} options - 상품 요청 옵션
 * @returns {Promise<ApiRes<ProductList[]>>} - 상품 목록 응답 객체
 */
// 상품 옵션 타입
export interface ProductListOptions {
  sort?:
    | 'latest'
    | 'low-cost'
    | 'high-cost'
    | 'high-star'
    | 'high-review'
    | 'best-selling';
  limit?: number;
  page?: number;
  minPrice?: number;
  maxPrice?: number;
  keyword?: string;
  custom?: Record<string, string | number | boolean>;
}

//옵션 넘길때 형식
export type SortValue = { [field: string]: number };

//상품 정렬 map
const sort: Record<
  | 'latest'
  | 'low-cost'
  | 'high-cost'
  | 'high-star'
  | 'high-review'
  | 'best-selling',
  SortValue
> = {
  latest: { createdAt: -1 }, //신상품
  'high-star': { 'extra.star': -1 }, //별점순
  'low-cost': { price: 1 }, //가격낮은순
  'high-cost': { price: -1 }, //가격높은순
  'high-review': { 'extra.replies': -1 }, //리뷰순
  'best-selling': { buyQuantity: -1 }, //많이 팔린순(베스트상품)
};

export async function getProductList(
  options: ProductListOptions = {},
  token?: string,
): Promise<ProductListResponse> {
  try {
    const query = new URLSearchParams();

    if (options.sort) {
      const sortParam = JSON.stringify(sort[options.sort] || {});
      // console.log('sort 정렬 기준값:', sortParam);
      query.append('sort', sortParam);
    }

    if (options.limit) query.append('limit', String(options.limit));
    if (options.page) query.append('page', String(options.page));
    if (options.minPrice) query.append('minPrice', String(options.minPrice));
    if (options.maxPrice) query.append('maxPrice', String(options.maxPrice));
    if (options.keyword) query.append('keyword', options.keyword);
    if (options.custom) query.append('custom', JSON.stringify(options.custom));

    const res = await fetch(`${API_URL}/products?${query.toString()}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
      cache: 'no-cache',
    });

    return await res.json();
  } catch (error) {
    // 네트워크 오류 처리
    console.error('상품 리스트 조회 실패:', error);
    return {
      ok: 0,
      message: '상품 정보를 불러오는데 실패했습니다.',
      item: [],
      pagination: { page: 1, limit: 0, total: 0, totalPages: 0 },
    };
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
