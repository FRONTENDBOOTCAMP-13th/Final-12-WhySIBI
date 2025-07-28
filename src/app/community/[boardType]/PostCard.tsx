'use client';
import { useEffect, useState } from "react";
import PostCardItem from "@/app/community/[boardType]/PostCard_Item";
import { getPosts } from '@/data/functions/post';
import { Post } from '@/types';

interface PostCardProps {
  boardType: string;
}

export default function PostCard({ boardType }: PostCardProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [bookmarkStates, setBookmarkStates] = useState<{ [key: number]: boolean }>({});

  // 클라이언트에서 서버 fetch
  useEffect(() => {
    async function fetchPosts() {
      const res = await getPosts(boardType);
      if (res.ok && res.item) {
        setPosts(res.item); // posts 상태 갱신함

        // 북마크 상태 초기화
        const initialState: { [key: number]: boolean } = {};
        res.item.forEach((post) => {
          initialState[post._id] = false;
        });
        setBookmarkStates(initialState);
      }
    }

    fetchPosts();
  }, [boardType]);

  // 북마크 토글 함수
  const toggleBookmark = (id: number) => {
    setBookmarkStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
<></>
  );
}
