import GuideBox from "@/components/Write_posts/Guide_box"
import TitleInput from "@/components/Write_posts/Title_input"
import CategorySelect from "@/components/Write_posts/Category_select"
import ContentInput from "@/components/Write_posts/Content_input"
import ImageUploader from "@/components/Write_posts/Image_uploader"

export default function NewPost(){
  return(
    <>
    <div className="post-list-wrapper flex flex-col justify-center items-center bg-white p-20">
      <GuideBox></GuideBox>
      <TitleInput></TitleInput>
      <CategorySelect></CategorySelect>
      <ContentInput></ContentInput>
      <ImageUploader></ImageUploader>
    </div>
    </>
  )
}