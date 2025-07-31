import { getPosts } from '@/data/functions/post';
import { Post } from '@/types';
import PostCardItem from '@/app/community/[boardType]/PostCard_Item';
import Title from '@/components/Title';
import ButtonNew from '@/components/Button_new';
import DropdownTime from '@/components/Dropdown/Dropdown_time';
import TalkCategory from '@/components/talk_category/talk_category';
import BestTalkList from '@/components/best_talk_list/best_talk_list';
import TalkList from '@/components/talk_list/talk_list';
import TalkPostSearch from '@/components/talk_list/talk_post_search';

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

  if (boardType === 'showRoom') {
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
  if (boardType === 'talk') {
    return (
      <div className="relative post-list-wrapper bg-white p-20">
        <div className="post-header flex justify-between pl-5 mb-10">
          <div className="flex flex-col">
            <div>
              <Title title={boardTitle} subTitle={boardSub} />
            </div>

            <TalkCategory />
          </div>

          <div className="button-wrapper flex flex-col items-end">
            <TalkPostSearch/>
            <ButtonNew boardType={boardType} />
          </div>
        </div>

        <div className="text-xl md:text-3xl mb-8 font-basic font-bold">
          베스트 고민 Awards 🏆
        </div>
        {res.ok ? (
          <div className="bookmark-swiper text-left pb-10">
            <BestTalkList item={res.item} boardType={boardType} />
          </div>
        ) : (
          <p className="text-center text-gray-500">{res.message}</p>
        )}

        <section className="mt-14">
          {res.ok ? (
            <div className="">
              <TalkList item={res.item} boardType={boardType} />
            </div>
          ) : (
            <p className="text-center text-gray-500">{res.message}</p>
          )}
        </section>
      </div>
    );
  }
}
