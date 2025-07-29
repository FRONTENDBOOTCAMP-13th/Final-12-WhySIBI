import PostDetail from "@/app/community/[boardType]/[_id]/PostDetail";
import { getPost } from "@/data/functions/post";
import { ApiRes } from "@/types";
import DetailSimilar from "@/components/Detail_posts/Detail_similar";
import DetailOther from "@/components/Detail_posts/Detail_other";
import CommentNew from "@/app/community/[boardType]/[_id]/CommentNew";
import CommentList from "./CommentList";


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
  const { boardType, _id } = await params;
  const post = await getPost(Number(_id));

  if (isError(post)) {
    return <div>{post.message || '게시글을 불러올 수 없습니다.'}</div>;
  }

  return (
      <div className="wrapper flex flex-col justify-center items-center bg-white p-20 font-variable">
        <PostDetail post={post.item} />
        <DetailSimilar></DetailSimilar>
        <DetailOther _id={_id}></DetailOther>
        <CommentNew _id={_id} repliesCount={post.item.repliesCount}></CommentNew>
        <CommentList _id={_id}></CommentList>
      </div>
  );
}
