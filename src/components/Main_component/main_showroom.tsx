import Title from '@/components/Title';
import { getPosts } from '@/data/functions/post';
import Image from 'next/image';

export default async function MainShowRoom() {
  const res = await getPosts('showRoom');

  return (
    <>
      <div className="community-wrapper w-3xl">
        <div className="p-10">
          <Title title={'집들이🏠'} subTitle={'우리집에 왜 왔니'}></Title>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {res.ok ? (
              res.item.slice(0, 6).map(post => (
                <div
                  key={post._id}
                  className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center cursor-pointer hover:scale-105 hover:duration-150"
                >
                  <Image
                    src={
                      post.image?.[0] || '/image/room_photo/postThumbnail.svg'
                    }
                    alt="썸네일"
                    className="w-full h-30 object-cover mb-3 bg-livealone-columbia-blue"
                    width={30}
                    height={30}
                  />
                  <p className="text-xs font-variable font-bold text-gray-800">
                    {post.title}
                  </p>
                </div>
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
