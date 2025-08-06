'use client';

interface TitleInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TitleInput({ value, onChange }: TitleInputProps) {
  return (
    <div className="mt-6 w-[400px] md:w-[600px] font-variable flex border-b">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="제목"
        maxLength={20}
        className="w-full text-xl py-5 font-medium outline-none placeholder-gray-300"
      />
      <div className="p-5 text-right text-lg text-gray-400 bg-white">{value.length}/20</div>
    </div>
  );
}
