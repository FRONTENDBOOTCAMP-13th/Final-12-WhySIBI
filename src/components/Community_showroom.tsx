import Title from '@/components/Title';

interface HousePost{
  id: number;
  title: string;
  imgUrl: string
}

const dummyHousePosts: HousePost[] = [
  { id: 1, title: '제목', imgUrl: '/' },
  { id: 2, title: '제목', imgUrl: '/' },
  { id: 3, title: '제목', imgUrl: '/' },
  { id: 4, title: '제목', imgUrl: '/' },
  { id: 5, title: '제목', imgUrl: '/' },
  { id: 6, title: '제목', imgUrl: '/' },
];

function ShowRoom(){
  return(
    <>
    <div className="community-wrapper w-3xl outline-2">
        <div className="p-10" >
          <Title title={'집들이🏠'} subTitle={'우리집에 왜 왔니'}></Title>
            <div className='grid grid-cols-3 gap-10'>
              {dummyHousePosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center cursor-pointer"
              >
                <img
                  src={post.imgUrl}
                  alt='썸네일'
                  className="w-full h-30 object-cover mb-3 bg-livealone-columbia-blue"
                />
                <p className="text-sm text-gray-800">{post.title}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
        </>
  );                                                              
}

export default ShowRoom;