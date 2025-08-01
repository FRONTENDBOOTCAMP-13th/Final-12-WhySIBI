'use client';
import { useEffect, useState } from 'react';
import { Post } from '@/types';
import PostCardItem from '@/app/community/[boardType]/PostCard_Item';
import Title from '@/components/Title';
import ButtonNew from '@/components/Button_new';
import DropdownRoom from '@/components/Dropdown/Dropdown_room';

interface PostCardPageProps {
  boardType: string;
  posts: Post[];
}

export default function PostCardList({ boardType, posts: initialPosts }: PostCardPageProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [sortType, setSortType] = useState('high-view');

  useEffect(() => {
    const sorted = [...initialPosts];
    if (sortType === 'high-view') {
      sorted.sort((a, b) => (b.views ?? 0) - (a.views ?? 0));
    } else {
      sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    setPosts(sorted);
  }, [sortType, initialPosts]);

  const boardTitle = boardType === 'showRoom' ? '집들이🏠' : '자취 상담소💬';
  const boardSub = boardType === 'showRoom' ? '우리집에 왜 왔니' : '우리집 구해줘 홈즈';


  return (
    <div className="post-list-wrapper bg-white p-20">
      <div className="post-header flex justify-between pl-5 mb-10">
        <div className="title-wrapper flex items-center">
          <Title title={boardTitle} subTitle={boardSub} />
        </div>
        <div className="button-wrapper flex items-center">
          <DropdownRoom value={sortType} onDropChange={setSortType} />
          <ButtonNew boardType={boardType} />
        </div>
      </div>

      <div className="grid grid-flow-row grid-cols-[repeat(auto-fill,_300px)] gap-x-10 lg:gap-x-20 gap-y-8 font-variable justify-center items-center">
        {posts.map((post, index) => (
          <PostCardItem key={post._id} post={post} index={index} boardType={boardType} />
        ))}
      </div>
    </div>
  );
}
