import { ButtonBack } from '@/components/Button_back';
import getTimeAgo from '@/components/talk_list/time';
import { Post } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface ExtendedPostProps extends Post {
  extra?: {
    subject: string[];
  };
}
export default function TalkDetail({ post }: { post: ExtendedPostProps }) {
  return (
    <section className="w-4/5">
      <div className="button-wrapper  flex justify-between items-center text-gray-icon text-md mb-6">
        <ButtonBack />
        <div className="button-list space-x-3 mr-2">
          <button className="cursor-pointer hover:opacity-80">수정</button>
          <button className="cursor-pointer hover:opacity-80">삭제</button>
        </div>
      </div>
      <p className="text-size-xs md:text-size-lg py-2 font-basic font-bold text-[#353535]">
        {post.extra?.subject?.[0] || ''}
      </p>
      <section className="mb-6">
        <div className="text-sm md:text-2xl font-basic font-bold flex gap-5 items-center">
          Q {post.title}
          <p className="font-light text-size-md text-gray-400">
            {getTimeAgo(post.createdAt)}
          </p>
          <button type="button" className="ml-auto">
            <Image
              src={'/image/community_icon/heartIcon.svg'}
              alt="좋아요 아이콘"
              width={30}
              height={30}
            />
          </button>
        </div>

        <p className="mt-7">{post.content}</p>
        <div className="flex gap-6 max-w-[1000px]">
          {post.image?.map((image, i) => (
            <Image
              key={i}
              src={`${image}`}
              alt={`게시글 이미지`}
              width={500}
              height={500}
              className="object-contain rounded-radius-lg aspect-square"
              sizes="(max-width: 768px) 480px, (max-width: 1024px) 450px, 420px"
            />
          ))}
        </div>

        <div className="mt-6 flex gap-5 font-bold">
          <ul className="flex gap-4">
            <li>#테그</li>
            <li>#테그</li>
            <li>#테그</li>
            <li>#테그</li>
          </ul>
        </div>
      </section>

      <section className="border-b-2 border-t-2 py-14 my-10 border-button-color-opaque-25">
        <div className="w-2/4 mx-auto text-center">
          <p className="font-bold font-basic text-lg md:text-2xl">
            비슷한 고민을 찾아봐요
          </p>
          <Link
            href={''}
            className="block font-basic text-center border-[1px] rounded-full mt-4 py-3 bg-custom-gradient"
          >
            다른 게시글의 제목을 어떻게 불러오라는거지??
          </Link>
          <Link
            href={''}
            className="block font-basic text-center border-[1px] rounded-full mt-4 py-3 bg-custom-gradient"
          >
            다른 게시글의 제목을 어떻게 불러오라는거지??
          </Link>
          <Link
            href={''}
            className="block font-basic text-center border-[1px] rounded-full mt-4 py-3 bg-custom-gradient"
          >
            다른 게시글의 제목을 어떻게 불러오라는거지??
          </Link>
        </div>
      </section>
    </section>
  );
}
