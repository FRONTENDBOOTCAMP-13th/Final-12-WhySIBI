import type { Buttontype } from './Button_basic';
export default function ButtonRounded({ text, background, hover, animate, event }: Buttontype) {
  return (
    <>
      <button
        className={`cursor-pointer ${background} text-cal-poly-green-300 border font-semibold border-cal-poly-green-600 py-[10px] px-[25px] text-[14px]
         rounded-full ${hover} ${animate}`} onClick={event}
      >
        {text}
      </button>
    </>
  );
}
