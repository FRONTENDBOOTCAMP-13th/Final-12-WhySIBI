import Title from '@/components/Title';

interface HousePost{
  id: number;
  title: string;
  imgUrl: string
}

const dummyHousePosts: HousePost[] = [
  { id: 1, title: '유럽 에어비엔비처럼 꾸민 자취방', imgUrl: '/image/europeShowroom.png' },
  { id: 2, title: '제주 게스트하우스 느낌으로 꾸민 룸', imgUrl: '/image/jejuShowroom.png' },
  { id: 3, title: '18평 빌라에서 만든 초록색 신혼집', imgUrl: '/image/greenShowroom.png' },
  { id: 4, title: '식물과 빈티지 소품으로 꾸민 8층 복층', imgUrl: '/image/whiteShowroom.png' },
  { id: 5, title: '유럽 에어비엔비처럼 꾸민 자취방', imgUrl: '/image/europeShowroom.png' },
  { id: 6, title: '제주 게스트하우스 느낌으로 꾸민 룸', imgUrl: '/image/jejuShowroom.png' },
];

function ShowRoom(){
  return(
    <>
    <div className="community-wrapper w-3xl outline-2">
        <div className="p-10" >
          <Title title={'집들이🏠'} subTitle={'우리집에 왜 왔니'}></Title>
            <div className='grid grid-cols-3 gap-5'>
              {dummyHousePosts.map((post) => (
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