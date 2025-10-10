import { getPosts } from '@/data/functions/post';
import Title from '@/components/Title';
import ButtonNew from '@/components/Button_new';
import TalkPostSearch from '@/components/talk_list/talk_post_search';
import PostCardList from '@/app/community/[boardType]/PostCardList';
import TalkSection from '../../../components/talk_list/TalkSection';
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
  
    // 서버에서 게시글 목록 받아오기
  const res = await getPosts(boardType, token?.value as string);

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

  if (boardType === 'showRoom') {
    return (
      <>
      <div className="max-w-[1280px]  mx-auto my-0 ">
        <ToastDisplay></ToastDisplay>
        {res.ok ? (
          <PostCardList
            boardType={boardType}
            posts={res.ok ? res.item : []}
            token={token?.value as string}
          />
        ) : (
          <p className="text-center text-gray-500 py-6 sm:py-8 md:py-12 text-sm sm:text-base">
            {res.message}
          </p>
        )}
      </div> 
      </>
    );
  }
  if (boardType === 'talk') {
    return (
      <div className="max-w-[1280px] mx-auto font-variable">
        <div className="relative post-list-wrapper bg-white p-6 xs:p-6 sm:p-10 md:p-12 lg:p-16 xl:p-20">
          <div className="search-wrapper flex justify-end mb-3">
            <TalkPostSearch />
          </div>
          <div className="post-header flex md:flex-row justify-between gap-4 lg:gap-0 pl-1 sm:pl-2 md:pl-5 pr-1 sm:pr-2 md:pr-5 ">
            <div className="w-fit">
              <Title title={boardTitle} subTitle={boardSub} />
            </div>
            <div className="button-wrapper flex flex-row lg:flex-col xs:flex-row items-start xs:items-center lg:items-end gap-2 xs:gap-3 lg:gap-2 mt-2 lg:mt-0">
              <ButtonNew boardType={boardType} />
            </div>
          </div>

          {/* TalkCategory + TalkList 합침 */}
          <TalkSection res={res} boardType={boardType}></TalkSection>

        </div>
      </div>
    );
  }
}
