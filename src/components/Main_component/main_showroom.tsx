import Title from '@/components/Title';
import { getPosts } from '@/data/functions/post';
import Image from 'next/image';
import ButtonBlue from '../Buttons/Button_blue';
import Link from 'next/link';

export default async function MainShowRoom() {
  const res = await getPosts('showRoom');

  return (
    <>
      <div className="md:p-4 community-wrapper w-full md:w-2xl">
        <div className="px-4 py-6 md:px-10 md:pt-10 md:pb-7 hidden md:contents">
          <div className="title-wrapper flex flex-row justify-between">
            <Title
              title={
                <>
                  집들이
                  <span className="no-invert">🏠</span>
                </>
              }
              subTitle={'우리집에 왜 왔니'}
            ></Title>

            <ButtonBlue value="더보기 +" to="/community/showRoom"></ButtonBlue>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-5x no-invert">
            {res.ok ? (
              res.item.slice(0, 6).map(post => (
                <Link
                  key={post._id}
                  href={`/community/showRoom/${post._id}`}
                  className="bg-white rounded-lg  shadow-md p-3 flex flex-col items-center cursor-pointer hover:scale-105 hover:duration-150"
                >
                  <div className="no-invert">
                    <Image
                      src={
                        post.image?.[0] || '/image/room_photo/postThumbnail.svg'
                      }
                      alt="썸네일"
                      className="w-full h-30 object-cover mb-3 bg-livealone-columbia-blue"
                      width={300}
                      height={300}
                    />
                  </div>
                  <p className="text-xs font-variable font-bold text-gray-800">
                    {post.title}
                  </p>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-3">
                {res.message}
              </p>
            )}
          </div>
        </div>

        <div className="md:hidden contents">
          <div className="title-wrapper flex flex-row justify-between">
            <Title title={'집들이🏠'} subTitle={'우리집에 왜 왔니'}></Title>
            <ButtonBlue value="더보기 +" to="/community/showRoom"></ButtonBlue>
          </div>
          <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-3 gap-5 mt-5">
            {res.ok ? (
              res.item.slice(0, 4).map(post => (
                <Link
                  key={post._id}
                  href={`/community/showRoom/${post._id}`}
                  className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center cursor-pointer hover:scale-105 hover:duration-150"
                >
                  <Image
                    src={
                      post.image?.[0] || '/image/room_photo/postThumbnail.svg'
                    }
                    alt="썸네일"
                    className="w-full h-30 object-cover mb-3 bg-livealone-columbia-blue"
                    width={300}
                    height={300}
                  />
                  <p className="text-xs font-variable font-bold text-gray-800">
                    {post.title}
                  </p>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-3">
                {res.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
