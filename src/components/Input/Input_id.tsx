interface inputProps {
  text: string;
  placeholder: string;
  idValue: string;
  inputType: string;
  pattern?: string;
}

export default function InputId({
  text,
  placeholder,
  idValue,
  inputType,
}: inputProps) {
  return (
    <>
      <div className="mt-9">
        <label htmlFor={idValue} className="font-basic font-bold pl-4 ">
          {text}
        </label>
        <input
          type={inputType}
          className="font-basic block w-full pl-4 border-2 outline-0  border-button-color-opaque-25 rounded-full h-16 py-4  focus:border-button-color transition-all duration-200 ease-in"
          id={idValue}
          name={idValue}
          placeholder={placeholder}
          autoComplete={idValue}
          required
        />
      </div>
    </>
  );
}
