'use client';
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRoomStore } from "@/zustand/roomStore";

export default function DetailHeader(){
  const params = useParams();
  const postId = Number(params.id);
  const post = useRoomStore((state) => state.posts.find(p => p._id === postId));

  if (!post) {
    return <div className="text-center">게시글을 찾을 수 없습니다.</div>;
  }


 return(
  <>
    <div className="w-[600px] text-center overflow-hidden">
      <Image
        src={post.image || '/image/room_photo/postThumnail.svg'}
        alt="썸네일"
        width={300}
        height={190}
        priority
        className="w-full h-90 object-cover bg-livealone-columbia-blue pointer-events-none"
      />
      <section className="h-25 [box-shadow:0px_2px_20px_0px_rgba(0,0,0,0.1)] bg-white p-5 mb-10 flex items-center justify-between">
        <Image src="/image/community_icon/heartIcon.svg" width={28} height={28} alt="공감하기" className="w-auto mt-2 self-start" />
        <div className="space-y-1.5">
          <h1 className="text-xl font-bold">{post.title}</h1>
          <p className ="text-gray-icon text-sm">조회수 {post.views}</p>
        </div>
        <Image src="/image/community_icon/bookMark_gray.svg" width={20} height={20} alt="복마크" className="w-auto mt-2 self-start" />
      </section>
    </div>
  </>
 );
}