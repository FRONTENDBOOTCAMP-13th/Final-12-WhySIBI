interface Post {
  id: number;
  category: string;
  title: string;
  content: string;
  tags: string[];
  imageUrl: string;
}

const dummyPosts: Post[] = [
  {
    id: 1,
    category: '기타',
    title: '에어컨 청소했는데도 물냄새 나요ㅠㅠ',
    content:
      '에어컨 켜니까 물 비린내 같은 게 나는데 이럴 땐 어떻게 해야 할까요..? 며칠 전에 에어컨 청소 업체 불러서 청소도 했는데 냄새가 나니까 당황스럽네요ㅠ 같은 경험 있으셨던 분들 해결방법 알려주세요ㅠㅠ',
    tags: ['#에어컨', '#청소', '#냄새'],
    imageUrl: '/',
  },
  {
    id: 2,
    category: '인테리어 고민',
    title: '8평 오픈형 원룸 가구 배치',
    content:
      '우선 현관으로 들어오면 큰 신발장이 있고, 왼편은 주방 오른편은 생활공간입니다 정면엔 화장실이 있고 큰 베란다 문이 있고 방 안에 창문은 주방 쪽 작은 창문 하나 입니다 (책상 앞쪽 공간은 베란다에 보일러실이고, 문은 베란다 쪽에 있습니다)',
    tags: ['#원룸', '#자취', '#가구배치', '#인테리어'],
    imageUrl: '/',
  },
];

function Community_talk(){
  return(
    <>
    <div className="community-wrapper mx-30">
      <div className="bg-linear-to-b from-livealone-vanilla to-columbia-blue-100 rounded-t-4xl 4xl px-7 pt-7 pb-5" >
        <header className="mb-6">
          <h1 className="font-logo text-size-4xl font-bold text-livealone-cal-poly-green">자취상담소 🏠</h1>
          <h2 className="font-basic text-size-md text-gray-500">우리집 구해줘 홈즈</h2>
        </header>
        <div className="list-wrapper font-basic">
          <ul className="space-y-4 divide-y divide-gray-300">
            {dummyPosts.map((post) => (
              <li key={post.id} className="flex justify-between items-center pb-4">
                <div className="w-3/4">
                  <p className="text-sm text-li font-semibold text-livealone-cal-poly-green">{post.category}</p>
                  <h2 className="font-bold text-lg mt-1">Q {post.title}</h2>
                  <p className="text-sm text-gray-700 mt-2 line-clamp-2">{post.content}</p>
                  <div className="flex flex-wrap gap-1 mt-3 text-sm text-livealone-cal-poly-green font-semibold">
                    {post.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                </div>
                <img src={post.imageUrl} alt="썸네일" className="w-40 h-30 object-cover rounded-md bg-livealone-columbia-blue" />
              </li>
            ))}
          </ul>
        </div>
      </div>
          <button className="w-full text-center font-basic font-semibold py-3 text-livealone-cal-poly-green bg-columbia-blue-300 rounded-b-4xl">글 작성하러 가기</button>
    </div>
    </>
  );
}

export default Community_talk;