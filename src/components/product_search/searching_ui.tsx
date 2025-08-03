import Image from 'next/image';

interface SearchingUIProps {
  text?: string;
}

function SearchingUI({ text }: SearchingUIProps) {
  return (
    <div className="flex flex-col justify-center items-center h-40 my-20">
      <Image
        src="/image/community_icon/loading.svg"
        alt="로딩중"
        width={50}
        height={50}
        className="animate-spin"
      />
      <p className="my-5 text-gray-400 text-sm">{text}</p>
    </div>
  );
}
export default SearchingUI;
