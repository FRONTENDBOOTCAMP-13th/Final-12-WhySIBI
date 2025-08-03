import PostDetail from '@/app/community/[boardType]/[_id]/PostDetail';
import { getPost } from '@/data/functions/post';
import { ApiRes } from '@/types';
import { getReplies } from '@/data/functions/post';
import { getPosts } from '@/data/actions/inqury';
import DetailSimilar from '@/components/Detail_posts/Detail_similar';
import DetailOther from '@/components/Detail_posts/Detail_other';
import CommentList from './CommentList';
import CommentNew from './CommentNew';
import { ButtonBack } from '@/components/Button_back';
import Link from 'next/link';
import DeleteForm from './DeleteForm';
import { ButtonNostyle } from '@/components/Buttons/Button_nostyle';
import TalkDetail from '@/components/talk_detail/talk_detail';
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
  const posts = await getPosts(String(_id));
  const repliesRes = await getReplies(Number(_id));
  const allProducts = await getProductList();


  const repliesCount =
    repliesRes.ok === 1 && Array.isArray(repliesRes.item)
      ? repliesRes.item.length
      : 0;

  if (isError(post)) {
    return <div>{post.message || '게시글을 불러올 수 없습니다.'}</div>;
  }


const productIds = Array.isArray(post.item.extra?.products)
  ? post.item.extra.products.map(String)
  : [];
  
  const filteredProducts =
    allProducts.ok === 1
      ? allProducts.item.filter((product) =>
          productIds.includes(product._id.toString())
        )
      : [];

      console.log('productIds:', productIds);
console.log('filteredProducts:', filteredProducts);

  
  if (boardType === 'showRoom') {
    return (
      <div className="wrapper flex flex-col justify-center items-center bg-white p-20 font-variable">
        <div className="button-wrapper w-[600px] flex justify-between items-center text-gray-icon text-md mb-6">
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
        <CommentNew _id={_id} repliesCount={repliesCount}></CommentNew>
        <CommentList _id={_id}></CommentList>
      </div>
    );
  }
  if (boardType === 'talk') {
    return (
      <div className="wrapper flex flex-col justify-center items-center bg-white p-20 font-variable">
        <section className="w-4/5">
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
          <CommentNew
            _id={_id}
            repliesCount={post.item.repliesCount}
          ></CommentNew>
          <CommentList _id={_id}></CommentList>
        </section>
      </div>
    );
  }
}
