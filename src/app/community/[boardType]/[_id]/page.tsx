import Link from 'next/link';
import DeleteForm from './DeleteForm';
import PostDetail from '@/app/community/[boardType]/[_id]/PostDetail';
import DetailSimilar from '@/components/Detail_posts/Detail_similar';
import DetailOther from '@/components/Detail_posts/Detail_other';
import TalkDetail from '@/components/talk_detail/talk_detail';
import CommentSection from './CommentSection';
import ToastDisplay from '../ToastDisplay';

import { getPost, getPosts, getReplies } from '@/data/functions/post';
import { ApiRes } from '@/types';
import { ButtonBack } from '@/components/Button_back';
import { ButtonNostyle } from '@/components/Buttons/Button_nostyle';
import { cookies } from 'next/headers';
import { getProductList } from '@/data/actions/products.fetch';

function isError<T>(res: ApiRes<T>): res is { ok: 0; message: string } {
  return res.ok === 0;
}

interface InfoPageProps {
  params: Promise<{
    boardType: string;
    _id: number;
  }>;
}

export default async function DetailPage({ params }: InfoPageProps) {
  const token = (await cookies()).get('accessToken');
  const { boardType, _id } = await params;

  const post = await getPost(Number(_id), token?.value as string);
  const posts = await getPosts(boardType, String(_id));
  const allProducts = await getProductList();
  const res = await getReplies(_id);
  const initialReplies = res.ok ? res.item : [];

  if (isError(post)) {
    return <div>{post.message || '게시글을 불러올 수 없습니다.'}</div>;
  }

  const productIds = Array.isArray(post.item.extra?.products)
    ? post.item.extra.products.map(String)
    : [];

  const filteredProducts =
    allProducts.ok === 1
      ? allProducts.item.filter(product =>
          productIds.includes(product._id.toString()),
        )
      : [];

  // console.log('productIds:', productIds);
  // console.log('filteredProducts:', filteredProducts);

  if (boardType === 'showRoom') {
    return (
      <>
        <div className="max-w-[1280px]  mx-auto my-0 ">
          <ToastDisplay></ToastDisplay>
          <div className="wrapper flex flex-col justify-center items-center bg-white p-10 md:p-20 font-variable">
            <div className="button-wrapper w-full min-w-2xs flex justify-between items-center text-gray-icon text-md mb-6">
              <ButtonBack />
              <div className="button-list flex flex-row space-x-3 mr-2">
                <Link href={`/community/showRoom/${_id}/edit`}>
                  <ButtonNostyle ownerId={post.item?.user._id} needLogin>
                    수정
                  </ButtonNostyle>
                </Link>
                <DeleteForm
                  boardType={boardType}
                  _id={_id}
                  ownerId={post.item?.user._id}
                ></DeleteForm>
              </div>
            </div>
            <PostDetail post={post.item} token={token?.value as string} />
            <DetailSimilar products={filteredProducts}></DetailSimilar>
            <DetailOther _id={_id}></DetailOther>
            <CommentSection
              _id={_id}
              initialReplies={initialReplies}
            ></CommentSection>
          </div>
        </div>
      </>
    );
  }
  if (boardType === 'talk') {
    return (
      <div className="max-w-[1280px]  mx-auto my-0 ">
        <div className="wrapper flex flex-col justify-center items-center bg-white p-9 md:p-20 font-variable">
          <section className="min-w-[15.625rem] max-w-[18.75rem] md:max-w-4/5 md:min-w-2xl ">
            <div className="button-wrapper flex justify-between items-center text-gray-icon text-md mb-6">
              <ButtonBack />
              <div className="button-list flex flex-row space-x-3 mr-2">
                <Link href={`/community/showRoom/${_id}/edit`}>
                  <ButtonNostyle ownerId={post.item?.user._id} needLogin>
                    수정
                  </ButtonNostyle>
                </Link>
                <DeleteForm
                  boardType={boardType}
                  _id={_id}
                  ownerId={post.item?.user._id}
                ></DeleteForm>
              </div>
            </div>
            {posts.ok === 1 ? (
              <TalkDetail
                post={post.item}
                posts={posts.item}
                token={token?.value as string}
              />
            ) : (
              <TalkDetail post={post.item} />
            )}
            <CommentSection
              _id={_id}
              initialReplies={initialReplies}
            ></CommentSection>
          </section>
        </div>
      </div>
    );
  }
}
