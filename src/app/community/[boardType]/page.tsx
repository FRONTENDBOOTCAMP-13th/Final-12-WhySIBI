import { getPosts } from "@/data/functions/post";
import { Post } from "@/types";
import PostCardItem from '@/app/community/[boardType]/PostCard_Item';
import Title from '@/components/Title';
import ButtonNew from '@/components/Button_new';
import DropdownTime from '@/components/Dropdown/Dropdown_time';

interface ListPageProps {
  params: Promise<{
    boardType: string;
  }>;
}

export default async function PostCardPage({ params }: ListPageProps) {
  const { boardType } = await params;

  let boardTitle = '';
  let boardSub = '';
  switch (boardType) {
    case 'showRoom':
      boardTitle = '집들이🏠';
      boardSub = '우리집에 왜 왔니';
      break;
    case 'talk':
      boardTitle = '자취 상담소💬';
      boardSub = '우리집 구해줘 홈즈';
      break;
    default:
      boardTitle = '커뮤니티';
      boardSub = '커뮤니티입니다.';
  }

  // 서버에서 게시글 목록 받아오기
  const res = await getPosts(boardType);

  return (
    <div className="post-list-wrapper bg-white p-20">
      <div className="post-header flex justify-between pl-5 mb-10">
        <div className="title-wrapper flex items-center">
          <Title title={boardTitle} subTitle={boardSub} />
        </div>
        <div className="button-wrapper flex items-center">
          <DropdownTime />
          <ButtonNew boardType={boardType} />
        </div>
      </div>

      {res.ok ? (
        <div className="grid grid-flow-row grid-cols-[repeat(auto-fill,_300px)] gap-20 font-variable justify-center items-center">
          {res.item.map((post: Post, index: number) => (
            <PostCardItem
              key={post._id}
              post={post}
              index={index}
              boardType={boardType}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">{res.message}</p>
      )}
    </div>
  );
}
