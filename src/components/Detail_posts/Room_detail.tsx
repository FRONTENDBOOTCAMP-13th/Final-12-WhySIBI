'use client';
import Image from "next/image";
import { useState } from "react";
import type { HousePost } from "../dummyHousePosts";

interface Tag {
  id: number;
  x: number;
  y: number;
  productName: string;
  price: number;
  imageUrl: string;
}

export default function RoomDetail({post}: {post:HousePost}){
  const [tags, setTags] = useState<Tag[]>([
    {
      id: 1,
      x: 150,
      y: 120,
      productName: "플로우 자석형 침대 조명",
      price: 124000,
      imageUrl: "/image/bedlamp.png", // 예시 이미지
    },
  ]);

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  }

 return(
  <>
    <div className="w-[600px] text-center">
      <Image
        src={post.imgUrl}
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