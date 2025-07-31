import { create } from 'zustand';

interface CartRefreshState {
  refreshTrigger: number;
  triggerRefresh: () => void;
}

const useCartRefreshStore = create<CartRefreshState>(set => ({
  refreshTrigger: 0,
  triggerRefresh: () =>
    set(state => ({
      refreshTrigger: state.refreshTrigger + 1,
    })),
}));

export default useCartRefreshStore;
