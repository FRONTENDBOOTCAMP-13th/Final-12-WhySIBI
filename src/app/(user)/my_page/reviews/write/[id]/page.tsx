'use client';
import { getProductInfo } from '@/data/actions/products';
import { Product } from '@/types';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default function ReviewWrite() {
  //상품 정보 불러오기
  const [productData, setProductData] = useState<Product | null>(null);
  const pathname = usePathname();
  const productID = pathname.split('/').pop();
  useEffect(() => {
    const getData = async () => {
      const res = await getProductInfo(productID as string);

      if (res.ok === 1) {
        setProductData(res.item);
      } else {
        console.error('상품 조회 실패:', res.message);
        setProductData(null);
      }
    };
    getData();
  }, []);
  return (
    <>
      <h2 className="font-logo text-5xl ml-9 my-9">상품 리뷰</h2>
      <div className="w-2/4 mx-auto p-10 border-2 rounded-3xl">
        <form action="">
          <section className="flex pb-9  border-b-2 border-button-color-opaque-25">
            {productData?.mainImages?.[0] ? (
              <Image
                src={`${API_URL}${productData.mainImages[0].path}`}
                alt={`${productID}상품 이미지`}
                width={200}
                height={200}
              />
            ) : (
              <Image src={``} alt="이미지 오류" width={200} height={200} />
            )}
            <div className="font-basic">
              <p className="text-size-md">상품명:{productData?.name}</p>
              <select name="" id="">
                <option value="">1</option>
              </select>
            </div>
          </section>
          <section className="flex gap-3 mt-9">
            <label htmlFor="">상세리뷰</label>
            <textarea
              name=""
              id=""
              className="border-1 min-w-3/5 min-h-64 border-black resize-none"
            ></textarea>
          </section>
          <section className="mt-16 border-t-2 border-button-color-opaque-25">
            <div className="mt-8">
              <label
                htmlFor="attach"
                className="nahonsan-btn-3d-sky rounded-full font-basic font-bold bg-columbia-blue-300 p-2.5 cursor-pointer"
              >
                사진 추가하기
              </label>
              <input
                type="file"
                name="attach"
                id="attach"
                className="hidden"
                accept="image/*"
              />
            </div>
            <div className="border-2 mt-12"></div>
          </section>
        </form>
      </div>
    </>
  );
}
