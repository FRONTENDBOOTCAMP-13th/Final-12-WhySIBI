import { create } from 'zustand';

type NoticeState = {
  unreadCount: number;
  setUnreadCount: (count: number) => void;
  decreaseUnread: () => void;
};

const useNoticeStore = create<NoticeState>((set) => ({
  unreadCount: 0,
  setUnreadCount: (count) => set({ unreadCount: count }),
  decreaseUnread: () =>
    set((state) => ({ unreadCount: Math.max(0, state.unreadCount - 1) })),
}));

export default useNoticeStore;
