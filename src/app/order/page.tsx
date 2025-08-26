'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Order() {
  const searchParams = useSearchParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const productParam = searchParams.get('product');

    const decodedProduct = JSON.parse(decodeURIComponent(productParam));
    setProductData(decodedProduct);
  }, [searchParams]);

  console.log('이게된다고?', productData);

  return <div>주문 목록 페이지 입니다.</div>;
}
