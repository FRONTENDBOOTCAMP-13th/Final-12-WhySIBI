'use client';
import Title from '@/components/Title';
import { dummyHousePosts } from '@/components/Post_card';


export function ShowRoom(){
  return(
    <>
    <div className="community-wrapper w-3xl outline-2">
        <div className="p-10" >
          <Title title={'집들이🏠'} subTitle={'우리집에 왜 왔니'}></Title>
            <div className='grid grid-cols-3 gap-5'>
              {dummyHousePosts
              .filter(post => post.id <= 6)
              .map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center cursor-pointer hover:scale-105 hover:duration-150"
              >
                <img
                  src={post.imgUrl}
                  alt='썸네일'
                  className="w-full h-30 object-cover mb-3 bg-livealone-columbia-blue"
                />
                <p className="text-xs font-variable font-bold text-gray-800">{post.title}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
        </>
  );                                                              
}

export default ShowRoom;