export interface Buttontype {
  text: string;
  background: string;
  color?: string;
  hover?: string;
  animate?: string;
  event?: () => void;
}

export default function ButtonBasic({ text, background, color }: Buttontype) {
  return (
    <>
      <button
        className={`box-border cursor-pointer bg-${background} w-[196px] h-[48px] text-${color} border-2 border-flame-250 rounded-sm font-bold`}
      >
        {text}
      </button>
    </>
  );
}
