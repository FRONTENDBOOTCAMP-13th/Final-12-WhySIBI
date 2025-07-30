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

 // 로그인 필요 + 미로그인 || 사용자 불일치 시 → 숨김 처리
  if ((needLogin && !user) || (ownerId !== undefined && user?._id !== ownerId)) {
    return null;
  }

  return (
    <div>
      <button
        type={type}
        className={`cursor-pointer hover:opacity-80`}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};