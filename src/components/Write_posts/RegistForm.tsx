'use client';

import { useState, useRef } from 'react';
import { useActionState } from 'react';
import { useRouter } from 'next/navigation';
import { createPost } from '@/data/actions/post';
import GuideBox from './Guide_box';
import TitleInput from './Title_input';
import CategorySelect from './Category_select';
import ContentInput from './Content_input';
import ImageUploader from './Image_uploader';
import ButtonRounded from '../Buttons/Button_rounded';

export default function RegistForm() {
  const [state, formAction, isLoading] = useActionState(createPost, null);
  const router = useRouter();

  // 로컬 상태값
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<{ [key: string]: string }>({});
  const [images, setImages] = useState<string[]>([]);

  
  const selectedCategories = Object.values(category);
  const formRef = useRef<HTMLFormElement>(null);

    const postPublish = () => {
    if (!title || !content) {
      alert("제목과 내용을 입력하세요!");
      return;
    }

    const isConfirmed = confirm("게시글을 등록하시겠습니까?");
      if (isConfirmed && formRef.current) {
      formRef.current.requestSubmit(); // 서버 액션과 함께 submit
      router.back();
    }
  };

  return (
    <form ref={formRef} action={formAction}>
      <GuideBox />
      <TitleInput value={title} onChange={setTitle} />
      <CategorySelect value={category} onChange={setCategory} />
      <ContentInput value={content} onChange={setContent} />
      <ImageUploader images={images} setImages={setImages} />

      {/* 서버에 넘길 hidden input들 */}
      <input type="hidden" name="title" value={title} />
      <input type="hidden" name="content" value={content} />
      <input type="hidden" name="image" value={images[0] || ''} />
      <input type="hidden" name="detailImages" value={JSON.stringify(images.slice(1))} />
      <input type="hidden" name="tags" value={JSON.stringify(Object.values(category))} />
      <input type="hidden" name="type" value="boardType" /> {/* 게시판 구분용 */}

      <div className="flex font-variable gap-7 mt-20">
        <ButtonRounded text="상품 태그" background="bg-vanilla-200" hover="hover:bg-vanilla-100"></ButtonRounded>
        <ButtonRounded text={isLoading ? "등록 중..." : "발행신청"} background="bg-livealone-columbia-blue" animate="btn-gradient" event={postPublish}></ButtonRounded>
      </div>

      {state?.ok === 0 && (
        <p className="text-red-500 mt-3">{state.message}</p>
      )}
    </form>
  );
}
