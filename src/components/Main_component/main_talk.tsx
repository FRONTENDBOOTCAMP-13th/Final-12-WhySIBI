'use client';
import { redirect } from 'next/navigation';
import Title from '@/components/Title';
import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from '@/data/functions/post';
import { useEffect, useState } from 'react';
import { Post } from '@/types';

export default function MainTalk() {
  const [talkPost, setTalkPost] = useState<Post[] | null>();

  useEffect(() => {
    const getPostData = async () => {
      const res = await getPosts('talk');
      try {
        if (res.ok === 1) {
          setTalkPost(res.item);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPostData();
  }, []);

  return (
    <>
      <div className="md:p-4 community-wrapper w-full md:w-2xl">
        <div className="community bg-linear-to-b from-livealone-vanilla to-columbia-blue-100 rounded-t-4xl px-4 py-6 md:px-10 md:pt-10 md:pb-7">
          <Title title={'자취상담소🏠'} subTitle={'우리집 구해줘 홈즈'}></Title>
          <div className="list-wrapper font-variable mt-5">
            <ul className="space-y-3 md:space-y-4 divide-y divide-gray-300">
              {talkPost &&
                talkPost.slice(0, 2).map(post => (
                  <Link key={post._id} href={`/community/talk/${post._id}`}>
                    <li
                      key={post._id}
                      className="flex justify-between items-start gap-3 pb-3 md:pb-4 cursor-pointer group pt-3 first:pt-0"
                    >
                      <div className="md:hidden">
                        <p className="text-xs font-semibold text-livealone-cal-poly-green mb-2">
                          {post.extra?.subject}
                        </p>
                        <h2 className="font-extrabold text-base mt-1 leading-tight mb-3">
                          Q {post.title}
                        </h2>
                        {/* 모바일에서 이미지 위치 */}
                        <div className="mb-3">
                          <Image
                            src={
                              post.image?.[0] ||
                              '/image/room_photo/postThumbnail.svg'
                            }
                            alt="썸네일"
                            className="w-full h-40 object-cover rounded-lg bg-livealone-columbia-blue"
                            width={320}
                            height={160}
                          />
                        </div>
                        <p className="text-xs text-gray-700 line-clamp-2 leading-relaxed">
                          {post.content}
                        </p>
                      </div>
                      <div className="hidden md:flex justify-between w-full gap-3">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-li font-semibold text-livealone-cal-poly-green">
                            {post.extra?.subject}
                          </p>
                          <h2 className="font-extrabold text-lg mt-1 leading-tight">
                            Q {post.title}
                          </h2>
                          <p className="text-sm text-gray-700 mt-2 line-clamp-2 leading-relaxed">
                            {post.content}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <Image
                            src={
                              post.image?.[0] ||
                              '/image/room_photo/postThumbnail.svg'
                            }
                            alt="썸네일"
                            className="w-24 h-24 lg:w-28 lg:h-28 object-cover rounded-md bg-livealone-columbia-blue group-hover:scale-105 group-hover:duration-150 group-hover:opacity-50"
                            width={96}
                            height={96}
                          />
                        </div>
                      </div>
                    </li>
                  </Link>
                ))}
            </ul>
          </div>
        </div>
        <button
          onClick={() => redirect('/community/talk')}
          className="btn-gradient-animate w-full text-center font-variable font-semibold py-3 md:py-4 text-sm md:text-base text-livealone-cal-poly-green bg-livealone-columbia-blue rounded-b-4xl cursor-pointer hover:text-cal-poly-green-100"
        >
          글 작성하러 가기
        </button>
      </div>
    </>
  );
}
