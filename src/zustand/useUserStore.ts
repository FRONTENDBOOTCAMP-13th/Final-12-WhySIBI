import { UserState } from '@/types';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useUserStore = create(
  persist<UserState>(
    set => ({
      user: null, // 로그인 된 사용자 정보 상태 (초기값: null)
      setUser: user => set({ user }), // 로그인 된 사용자 정보를 설정하는 함수
      resetUser: () => set({ user: null }), // 로그아웃 시 사용자 정보를 초기화하는 함수
    }),
    {
      name: 'user', // 스토리지에 저장될 key 이름
      storage: createJSONStorage(() => sessionStorage), // 세션 스토리지 사용 (생략하면 기본은 localStorage 사용)
    },
  ),
);
export default useUserStore;
