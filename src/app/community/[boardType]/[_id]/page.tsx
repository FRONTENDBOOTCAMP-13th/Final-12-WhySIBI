import PostDetail from "@/components/Detail_posts/PostDetail";
import { getPost } from "@/data/functions/post";
import { ApiRes } from "@/types";

function isError<T>(res: ApiRes<T>): res is { ok: 0; message: string } {
  return res.ok === 0;
}

interface InfoPageProps {
  params: Promise<{
    boardType: string;
    _id: string;
  }>;
}

export default async function DetailPage({ params }: InfoPageProps) {
  const { boardType, _id } = await params;
  const post = await getPost(Number(_id));

  if (isError(post)) {
    return <div>{post.message || '게시글을 불러올 수 없습니다.'}</div>;
  }

  return <PostDetail post={post.item} />;
}
