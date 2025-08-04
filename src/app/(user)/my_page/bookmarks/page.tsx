import BookMarkList from '@/components/bookmark_list/bookmark_list';
import { GetBookMarkList } from '@/data/actions/bookmark';
import { cookies } from 'next/headers';

export default async function BookMarks() {
  const token = (await cookies()).get('accessToken');
  const resProduct = await GetBookMarkList('product', token?.value as string);
  const resPost = await GetBookMarkList('post', token?.value as string);

  return (
    (resProduct?.ok === 1 || resPost?.ok === 1) && (
      <BookMarkList
        resProduct={resProduct?.ok === 1 ? resProduct.item : null}
        resPost={resPost?.ok === 1 ? resPost.item : null}
      />
    )
  );
}
