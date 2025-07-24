import { ReactNode } from 'react';

interface TitleProps {
  title: string;
  subTitle: string | ReactNode;
}

function RecommendTitle({ title, subTitle }: TitleProps) {
  return (
    <>
      <header className="mb-10">
        <h1 className="font-logo text-size-4xl font-bold text-livealone-cal-poly-green leading-10">
          {title}
        </h1>
        <h2 className="font-variable text-size-md text-gray-500 mb-5">
          {subTitle}
        </h2>
        {/* 로그인 시 - 취향태그 붙이기 */}
        <div className=" selected_tag_area w-full row-start-5 col-span-3 ">
          <div className="flex flex-row flex-wrap gap-2 items-center -translat-x-1/2">
            <ul
              className="flex flex-row gap-2 text-livealone-cal-poly-green font-bold text-xs"
              key=""
            >
              <li className=" p-2 rounded-radius-full border-2 border-button-color-opaque-25">
                # 취향태그1
              </li>
              <li className="p-2 rounded-radius-full border-2 border-button-color-opaque-25">
                # 취향태그2
              </li>
            </ul>
          </div>
        </div>
        {/* 로그인 아닐 시 - 취향태그 x */}
      </header>
    </>
  );
}

export default RecommendTitle;
