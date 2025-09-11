'use server';
import { upLoadFile } from '@/data/actions/file';
import {
  ApiRes,
  ApiResPromise,
  Product,
  ProductList,
  ProductListProps,
} from '@/types';
import { cookies } from 'next/headers';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

/**
 * 등록된 상품 리스트를 가져옵니다.
 * @returns {Promise<ApiRes<ProductListProps>>} - 상품 목록 응답 객체
 */
export async function getProductRegistrationList(
  token: string,
): ApiResPromise<ProductListProps[]> {
  try {
    const res = await fetch(`${API_URL}/seller/products`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
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
  const token = (await cookies()).get('accessToken');
  try {
    const attach = formData.get('attach') as File;
    const contentImage = formData.get('contentImage') as File;

    let mainImagePath = null;
    let contentImagePath = null;

    if (attach && attach.size > 0) {
      const mainFormData = new FormData();
      mainFormData.append('attach', attach);
      const fileRes = await upLoadFile(mainFormData);
      if (fileRes.ok) {
        mainImagePath = fileRes.item[0]?.path;
      }
    }

    if (contentImage && contentImage.size > 0) {
      const contentFormData = new FormData();
      contentFormData.append('attach', contentImage);
      const fileRes = await upLoadFile(contentFormData);
      if (fileRes.ok) {
        contentImagePath = fileRes.item[0]?.path;
      }
    }
    const body = {
      name: formData.get('name'),
      sale: formData.get('sale'),
      price: Number(formData.get('price')),
      shippingFees: formData.get('shippingFees'),
      content: formData.get('content'),
      quantity: formData.get('quantity'),
      keyword: formData.getAll('keyword'),
      extra: {
        category: formData.getAll('category'),
        color: formData.getAll('color'),
        size: formData.getAll('size'),
        tag: formData.get('tag'),
        originalPrice: formData.get('originalPrice'),
        contentImage: contentImagePath
          ? [
              {
                path: contentImagePath,
                name: contentImage.name,
              },
            ]
          : [],
      },
      mainImages: mainImagePath
        ? [
            {
              path: mainImagePath,
              name: attach.name,
            },
          ]
        : [],
    };
    res = await fetch(`${API_URL}/seller/products`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token?.value}`,
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
      body: JSON.stringify(body),
    });
    data = await res.json();
    console.log('8. 서버 응답:', data);
  } catch (error) {
    // 네트워크 오류 처리
    console.error('상품 등록 실패:', error);
    return { ok: 0, message: '상품을 등록하는데 실패했습니다' };
  }
  return data;
}

/**
 * 등록 상품의 상세정보를 가져옵니다.
 * @returns {Promise<ApiRes<ProductListProps>>} - 등록 상품 목록 응답 객체
 */
export async function getProductRegistrationInfo(
  id: number,
  token: string,
): ApiResPromise<ProductListProps> {
  try {
    const res = await fetch(`${API_URL}/seller/products/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
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
export async function deleteProductRegistrationList(
  token: string,
  _id: number,
): ApiResPromise<ProductListProps[]> {
  try {
    const res = await fetch(`${API_URL}/seller/products/${_id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
    });
    return await res.json();
  } catch (error) {
    // 네트워크 오류 처리
    console.error('상품 리스트 조회 실패:', error);
    return { ok: 0, message: '상품을 삭제하는데 실패했습니다.' };
  }
}

export async function ProductRegistrationEditFunction(
  state: ApiRes<Product> | null,
  formData: FormData,
): ApiResPromise<Product> {
  let res: Response;
  let data: ApiRes<Product>;
  const token = (await cookies()).get('accessToken');
  try {
    const attach = formData.get('attach') as File;
    const contentImage = formData.get('contentImage') as File;
    const _id = formData.get('_id');
    let mainImagePath = null;
    let contentImagePath = null;

    if (attach && attach.size > 0) {
      const mainFormData = new FormData();
      mainFormData.append('attach', attach);
      const fileRes = await upLoadFile(mainFormData);
      if (fileRes.ok) {
        mainImagePath = fileRes.item[0]?.path;
      }
    }

    if (contentImage && contentImage.size > 0) {
      const contentFormData = new FormData();
      contentFormData.append('attach', contentImage);
      const fileRes = await upLoadFile(contentFormData);
      if (fileRes.ok) {
        contentImagePath = fileRes.item[0]?.path;
      }
    }
    const body = {
      name: formData.get('name'),
      sale: formData.get('sale'),
      price: Number(formData.get('price')),
      shippingFees: formData.get('shippingFees'),
      content: formData.get('content'),
      quantity: formData.get('quantity'),
      keyword: formData.getAll('keyword'),
      extra: {
        category: formData.getAll('category'),
        color: formData.getAll('color'),
        size: formData.getAll('size'),
        tag: formData.get('tag'),
        originalPrice: formData.get('originalPrice'),
        contentImage: contentImagePath
          ? [
              {
                path: contentImagePath,
                name: contentImage.name,
              },
            ]
          : [],
      },
      mainImages: mainImagePath
        ? [
            {
              path: mainImagePath,
              name: attach.name,
            },
          ]
        : [],
    };
    res = await fetch(`${API_URL}/seller/products/${_id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token?.value}`,
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

// 판매자가 등록한 상품 주문 내역 리스트
export async function getProductOrderList(
  token: string,
): ApiResPromise<ProductList[]> {
  try {
    const res = await fetch(`${API_URL}/seller/orders`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
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

export async function patchDeliveryState(
  token: string,
  _id: string,
  state: ApiRes<ProductListProps> | null,
  formData: FormData,
): ApiResPromise<ProductListProps> {
  let res: Response;
  let data: ApiRes<ProductListProps>;
  const body = {
    state: formData.get('DeliveryState'),
  };
  try {
    res = await fetch(`${API_URL}/seller/orders/${_id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
      body: JSON.stringify(body),
    });
    data = await res.json();
  } catch (error) {
    // 네트워크 오류 처리
    console.error('상품 배송 상태 수정 실패:', error);
    return { ok: 0, message: '상품의 배송 상태를 수정하는데 실패했습니다' };
  }
  return data;
}
