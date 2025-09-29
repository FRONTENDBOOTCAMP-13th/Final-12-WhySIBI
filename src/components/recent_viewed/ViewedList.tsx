'use client';

import { useViewedStore } from '@/zustand/viewedStore';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ViewedList() {
  const viewedProducts = useViewedStore(state => state.viewed);
  const loadViewed = useViewedStore(state => state.loadViewed);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadViewed();
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [loadViewed]);

  if (isLoading) {
    return (
      <div className="mb-3 w-[260px] bg-white rounded-lg shadow-lg p-4 text-sm text-gray-500 font-basic">
        최근 본 상품을 불러오는 중...
      </div>
    );
  }

  if (!viewedProducts || viewedProducts.length === 0) {
    return (
      <div className="mb-3 w-[260px] bg-white rounded-lg shadow-lg p-4 text-sm text-gray-500 font-basic">
        최근 본 상품이 없습니다.
      </div>
    );
  }

  return (
    <div
      className="mb-3 w-[260px] bg-white rounded-lg shadow-xl p-4 max-h-[360px] 
      overflow-y-auto overflow-x-hidden pointer-events-auto font-basic"
    >
      <h3 className="mb-3 text-sm font-semibold text-livealone-cal-poly-green">
        👀 최근 본 상품
      </h3>
      <ul className="flex flex-col gap-3">
        {viewedProducts
          .filter(product => product && product.id)
          .map(product => (
            <li key={product.id}>
              <Link
                href={`/products/${product.id}`}
                className="flex items-center gap-3 p-2 transition rounded-md hover:bg-livealone-columbia-blue"
              >
                <div className="relative flex-shrink-0 overflow-hidden bg-gray-100 rounded-md shadow-xl w-14 h-14">
                  {product?.image ? (
                    <Image
                      src={product.image}
                      alt={product?.name ?? '상품 이미지'}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-[10px] text-gray-400 bg-gray-100">
                      이미지 없음
                    </div>
                  )}
                </div>

                <div className="flex flex-col w-[150px]">
                  <p className="text-sm font-medium truncate">
                    {product?.name ?? '상품명 없음'}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {product?.price !== undefined
                      ? `${product.price.toLocaleString()}원`
                      : '가격 없음'}
                  </p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
