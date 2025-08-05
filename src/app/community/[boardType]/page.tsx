import { getPosts } from '@/data/functions/post';
import Title from '@/components/Title';
import ButtonNew from '@/components/Button_new';
import TalkCategory from '@/components/talk_category/talk_category';
import BestTalkList from '@/components/best_talk_list/best_talk_list';
import TalkList from '@/components/talk_list/talk_list';
import TalkPostSearch from '@/components/talk_list/talk_post_search';
import PostCardList from '@/app/community/[boardType]/PostCardList';
import ToastDisplay from './ToastDisplay';
import { cookies } from 'next/headers';

interface ListPageProps {
  params: Promise<{
    boardType: string;
  }>;
}

export default async function PostCardPage({ params }: ListPageProps) {
  const { boardType } = await params;
  const token = (await cookies()).get('accessToken');
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
  const res = await getPosts(boardType, token?.value as string);

  if (boardType === 'showRoom') {
    return (
      <>
        <div>
          <ToastDisplay></ToastDisplay>
          <PostCardList
            boardType={boardType}
            posts={res.ok ? res.item : []}
            token={token?.value as string}
          />
        </div>
      </>
    );
  }
  if (boardType === 'talk') {
    return (
      <div className="max-w-[1280px]  mx-auto my-0 ">
        <div className="relative post-list-wrapper bg-white p-3 xs:p-4 sm:p-6 md:p-12 lg:p-16 xl:p-20">
          <div className="post-header flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 pl-1 sm:pl-2 md:pl-5 ">
            <div className="">
              <div className="w-fit">
                <Title title={boardTitle} subTitle={boardSub} />
              </div>
            </div>
            <div className="button-wrapper flex flex-row lg:flex-col xs:flex-row items-start xs:items-center lg:items-end gap-2 xs:gap-3 lg:gap-2 mt-2 lg:mt-0">
              <div className="w-full xs:w-auto">
                <TalkPostSearch />
              </div>
              <ButtonNew boardType={boardType} />
            </div>
          </div>

          <div className="mt-2 sm:mt-3 md:mt-0 mb-4 sm:mb-6 md:mb-10">
            <TalkCategory />
          </div>

          <div className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 md:mb-8 font-basic font-bold px-1 sm:px-2 md:px-0">
            <span className="block xs:inline">베스트 고민 Awards</span>
            <span className="ml-1">🏆</span>
          </div>

          {res.ok ? (
            <div className="bookmark-swiper text-left pb-4 sm:pb-6 md:pb-10 px-1 sm:px-2 md:px-0">
              <BestTalkList item={res.item} boardType={boardType} />
            </div>
          ) : (
            <p className="text-center text-gray-500 py-6 sm:py-8 md:py-12 text-sm sm:text-base">
              {res.message}
            </p>
          )}

          <section className="mt-6 sm:mt-8 md:mt-14 px-1 sm:px-2 md:px-0">
            {res.ok ? (
              <div className="">
                <TalkList item={res.item} boardType={boardType} />
              </div>
            ) : (
              <p className="text-center text-gray-500 py-6 sm:py-8 md:py-12 text-sm sm:text-base">
                {res.message}
              </p>
            )}
          </section>
        </div>
      </div>
    );
  }
}
