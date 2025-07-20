'use client';
import GuideBox from "@/components/Write_posts/Guide_box"
import TitleInput from "@/components/Write_posts/Title_input"
import CategorySelect from "@/components/Write_posts/Category_select"
import ContentInput from "@/components/Write_posts/Content_input"
import ImageUploader from "@/components/Write_posts/Image_uploader"
import ButtonRounded from "@/components/Buttons/Button_rounded"
import { ButtonBack } from "@/components/Button_back";


export default function NewPost(){
  
const postPublish = () => {
    const isConfirmed = confirm("게시글을 등록하시겠습니까?");
    if (isConfirmed) {
      console.log("게시글 발행 완료!");
    } else {
      console.log("발행 취소됨");
    }
}

  return(
    <>
    <div className="post-list-wrapper flex flex-col justify-center items-center bg-white p-20">
      <ButtonBack></ButtonBack>
      <GuideBox></GuideBox>
      <TitleInput></TitleInput>
      <CategorySelect></CategorySelect>
      <ContentInput></ContentInput>
      <ImageUploader></ImageUploader>
      <div className="flex font-variable gap-7 mt-20">
        <ButtonRounded text="상품 태그" background="bg-vanilla-200" hover="hover:bg-vanilla-100"></ButtonRounded>
        <ButtonRounded text="발행신청" background="bg-livealone-columbia-blue" animate="btn-gradient" event={postPublish}></ButtonRounded>
      </div>
    </div>
    </>
  )
}