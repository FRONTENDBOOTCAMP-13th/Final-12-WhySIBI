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
  }, [sortType, initialPosts, searchText, isMyPosts, user]);

  const boardTitle = boardType === 'showRoom' ? '집들이🏠' : '자취 상담소💬';
  const boardSub =
    boardType === 'showRoom' ? '우리집에 왜 왔니' : '우리집 구해줘 홈즈';

  return (
    <>
    <div className="post-list-wrapper bg-white p-9 md:p-20">
      <div className="search-wrapper flex justify-end mb-3">
        <RoomPostSearch></RoomPostSearch>
      </div>
      <div className="post-header flex md:flex-row justify-between gap-4 lg:gap-0 pl-1 sm:pl-2 md:pl-5 ">
        <div>
          <div className="w-fit">
            <Title title={boardTitle} subTitle={boardSub} />
          </div>
        </div>
        <div className="button-wrapper flex items-center ml-auto mb-5 md:ml-0">
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
          <ButtonNew boardType={boardType} />
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-[repeat(auto-fill,_300px)] gap-x-10 lg:gap-x-20 gap-y-8 font-variable justify-center items-center">
        {posts.length > 0 ? (
            posts.map((post, index) => (
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
    </div>
    </>
  );
}
