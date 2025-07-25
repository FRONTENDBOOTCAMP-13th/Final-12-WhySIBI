'use client';
import preferenceTagMap from '@/utils/preferenceTagMap';
import useUserStore from '@/zustand/useUserStore';
import { ReactNode } from 'react';

interface TitleProps {
  title: string;
  subTitle: string | ReactNode;
}

function RecommendTitle({ title, subTitle }: TitleProps) {
  const { user } = useUserStore();
  console.log('user.extra:', user?.extra);

  return (
    <header className="mb-10">
      <h1 className="font-logo text-size-4xl font-bold text-livealone-cal-poly-green leading-10">
        {title}
      </h1>
      {user ? ( //회원일때
        <>
          <h2 className="font-variable text-size-md text-gray-500 mb-5">
            <span className="text-livealone-cal-poly-green font-bold">
              {user.name}
            </span>
            {subTitle}
          </h2>

          <div className=" selected_tag_area w-full row-start-5 col-span-3 ">
            <div className="flex flex-row flex-wrap gap-2 items-center -translat-x-1/2">
              <ul className="flex flex-row gap-2 text-livealone-cal-poly-green font-bold text-xs">
                {user.extra.preference?.map((tag, i) => {
                  return (
                    <li
                      key={i}
                      className=" p-2 rounded-radius-full border-2 border-button-color-opaque-25"
                    >
                      # {preferenceTagMap[tag]}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      ) : (
        //비회원일때
        <h2 className="font-variable text-size-md text-gray-500 mb-5">
          좋아하실 만한 상품을 추천해드려요 🧐
        </h2>
      )}
    </header>
  );
}

export default RecommendTitle;
