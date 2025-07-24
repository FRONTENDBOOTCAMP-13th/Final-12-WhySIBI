import ReviewWriteForm from '@/components/review_write/review_write_form';
import { getProductInfo } from '@/data/actions/products';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ReviewWritePage({ params }: PageProps) {
  const productId = params.id;

  // 서버에서 상품 정보 미리 가져오기
  const res = await getProductInfo(productId);

  if (res.ok !== 1) {
    return (
      <div className="text-center mt-20">
        <h2 className="font-logo text-3xl">상품을 찾을 수 없습니다.</h2>
        <p className="font-basic mt-4">{res.message}</p>
      </div>
    );
  }

  return (
    <>
      <h2 className="font-logo text-5xl ml-9 my-9">상품 리뷰</h2>
      <ReviewWriteForm productData={res.item} productId={productId} />
    </>
  );
}
