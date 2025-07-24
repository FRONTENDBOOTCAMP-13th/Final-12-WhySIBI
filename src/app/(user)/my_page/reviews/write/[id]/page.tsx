'use client';
import { getProductInfo } from '@/data/actions/products';
import { createReplie } from '@/data/actions/replies';
import { Product } from '@/types';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';
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
  console.log(productData);
  //이미지 주소 추출
  const [imageSrc, setImageSrc] = useState<string[]>([]);
  const handleFilePath = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('파일 선택 이벤트 발생!');
    const target = e.target as HTMLInputElement;
    const files = target.files;
    if (files) {
      const filesArray = Array.from(files);
      const filesSrc = filesArray.map(file => URL.createObjectURL(file));
      setImageSrc(prev => [...prev, ...filesSrc]);
    }
  };

  const [state, formAction, isLoading] = useActionState(createReplie, null);
  const router = useRouter();

  useEffect(() => {
    if (state?.ok) {
      alert('리뷰 작성이 완료되었습니다. 제품 페이지로 이동합니다.');
      router.replace('/my_page');
    } else if (state?.ok === 0 && !state?.errors) {
      // 입력값 검증에러가 아닌 경우
      alert(state?.message);
    }
  }, [state]);
  return (
    <>
      <h2 className="font-logo text-5xl ml-9 my-9">상품 리뷰</h2>
      <div className="w-2/4 mx-auto p-10 border-2 rounded-3xl">
        <form action={formAction}>
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
              <input
                type="hidden"
                name="product_id"
                value={productData?._id as number}
              />
              <p className="text-size-md ">상품명:{productData?.name}</p>
              <select name="rating" id="rating">
                <option value={5}>5</option>
              </select>
            </div>
          </section>
          <section className="flex gap-3 mt-9">
            <label htmlFor="review_text_area" className="font-basic">
              상세리뷰
            </label>
            <textarea
              name="content"
              id="review_text_area"
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
                onChange={handleFilePath}
              />
            </div>
            <div className="border-2 mt-12 flex gap-4">
              {imageSrc.length > 0 ? (
                imageSrc.map((item, index) => (
                  <Image
                    key={index}
                    src={item}
                    alt="리뷰 등록 이미지"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                ))
              ) : (
                <p></p>
              )}
            </div>
          </section>
          (
          <button
            type="submit"
            className="nahonsan-btn-3d-vanilla rounded-full font-basic font-bold bg-vanilla-300 p-2.5 cursor-pointer"
          >
            작성 완료
          </button>
          )
        </form>
      </div>
    </>
  );
}
