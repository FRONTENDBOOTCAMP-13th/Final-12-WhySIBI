import type { Buttontype } from './Button_basic';
function ButtonRounded({ text, background }: Buttontype) {
  return (
    <>
      <button
        className={`cursor-pointer bg-${background} text-cal-poly-green-600 border font-semibold border-cal-poly-green-600 py-[7px] px-[18px] text-[14px]
         rounded-full `}
      >
        {text}
      </button>
    </>
  );
}

export default ButtonRounded;
