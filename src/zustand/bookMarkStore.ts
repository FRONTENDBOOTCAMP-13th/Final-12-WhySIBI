import { create } from 'zustand';

interface BookmarkState {
  bookmarks: Set<number>; // post._id 저장
  toggleBookmark: (id: number) => void;
  isBookmarked: (id: number) => boolean;
}

export const useBookmarkStore = create<BookmarkState>((set, get) => ({
  bookmarks: new Set(),

  toggleBookmark: (id) => {
    set((state) => {
      const newBookmarks = new Set(state.bookmarks);
      if (newBookmarks.has(id)) {
        newBookmarks.delete(id);
      } else {
        newBookmarks.add(id);
      }
      return { bookmarks: newBookmarks };
    });
  },

  isBookmarked: (id) => {
    return get().bookmarks.has(id);
  },
}));
