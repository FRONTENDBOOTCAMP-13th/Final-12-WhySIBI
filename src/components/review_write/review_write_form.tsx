'use client';
import ReviewStar from '@/components/review_write/star';
import { createReplie } from '@/data/actions/replies';
import { Product } from '@/types';
import useUserStore from '@/zustand/useUserStore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface ReviewWriteFormProps {
  productData: Product;
  productId: string;
}

export default function ReviewWriteForm({
  productData,
  productId,
}: ReviewWriteFormProps) {
  const [imageSrc, setImageSrc] = useState<string>();
  const [state, formAction, isLoading] = useActionState(createReplie, null);
  const router = useRouter();
  const { user } = useUserStore();

  const handleFilePath = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0]; // 첫 번째 파일만 가져오기

    if (file) {
      const fileSrc = URL.createObjectURL(file);
      setImageSrc(fileSrc); // 배열을 새로 만들어서 단일 파일만
    }
  };

  useEffect(() => {
    if (state?.ok) {
      const navigateAndRefresh = async () => {
        alert('리뷰 작성이 완료되었습니다. 리뷰 페이지로 이동합니다.');
        await router.push('/my_page/reviews'); // 이동 완료 기다림
        router.refresh(); // 새로고침
      };
      navigateAndRefresh();
    }
  }, [state, router]);

  return (
    <div className="w-2/4 mx-auto p-10 border-2 rounded-3xl">
      <form action={formAction}>
        <input
          type="hidden"
          name="token"
          value={user?.token?.accessToken || ''}
        />
        <input type="hidden" name="user_id" value={user?._id} />
        <section className="flex pb-9 border-b-2 border-button-color-opaque-25">
          {productData?.mainImages?.[0] ? (
            <Image
              src={`${API_URL}/${productData.mainImages[0].path}`}
              alt={`${productId}상품 이미지`}
              width={200}
              height={200}
            />
          ) : (
            <Image src={``} alt="이미지 오류" width={200} height={200} />
          )}
          <div className="font-basic">
            <input type="hidden" name="product_id" value={productData._id} />
            <p className="text-size-md">상품명: {productData.name}</p>
            <ReviewStar />
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
          <div className="mt-12 flex gap-4">
            {imageSrc && (
              <Image
                key={'1'}
                src={imageSrc}
                alt="리뷰 등록 이미지"
                width={100}
                height={100}
                className="object-cover"
              />
            )}
          </div>
        </section>

        <button
          type="submit"
          disabled={isLoading}
          className="nahonsan-btn-3d-vanilla rounded-full font-basic font-bold bg-vanilla-300 p-2.5 cursor-pointer"
        >
          {isLoading ? '작성 중...' : '작성 완료'}
        </button>
      </form>
    </div>
  );
}
