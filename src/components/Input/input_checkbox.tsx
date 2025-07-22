import { useState } from 'react';

interface inputProps {
  text: string;
  idValue: string;
  inputType: string;
  pattern?: string;
  bgImg?: string;
  onTagChange: () => void;
}

function InputCheckBox({
  text,
  idValue,
  inputType,
  bgImg,
  onTagChange,
}: inputProps) {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="w-full h-[12.5rem] rounded-2xl relative">
        <label
          htmlFor={idValue}
          className="font-basic font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            color: isActive ? `#25442c` : '#ffffff',
          }}
        >
          {text}
        </label>
        <input
          type={inputType}
          className={`cols-span-1 row-span-1 font-basic w-full h-full rounded-2xl appearance-none  bg-cover`}
          style={{
            backgroundImage: isActive
              ? `linear-gradient(180deg, #FFEEBC 0%, #D4E8F8 100%)`
              : `url(${bgImg}) , linear-gradient(90deg,rgba(0, 0, 0, 0.76) 0%, rgba(0, 0, 0, 0.82) 100%)`,
            border: isActive ? `2px solid #25442c` : '',
          }}
          onClick={() => setIsActive(!isActive)}
          onChange={onTagChange}
          id={idValue}
          name={'preference'}
          value={text}
        />
      </div>
    </>
  );
}

export default InputCheckBox;
