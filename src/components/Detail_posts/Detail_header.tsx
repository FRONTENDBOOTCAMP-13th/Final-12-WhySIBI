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

  </>
 );
}