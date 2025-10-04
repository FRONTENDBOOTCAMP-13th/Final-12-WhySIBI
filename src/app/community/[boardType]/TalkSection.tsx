'use client';
import useSearchStore from '@/zustand/searchStore';
import useSubjectStore from '@/zustand/subjectStore';
import TalkCategory from '@/components/talk_category/talk_category';
import BestTalkList from '@/components/best_talk_list/best_talk_list';
import TalkList from '@/components/talk_list/talk_list';
import { ApiRes, Post } from '@/types';

interface TalkSectionProps {
  res: ApiRes<Post[]>; 
  boardType: string;
}

export default function TalkSection({ res, boardType }: TalkSectionProps) {
  const { activeSubject } = useSubjectStore();

  return (
    <>
      <div className="mt-2 sm:mt-3 md:mt-0 mb-4 sm:mb-6 md:mb-10">
        <TalkCategory />
      </div>

      {activeSubject === 'all' && (
        <>
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
        </>
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
    </>
  );
}
