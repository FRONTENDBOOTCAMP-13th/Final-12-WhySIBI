import Image from "next/image";
import Link from "next/link";
import { PostReply } from "@/types";
import { getTimeAgo } from "@/utils/time";
import CommentDeleteForm from "./CommentDeleteForm";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';


export default function CommentItem({ reply }: { reply: PostReply }) {

    const profileImage = reply.user.image
    ? `${API_URL}/${reply.user.image}`
    : '/image/community_icon/profile_sample.png';

  return (
    <div className="w-[600px] flex py-5 text-[14px] text-black gap-3 px-3">
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
            <CommentDeleteForm reply={reply}/>
          </div>
        </div>
    </div>
  );
}
