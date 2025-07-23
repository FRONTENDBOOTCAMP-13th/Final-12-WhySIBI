import { create } from 'zustand';
import { HousePost } from '@/types/housePost';
import { dummyHousePosts } from '@/components/Detail_posts/housePosts';

// 게시글을 새로 등록할 때 사용하는 입력값
interface PostInput {
  title: string;
  content: string;
  imgUrl: string;
  bookMark: boolean;
  detailImages?: string[];
  category?: string[];
}

//zustand 상태 및 메서드 정의
interface PostState {
  posts: HousePost[];
  addPost: (post: PostInput) => void;
  setPosts: (posts: HousePost[]) => void;
}

export const useRoomStore = create<PostState>((set) => ({
  posts: [...dummyHousePosts],

  addPost: (newPost) => {
    set((state) => {
      const nextId = Math.max(...state.posts.map((p) => p._id)) + 1;

      const postWithId: HousePost = {
        _id: nextId,
        user: '',
        title: newPost.title,
        content: newPost.content,
        imgUrl: newPost.imgUrl,
        isLiked: 0,
        views: 0,
        comments: 0,
        bookMark: newPost.bookMark,
        detailImages: newPost.detailImages ?? [],
        category: newPost.category ?? [],
      };

      return { posts: [postWithId, ...state.posts] };
    });
  },

  setPosts: (posts) => set({ posts }),
}));