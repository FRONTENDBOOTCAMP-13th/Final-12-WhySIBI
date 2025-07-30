'use client';

import useUserStore from '@/zustand/useUserStore';
// Button에 전달할 수 있는 속성 정의
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; // 버튼 내부에 표시될 내용
  needLogin?: boolean; // 로그인 필요 여부
  ownerId?: number; // 특정 사용자에게만 노출할 경우 사용
}

// Button 컴포넌트 정의
export const ButtonNostyle: React.FC<ButtonProps> = ({ children, type='button', needLogin, ownerId, disabled, ...rest }) => {
  const { user } = useUserStore(); // 로그인 사용자 정보 가져오기

  // needLogin이 true인데 로그인 안 되어 있으면 비활성화
  const notLoggedIn = needLogin && !user;
  // ownerId가 있는데 현재 유저가 작성자가 아니면 비활성화
  const notOwner = ownerId !== undefined && user?._id !== ownerId;
  
  // 로그인 필요 & 로그인 안 된 경우 버튼 미노출
  if (notLoggedIn) return null;
  // ownerId가 있고, 현재 로그인 사용자가 owner가 아니면 버튼 미노출
  if (notOwner) return null;

  const isDisabled = disabled || notLoggedIn || notOwner
  
  return (
    <button
      type={ type }
      className={`cursor-pointer hover:opacity-80`}
      disabled={isDisabled}
      { ...rest }
    >
      { children }
    </button>
  );
};