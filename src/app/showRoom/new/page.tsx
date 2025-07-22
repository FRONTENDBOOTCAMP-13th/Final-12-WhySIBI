'use client';
import { useState } from "react";
import GuideBox from "@/components/Write_posts/Guide_box"
import TitleInput from "@/components/Write_posts/Title_input"
import CategorySelect from "@/components/Write_posts/Category_select"
import ContentInput from "@/components/Write_posts/Content_input"
import ImageUploader from "@/components/Write_posts/Image_uploader"
import ButtonRounded from "@/components/Buttons/Button_rounded"
import { ButtonBack } from "@/components/Button_back";
import { useRoomStore } from "@/zustand/roomStore";
import { useRouter } from 'next/navigation';


export default function NewPost(){
  const addPost = useRoomStore((state) => state.addPost);
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [category, setCategory] = useState<CategoryValue>({});

  type CategoryValue = {
    [key: string]: string;
  };
  
  const postPublish = () => {
    if (!title || !content) {
      alert("제목과 내용을 입력하세요!");
      return;
    }

    const isConfirmed = confirm("게시글을 등록하시겠습니까?");
    if (isConfirmed) {
      const selectedCategories = Object.values(category);

      const newPost = {
      title: title,
      content: content,
      imgUrl: images[0],
      detailImages: images.slice(1),
      category: selectedCategories,
      bookMark: false,
    };

      addPost(newPost);
      router.back();
    }
  };

  return(
    <>
    <div className="post-list-wrapper flex flex-col justify-center items-center bg-white p-20">
      <div className="w-[600px] mb-6">
        <ButtonBack></ButtonBack>
      </div>
      <GuideBox></GuideBox>
      <TitleInput value={title} onChange={setTitle}></TitleInput>
      <CategorySelect value={category} onChange={setCategory}></CategorySelect>
      <ContentInput value={content} onChange={setContent}></ContentInput>
      <ImageUploader images={images} setImages={setImages}></ImageUploader>
      <div className="flex font-variable gap-7 mt-20">
        <ButtonRounded text="상품 태그" background="bg-vanilla-200" hover="hover:bg-vanilla-100"></ButtonRounded>
        <ButtonRounded text="발행신청" background="bg-livealone-columbia-blue" animate="btn-gradient" event={postPublish}></ButtonRounded>
      </div>
    </div>
    </>
  )
}