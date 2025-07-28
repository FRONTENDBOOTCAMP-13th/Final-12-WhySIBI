'use client';
import Image from "next/image";
import { HousePost } from "@/types/housePost";


export default function RoomDetail({post}: {post:HousePost}){
 return(
  <>
    <div className="w-[600px] text-center">
      <Image
        src={post.image || '/image/room_photo/roomThumbnail.svg'}
        alt="썸네일"
        width={300}
        height={190}
        className="w-full h-90 object-cover mb-3 bg-livealone-columbia-blue pointer-events-none"
      />
      <section>
        <h1 className="text-2xl font-bold">{post.title}</h1>
      </section>
    </div>
  </>
 );
}