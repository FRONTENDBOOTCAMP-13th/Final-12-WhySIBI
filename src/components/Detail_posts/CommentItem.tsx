import Image from "next/image";
import Link from "next/link";

export default function CommentItem() {
  return (
    <div className="w-[600px] flex py-7 text-[14px] text-black gap-3">
       <div>
         <Image
            src="/image/community_icon/profile_sample.png"
            alt="유저프로필"
            width={34}
            height={34}
            className="h-[34px] object-cover rounded-full outline-1 outline-black"
          />
       </div>
        <div>
          <Link href="" className="font-bold leading-xl">농담곰 운동 좀 그만해</Link>
          <p className="mb-3 mt-1">예쁘네요</p>
          <div className="flex items-center text-gray-400 text-[12px] space-x-2">
            <span>5분 전</span>
            <span>|</span>
            <button className="hover:underline">좋아요</button>
            <span>|</span>
            <button className="hover:underline">답글달기</button>
            <span>|</span>
            <form action="#">
            <button type="submit" className="hover:underline">수정</button>
            </form>
            <span>|</span>
            <form action="#">
            <button type="submit" className="hover:underline">삭제</button>
            </form>
          </div>
        </div>
    </div>
  );
}