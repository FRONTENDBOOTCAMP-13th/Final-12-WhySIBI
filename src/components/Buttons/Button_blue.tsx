'use client';
import { useRouter } from 'next/navigation';

type ButtonBlueProps = {
  value?: string;
  to: string;
};

export default function ButtonBlue({ value, to, }: ButtonBlueProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(to);
  };
  return (
    <>
      <div className="font-variable text-livealone-cal-poly-green bg-columbia-blue-300 flex h-[30px] w-[80px] rounded-sm text-size-xs focus-within:outline-1 cursor-pointer relative items-center active:translate-y-0.5">
        <button onClick={handleClick} className="w-full h-full cursor-pointer font-semibold appearance-none outline-0 text-center hover:opacity-50">
          {value}
        </button>
      </div>
    </>
  );
}