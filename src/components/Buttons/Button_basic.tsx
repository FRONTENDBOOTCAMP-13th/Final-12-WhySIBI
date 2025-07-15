export interface Buttontype {
  text: string;
  background: string;
  color?: string;
}

function ButtonBasic({ text, background, color }: Buttontype) {
  return (
    <>
      <button
        className={`box-border cursor-pointer bg-${background} w-[196px] h-[44px] text-${color} border-2 border-flame-300  rounded-sm box-border`}
      >
        {text}
      </button>
    </>
  );
}

export default ButtonBasic;
