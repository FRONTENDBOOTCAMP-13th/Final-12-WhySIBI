'use server';
import { upLoadFile } from '@/data/actions/file';
import { ApiRes, ApiResPromise, Product, ProductList } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

/**
 * 등록된 상품 리스트를 가져옵니다.
 * @returns {Promise<ApiRes<ProductList>>} - 상품 목록 응답 객체
 */
export async function getProductList(): ApiResPromise<ProductList> {
  try {
    const res = await fetch(`${API_URL}/seller/products`, {
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
 * 상품을 등록합니다
 * @returns {Promise<ApiRes<Product>>} - 상품 목록 응답 객체
 */
export async function ProductRegistration(
  state: ApiRes<Product> | null,
  formData: FormData,
): ApiResPromise<Product> {
  let res: Response;
  let data: ApiRes<Product>;
  try {
    const attach = formData.get('attach') as File;
    let image;
    if (attach.size > 0) {
      const fileRes = await upLoadFile(formData);
      if (fileRes.ok) {
        image = fileRes.item[0].path;
      } else {
        return fileRes;
      }
    }
    const body = {
      mainImages: formData.get('mainImages'),
      name: formData.get('name'),
      sale: formData.get('sale'),
      price: formData.get('price'),
      shippingFees: formData.get('shippingFees:'),
      salePrice: formData.get('salePrice'),
      Detailed: formData.get('Detailed'),
      quantity: formData.get('quantity'),
      keyword: formData.getAll('keyword'),
      extra: {
        category: formData.getAll('category'),
        color: formData.getAll('color'),
        size: formData.getAll('size'),
        tag: formData.get('tag'),
      },
      ...(image ? { image } : {}),
    };
    res = await fetch(`${API_URL}/seller/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
      body: JSON.stringify(body),
    });
    data = await res.json();
  } catch (error) {
    // 네트워크 오류 처리
    console.error('상품 등록 실패:', error);
    return { ok: 0, message: '상품을 등록하는데 실패했습니다' };
  }
  return data;
}

/**
 * 상품의 상세정보를 가져옵니다.
 * @returns {Promise<ApiRes<Product>>} - 상품 목록 응답 객체
 */
export async function getProductInfo(path: string): ApiResPromise<Product> {
  try {
    const res = await fetch(`${API_URL}/seller/products/${path}`, {
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
