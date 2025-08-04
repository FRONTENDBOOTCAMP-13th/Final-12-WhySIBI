import ShoppingDetail from '@/components/Shopping_detail/Shopping_detail';
import Link from 'next/link';
import ProductInfo from '@/components/Shopping_detail/Product_Info';
import ProductReview from '@/components/Shopping_detail/Product_review';
import ProductInquiry from '@/components/Shopping_detail/Product_inquiry';
import { Product_Detail } from '@/components/Shopping_detail/fetch/Product_detail';
import { cookies } from 'next/headers';
export default async function ProductDetail({
  searchParams,
  params,
}: {
  searchParams: Promise<{ tab: string }>;
  params: Promise<{ id: string }>;
}) {
  const { tab } = await searchParams;
  const { id } = await params;
  const token = (await cookies()).get('accessToken');
  //별찍기 1-5
  const stars = [];
  const lines = 5;
  for (let i = 0; i < lines; i++) {
    const lineStars = [];

    for (let j = i; j < lines; j++) {
      lineStars.push(
        <svg
          key={`filled-${i}-${j}`}
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.62958 2.53038C7.60426 -0.469378 11.8481 -0.469378 12.8228 2.53038V2.53038C13.2587 3.87191 14.5088 4.78019 15.9194 4.78019V4.78019C19.0735 4.78019 20.385 8.81634 17.8332 10.6703V10.6703C16.692 11.4994 16.2145 12.969 16.6504 14.3106V14.3106C17.6251 17.3103 14.1917 19.8048 11.64 17.9509V17.9509C10.4988 17.1217 8.95356 17.1217 7.81238 17.9508V17.9508C5.26064 19.8048 1.82729 17.3103 2.80197 14.3106V14.3106C3.23786 12.969 2.76034 11.4994 1.61917 10.6703V10.6703C-0.932576 8.81634 0.378847 4.78019 3.53298 4.78019V4.78019C4.94355 4.78019 6.19369 3.87191 6.62958 2.53038V2.53038Z"
            fill="#EB692F"
          />
        </svg>,
      );
    }

    for (let k = 0; k < i; k++) {
      lineStars.push(
        <svg
          key={`empty-${i}-${k}`}
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/20 00/svg"
        >
          <path
            d="M6.85419 2.53038C7.82887 -0.469378 12.0727 -0.469378 13.0474 2.53038C13.4833 3.87191 14.7334 4.78019 16.144 4.78019C19.2981 4.78019 20.6096 8.81634 18.0578 10.6703C16.9166 11.4994 16.4391 12.969 16.875 14.3106C17.8497 17.3103 14.4164 19.8048 11.8646 17.9508C10.7234 17.1217 9.17817 17.1217 8.03699 17.9508C5.48525 19.8048 2.0519 17.3103 3.02658 14.3106C3.46247 12.969 2.98495 11.4994 1.84378 10.6703C-0.707966 8.81634 0.603456 4.78019 3.75759 4.78019C5.16815 4.78019 6.4183 3.87191 6.85419 2.53038Z"
            fill="#D9D9D9"
          />
        </svg>,
      );
    }
    stars.push(lineStars);
  }

  const item = await Product_Detail(id);
  console.log(item);
  return (
    <>
      <div className="bg-white xl:min-w-[1280px]">
        <ShoppingDetail
          stars={stars}
          id={id}
          token={token?.value}
        ></ShoppingDetail>

        <nav className="bg-[#d9d9d9] text-xl font-bold flex xl:gap-8 xl:pl-24">
          <Link
            href={'?tab=info'}
            scroll={false} // 이거 쓰면 링크 클릭할때마다 맨위로 안감
            className={`p-4 ${tab === 'info' || tab === undefined ? 'text-flame-250 border-b-3 border-flame-250' : ''}`}
          >
            상품정보
          </Link>
          <Link
            href={'?tab=review'}
            scroll={false}
            className={`p-4 ${tab === 'review' ? 'text-flame-250 border-b-3 border-flame-250' : ''}`}
          >
            리뷰
          </Link>
          <Link
            href={'?tab=inquiry'}
            scroll={false}
            className={`p-4 ${tab === 'inquiry' ? 'text-flame-250 border-b-3 border-flame-250' : ''}`}
          >
            판매자문의
          </Link>
        </nav>

        {tab === 'info' || tab === undefined ? <ProductInfo /> : ''}
        {tab === 'review' ? (
          <ProductReview stars={stars} replies={item.replies} />
        ) : (
          ''
        )}
        {tab === 'inquiry' ? <ProductInquiry id={id} /> : ''}
      </div>
    </>
  );
}
