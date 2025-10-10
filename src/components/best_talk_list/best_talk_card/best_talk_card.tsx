import { ExtendedPostProps } from '@/components/talk_list/talk_info/talk_info';
import Image from 'next/image';
import Link from 'next/link';
interface PostCardItemProps {
  post: ExtendedPostProps;
  boardType: string;
  index: number;
}
export default function BestTalkCard({ post, boardType }: PostCardItemProps) {
  return (
    <div className="relative w-[clamp(160px,50vw,500px)] sm:w-[222px] md:w-[15.625rem] lg:w-[350px] xl:w-[18.75rem] h-[10.5rem] sm:h-[13.75rem] md:h-[16.25rem] lg:h-[21.25rem] xl:h-[22.5rem] p-2 sm:p-3 md:p-4 lg:p-6 rounded-xl md:rounded-2xl border-2 border-button-color-opaque-25 mx-auto group overflow-hidden bg-gradient-to-b from-vanilla-300 to-columbia-blue-300">
      <Link
        href={`/community/${boardType}/${post._id}`}
        className="block w-full h-full"
      >
        <div className="px-0.5 sm:px-1 h-full flex flex-col justify-between">
          <div className="flex-1">
            <div className="text-right">
              <p className="text-xs inline-block sm:text-xs md:text-sm lg:text-md xl:text-md font-basic font-bold mb-2 sm:mb-4 lg:mb-6 text-livealone-cal-poly-green bg-livealone-columbia-blue py-1 px-2 sm:px-3 md:px-4 lg:px-5 rounded-full">
                {post.extra?.subject?.[0]}
              </p>
            </div>

            <section className="mb-2 sm:mb-3">
              <h3 className="text-gray-900 font-basic text-sm sm:text-size-md md:text-size-lg lg:text-xl font-bold leading-tight whitespace-pre-line line-clamp-1 sm:line-clamp-2 mb-1">
                {post.title}
              </h3>
              <p className="text-[#353535] text-xs sm:text-sm md:text-base line-clamp-1 sm:line-clamp-2 lg:line-clamp-3">
                {post.content}
              </p>
            </section>

            <section className="relative flex max-w-[100%] rounded-radius-lg mb-2 sm:mb-3 gap-1 sm:gap-2 md:gap-3">
              {post.image?.slice(0, 1).map((image, i) => (
                <Image
                  key={i}
                  src={image}
                  alt={`게시글 이미지`}
                  width={150}
                  height={150}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 object-cover rounded-radius-lg"
                  sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, (max-width: 1280px) 128px, 160px"
                />
              ))}
            </section>
          </div>

          <section className="flex justify-between items-end text-xs sm:text-sm md:text-base">
            <div className="text-[#353535] truncate flex-1 mr-2">
              {post.tags}
            </div>
            <div className="flex-shrink-0">
              <p className="text-gray-400 text-xs sm:text-sm">
                <span>조회수 : {post.views}</span>
              </p>
            </div>
          </section>
        </div>
      </Link>
    </div>
  );
}
