'use client';

import { useRoomStore } from "@/zustand/roomStore";
import { useState } from "react";
import PostCardItem from "@/components/PostCard_Item";

export default function PostCard() {
  const posts = useRoomStore((state) => state.posts);

  const [bookmarkStates, setBookmarkStates] = useState(
    posts.reduce((acc, post) => {
      acc[post._id] = post.bookMark;
      return acc;
    }, {} as { [key: number]: boolean })
  );

  const toggleBookmark = (id: number) => {
    setBookmarkStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="grid grid-flow-row grid-cols-[repeat(auto-fill,_300px)] gap-20 font-variable justify-center items-center">
      {posts.map((post, index) => (
        <PostCardItem
          key={post._id}
          post={post}
          isBookmarked={bookmarkStates[post._id]}
          toggleBookmark={toggleBookmark}
          index={index}
        />
      ))}
    </div>
  );
}
