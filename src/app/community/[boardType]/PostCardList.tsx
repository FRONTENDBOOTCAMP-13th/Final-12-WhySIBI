'use client';
import { useEffect, useState } from 'react';
import { Post } from '@/types';
import Image from 'next/image';
import PostCardItem from '@/app/community/[boardType]/PostCard_Item';
import Title from '@/components/Title';
import ButtonNew from '@/components/Button_new';
import DropdownRoom from '@/components/Dropdown/Dropdown_room';
import RoomPostSearch from '@/components/Detail_posts/room_post_search';
import useSearchStore from '@/zustand/searchStore';
import useUserStore from '@/zustand/useUserStore';

interface PostCardPageProps {
  boardType: string;
  posts: Post[];
  token: string;
}

export default function PostCardList({
  boardType,
  posts: initialPosts,
  token,
}: PostCardPageProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [sortType, setSortType] = useState('high-view');
  const { searchText } = useSearchStore();
  const { user } = useUserStore(); 
  const [isMyPosts, setIsMyPosts] = useState(false);

  const onePage = 8;
  const [displayCount, setDisplayCount] = useState(onePage);

  // 필터링
  useEffect(() => {
    let sorted = [...initialPosts];

    if (searchText.trim() !== '') {
      const lowerSearch = searchText.toLowerCase();
      sorted = sorted.filter(
        post =>
          post.title.toLowerCase().includes(lowerSearch) ||
          post.content.toLowerCase().includes(lowerSearch)
      );
    }

    if (isMyPosts && user?._id) {
      sorted = sorted.filter((post) => post.user._id === user._id);
    }

    if (sortType === 'high-view') {
      sorted.sort((a, b) => (b.views ?? 0) - (a.views ?? 0));
    } else {
      sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    }
    setPosts(sorted);
    setDisplayCount(onePage);
  }, [sortType, initialPosts, searchText, isMyPosts, user]);

  // 페이지네이션
  const visiblePosts = posts.slice(0, displayCount);
  const canLoadMore = displayCount < posts.length;

  const boardTitle = boardType === 'showRoom' ? '집들이🏠' : '자취 상담소💬';
  const boardSub =
    boardType === 'showRoom' ? '우리집에 왜 왔니' : '우리집 구해줘 홈즈';

  return (
    <>
    <div className="post-list-wrapper font-variable bg-white p-3 xs:p-4 sm:p-6 md:p-12 lg:p-16 xl:p-20 mb-10">
      <div className="search-wrapper flex justify-end mb-3">
        <RoomPostSearch></RoomPostSearch>
      </div>
      <div className="post-header flex md:flex-row justify-between gap-4 lg:gap-0 pl-1 sm:pl-2 md:pl-5 pr-1 sm:pr-2 md:pr-5 ">
        <div className="w-fit">
          <Title title={boardTitle} subTitle={boardSub} />
        </div>
        <div className="button-wrapper flex items-center ml-auto md:ml-0 mt-1 lg:mt-0">
          {/* 320 이상일 때 My버튼&드롭다운 - 가로정렬로 보이도록 */}
          <div className="flex max-[320px]:hidden">
            {user && (
              <button
                onClick={() => setIsMyPosts((prev) => !prev)}
                className={`cursor-pointer hover:scale-110 hover:duration-200 ${isMyPosts ? 'opacity-100' : 'opacity-80'}`}
                title="내 글만 보기"
                >
                <Image
                  src="/image/community_icon/myIcon.svg"
                  width={10}
                  height={10}
                  className="w-7 h-7"
                  alt="내 글만 보기"
                />
              </button>
            )}
            <DropdownRoom value={sortType} onDropChange={setSortType} />
          </div>
            <ButtonNew boardType={boardType} />
        </div>
      </div>
      {/* 320 미만일 때 My버튼&드롭다운 - 세로정렬로 보이도록 */}
      <div className="hidden max-[320px]:block">
        <div className="flex justify-end">
          {user && (
            <button
              onClick={() => setIsMyPosts((prev) => !prev)}
              className={`cursor-pointer hover:scale-110 hover:duration-200 ${isMyPosts ? 'opacity-100' : 'opacity-80'}`}
              title="내 글만 보기"
              >
              <Image
                src="/image/community_icon/myIcon.svg"
                width={10}
                height={10}
                className="w-7 h-7"
                alt="내 글만 보기"
              />
            </button>
          )}
          <DropdownRoom value={sortType} onDropChange={setSortType} />
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-[repeat(auto-fill,_minmax(300px,1fr))] mt-10 max-[320px]:mt-3 gap-x-10 lg:gap-x-20 gap-y-10 font-variable justify-center items-center w-full">
        {visiblePosts.length > 0 ? (
            visiblePosts.map((post, index) => (
              <PostCardItem
                key={post._id}
                post={post}
                index={index}
                boardType={boardType}
                token={token}
                bookmarkID={post?.myBookmarkId}
                isHot={sortType === 'high-view' && index < 3}
                isNew={sortType === 'latest' && index < 3}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-3 py-10">
              검색 결과가 없습니다.
            </p>
          )}
        </div>
        {/* 더보기 */}
        {canLoadMore && (
          <div className="mt-20 flex justify-center">
            <button
              onClick={() => setDisplayCount((prev) => prev + onePage)}
              className="px-8 py-3 border-2 text-livealone-cal-poly-green font-semibold rounded-full hover:bg-opacity-80 transition-all hover:bg-livealone-cal-poly-green hover:text-white cursor-pointer"
            >
              더보기 +
            </button>
          </div>
        )}
      </div>
    </>
  );
}
