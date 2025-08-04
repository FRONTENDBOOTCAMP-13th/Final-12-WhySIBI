interface ContentInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ContentInput({ value, onChange }: ContentInputProps) {
  return (
    <div className="mt-5 w-[600px] font-variable flex">
      <textarea
        placeholder="내용을 입력해주세요."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-[300px] text-md placeholder-gray-300 resize-none rounded outline-none"
      />
    </div>
  );
}
