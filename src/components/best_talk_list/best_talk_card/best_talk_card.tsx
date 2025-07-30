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
    <div
      className="relative w-full max-w-[28.125rem] p-9 rounded-2xl border-2 border-button-color-opaque-25 mx-auto group overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFEEBC 0%, #D4E8F8 100%)',
      }}
    >
      <Link
        href={`/community/${boardType}/${post._id}`}
        className="block w-full"
      >
        <div className="px-1">
          <p className="text-size-xs md:text-size-md  font-basic font-bold text-[#353535]">
            {post.extra?.subject?.[0]}
          </p>
          <section>
            <h3 className="text-gray-900  font-basic sm:text-base font-bold leading-tight whitespace-pre-line line-clamp-2">
              {/* {title} */}
              {post.title}
            </h3>
            <p className="text-[#353535]"> {post.content}</p>
          </section>
          <section className="relative flex max-w-[100%] rounded-radius-lg mb-3 gap-3">
            {post.image?.map((image, i) => (
              <Image
                key={i}
                src={`${image}`}
                alt={`게시글 이미지`}
                width={100}
                height={100}
                className="object-contain rounded-radius-lg aspect-square"
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 250px, 220px"
              />
            ))}
          </section>
          <section className="flex justify-between ">
            <div>{post.tags}</div>
            <div>
              <p className="text-gray-400">조회수 : {post.views}</p>
            </div>
          </section>
        </div>
      </Link>
    </div>
  );
}
