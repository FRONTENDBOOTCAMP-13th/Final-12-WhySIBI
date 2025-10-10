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
    <div className="ml-2">
      <div className="mt-4 sm:mt-5 md:mt-0 mb-10 sm:mb-10 md:mb-12">
        <TalkCategory />
      </div>

      {activeSubject === 'all' && (
        <div className="bg-columbia-blue-100 rounded-4xl">
          <div className="flex font-extrabold ml-6 xs:text-lg sm:text-xl md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 font-basic px-1 sm:px-2 md:px-4 lg:px-7 pt-5 sm:pt-7 md:pt-10 lg:pt-12">
            <span className="block xs:inline">베스트 고민 Awards</span>
            <span className="ml-1">🏆</span>
          </div>

          {res.ok ? (
            <div className="bookmark-swiper text-left pb-4 sm:pb-6 md:pb-10 px-0 sm:px-0 md:px-0">
              <BestTalkList item={res.item} boardType={boardType} />
            </div>
          ) : (
            <p className="text-center text-gray-500 py-6 sm:py-8 md:py-12 text-sm sm:text-base">
              {res.message}
            </p>
          )}
        </div>
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
  );
}
