import { create } from 'zustand';
import { dummyHousePosts } from '@/components/Detail_posts/dummyHousePosts';
import { Post } from '@/types';

// 게시글을 새로 등록할 때 사용하는 입력값
interface PostInput {
  title: string;
  content: string;
  image: string[];
  tag?: string[];
}

//zustand 상태 및 메서드 정의
interface PostState {
  posts: Post[];
  addPost: (post: PostInput) => void;
  setPosts: (posts: Post[]) => void;
}

export const useRoomStore = create<PostState>((set) => ({
  posts: [...dummyHousePosts],

  addPost: (newPost) => {
    set((state) => {
      const nextId = Math.max(...state.posts.map((p) => p._id)) + 1;

      const postWithId: Post = {
        _id: nextId,
        user: {
          _id: 1,
          name: 'yeonho',
        },
        title: newPost.title,
        content: newPost.content,
        image: newPost.image,
        isLiked: 0,
        views: 0,
        repliesCount: 0,
        tag: newPost.tag,
        type: '',
        createdAt: '',
        updatedAt: ''
      };

      return { posts: [postWithId, ...state.posts] };
    });
  },

  setPosts: (posts) => set({ posts }),
}));