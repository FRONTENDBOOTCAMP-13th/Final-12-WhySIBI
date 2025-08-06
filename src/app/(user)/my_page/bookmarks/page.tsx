import BookMarkList from '@/components/bookmark_list/bookmark_list';
import { GetBookMarkList } from '@/data/actions/bookmark';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

export default async function BookMarks() {
  const token = (await cookies()).get('accessToken');
  const resProduct = await GetBookMarkList('product', token?.value as string);
  const resPost = await GetBookMarkList('post', token?.value as string);

  return resProduct?.ok === 1 || resPost?.ok === 1 ? (
    <BookMarkList
      resProduct={resProduct?.ok === 1 ? resProduct.item : null}
      resPost={resPost?.ok === 1 ? resPost.item : null}
    />
  ) : (
    <div className="font-logo text-3xl">
      {' '}
      <section className="h-72 flex flex-col justify-center items-center gap-3">
        <h3 className="font-bold text-2xl">로그인이 필요하다냥</h3>
        <Image
          src="/image/category_icon/furniture.svg"
          alt="로그인이 필요하다냥"
          width="150"
          height="150"
          className="opacity-20 mt-5 mb-2.5"
          aria-hidden="true"
        />
        <Link
          href="login"
          className={`box-border cursor-pointer bg-flame-250 w-[300px] h-[48px] text-white border-2 border-flame-250 rounded-sm font-bold flex items-center justify-center`}
        >
          <span>로그인 하러 가기</span>
        </Link>
      </section>
    </div>
  );
}
