import Image from "next/image";
import Link from "next/link";
import { PostReply } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

function getTimeAgo(originTime: string): string {
  const date = new Date(originTime);
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000); // 초 단위 차이
  
  // console.log('등록 시간', date);

  if (diff < 60) {
    return `방금 전`;
  } else if (diff < 3600) {
    const minutes = Math.floor(diff / 60);
    return `${minutes}분 전`;
  } else if (diff < 86400) {
    const hours = Math.floor(diff / 3600);
    return `${hours}시간 전`;
  } else {
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

}


export default function CommentItem({ reply }: { reply: PostReply }) {

    const profileImage = reply.user.image
    ? `${API_URL}/files/${CLIENT_ID}/${reply.user.image}`
    : '/image/community_icon/profile_sample.png';

  return (
    <div className="w-[600px] flex py-5 text-[14px] text-black gap-3">
       <div>
        <Image
            src={profileImage}
            alt={`${reply.user.name} 프로필 이미지` }
            width={34}
            height={34}
            className="h-[34px] object-cover rounded-full outline-1 outline-black"
          />
       </div>
        <div>
          <Link href="" className="font-bold leading-xl">{reply.user.name}</Link>
          <p className="mb-3 mt-1">{reply.content}</p>
          <div className="flex items-center text-gray-400 text-[12px] space-x-2">
            <time dateTime={reply.createdAt}>{getTimeAgo(reply.createdAt)}</time>
            <span>|</span>
            <form action="#">
            <button type="submit" className="hover:underline">삭제</button>
            </form>
          </div>
        </div>
    </div>
  );
}