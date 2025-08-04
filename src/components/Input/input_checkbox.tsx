import { useState } from 'react';

interface inputProps {
  text: string;
  idValue: string;
  inputType: string;
  pattern?: string;
  bgImg?: string;
  valueText?: string;
  onTagChange: () => void;
}

function InputCheckBox({
  text,
  idValue,
  inputType,
  bgImg,
  valueText,
  onTagChange,
}: inputProps) {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="w-full h-[12.5rem] rounded-2xl relative">
        <label
          htmlFor={idValue}
          className="font-basic w-full text-center text-lg font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
              : `linear-gradient(90deg,rgba(0, 0, 0, 0.36) 0%, rgba(0, 0, 0, 0.45) 100%) , url(${bgImg}) `,
            border: isActive ? `2px solid #25442c` : '',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onClick={() => setIsActive(!isActive)}
          onChange={onTagChange}
          id={idValue}
          name={'preference'}
          value={valueText}
          data-value-text={valueText}
          data-text={text}
        />
      </div>
    </>
  );
}

export default InputCheckBox;
