'use client';

import { useState, useRef, useEffect, useCallback, useActionState } from 'react';
import { useRouter } from 'next/navigation';
import { createPost } from '@/data/actions/post';
import useUserStore from '@/zustand/useUserStore';
import toast from 'react-hot-toast';

import TitleInput from '../../../../components/Write_posts/Title_input';
import CategorySelect from '../../../../components/Write_posts/Category_select';
import ContentInput from '../../../../components/Write_posts/Content_input';
import ImageUploader from '../../../../components/Write_posts/Image_uploader';
import ButtonRounded from '../../../../components/Buttons/Button_rounded';
import SubjectCategorySelect from '@/components/Write_posts/subject_category_select';
import TagProductModal from './TagProductModal';
import { Product } from '@/types';

interface RegistFormProps {
  boardType: string;
  productList: Product[];
}

export default function RegistForm({ boardType, productList }: RegistFormProps) {
  const [state, formAction, isLoading] = useActionState(createPost, null);
  const router = useRouter();
  const { user } = useUserStore();
  
  // 로컬 상태값
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState<{ [key: string]: string }>({});
  const [subjectTag, setSubjectTag] = useState<{ [key: string]: string }>({});
  const [image, setImage] = useState<string[]>([]);

  // 상품 태그 모달 열기
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false); // 게시글 등록 확인 모달

  const formRef = useRef<HTMLFormElement>(null);

  // 로그인 확인
  useEffect(() => {
    if (!user) {
      // 렌더링 완료 후 이동
      router.replace(`/login?redirect=${boardType}/new`);
    }
  }, [user, router, boardType]);

      const postPublish = () => {
      if (!title || !content) {
        alert('제목과 내용을 입력하세요!');
        return;
      }
      setIsConfirmOpen(true);
    }

    /** 등록 성공 시 토스트 */
    useEffect(() => {
      if (state?.ok === 1 && state?.item?._id) {
        toast.custom(
          (t) => (
            <div
              className={`${
                t.visible
                  ? 'animate-in slide-in-from-bottom-full'
                  : 'animate-out slide-out-to-bottom-full'
              } max-w-md w-full flex justify-between items-center bg-white shadow-lg rounded-lg ring-1 ring-gray-200 p-4`}
            >
              <p className="text-sm font-medium text-gray-900">
                게시글이 등록되었습니다.
              </p>
              <button
                onClick={() => {
                  toast.dismiss(t.id);
                  router.push(`/community/${boardType}/${state.item._id}`);
                }}
                className="px-3 py-1 rounded bg-livealone-flame text-white text-sm"
              >
                이동
              </button>
            </div>
          ), 
          { duration: 5000, position: 'top-center' } 
        );
        router.replace(`/community/${boardType}`);
        router.refresh();
      }   if (state?.ok === 0) {
        toast.custom(
          (t) => (
            <div
              className={`${
                t.visible
                  ? 'animate-in slide-in-from-bottom-full'
                  : 'animate-out slide-out-to-bottom-full'
              } max-w-md w-full bg-white shadow-lg rounded-lg ring-1 ring-red-200 p-4`}
            >
              <p className="text-sm font-medium text-red-600">
                '제목과 내용을 2글자 이상 입력해주세요.'
              </p>
            </div>
          ),
          { duration: 5000, position: 'top-center' }  
        );
      }
    }, [state, router, boardType]);

  if (boardType === 'showRoom') {

    return (
      <>
        {!user ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
              로그인 페이지로 이동합니다.
            </h3>
          </div>
        ) : (
          <form ref={formRef} action={formAction}>
            <div className="w-[400px] md:w-[600px] px-12 py-8 rounded-3xl shadow outline-1 bg-linear-to-b from-vanilla-100 to-columbia-blue-100">
              <p className="font-variable text-lg font-bold mb-2">
                집들이에 초대해주셔서 감사해요.
              </p>
              <ul className="font-logo text-md">
                <li>
                  † 집들이는 본인의 집을 자랑하는 공간입니다. 이외의 내용으로
                  글을 작성할 시 반려될 수 있습니다.
                </li>
                <li>
                  † 관리자가 승인한 글만 피드나 홈을 통해 노출됩니다.
                </li>
                <li>
                  † 불건전한 콘텐츠 작성이 확인될 경우, 즉시 삭제될 수 있습니다.
                </li>
              </ul>
            </div>
            <TitleInput value={title} onChange={setTitle} />
            <CategorySelect value={tag} onChange={setTag} />
            <ContentInput value={content} onChange={setContent} />
            {state?.ok === 0 && state?.errors?.content?.msg && (
              <p className="mt-1 text-sm text-red-600">
                {state.errors.content.msg}
              </p>
            )}
            <ImageUploader image={image} setImage={setImage} title={'집을 자랑할 사진을 넣어주세요.'}/>
            {/* 서버에 넘길 hidden input들 */}
            <input type="hidden" name="title" value={title} />
            <input type="hidden" name="content" value={content} />
            <input type="hidden" name="image" value={JSON.stringify(image)} />
            <input type="hidden"  name="tag" value={JSON.stringify(Object.values(tag))} />
            {selectedProducts.map((product) => ( 
            <input key={product._id} type="hidden" name="products"  value={product._id} />
            ))}
            <input type="hidden" name="type" value={boardType} />{' '}
            {/* 게시판 구분용 */}
            <input
              type="hidden"
              name="accessToken"
              value={user?.token?.accessToken ?? ''}
            />
            <div className="flex font-variable gap-7 mt-20">
              <ButtonRounded
                text="상품 태그"
                background="bg-vanilla-200"
                hover="hover:bg-vanilla-100"
                event={() => setIsModalOpen(true)}
              ></ButtonRounded>
              <ButtonRounded
                text={isLoading ? '등록 중...' : '발행신청'}
                background="bg-livealone-columbia-blue"
                animate="btn-gradient"
                event={postPublish}
              ></ButtonRounded>
              {/* 상품 태그 모달창 */}
              {isModalOpen && (
                <TagProductModal onClose={() => setIsModalOpen(false)} productList={productList} selected={selectedProducts} setSelected={setSelectedProducts}></TagProductModal>
               )}
              {isConfirmOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50" onClick={() => setIsConfirmOpen(false)}>
                  <div className="bg-white rounded-3xl shadow-lg p-8 w-[400px] modal-bounce" onClick={(e) => e.stopPropagation()}>
                    <p className="flex justify-center text-lg font-semibold text-gray-800 mb-6">
                      게시글을 등록하시겠습니까?
                    </p>
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => {
                          setIsConfirmOpen(false);
                          if (formRef.current) formRef.current.requestSubmit();
                        }}
                        className="px-5 py-3 bg-livealone-flame text-white rounded-full hover:shadow-lg hover:duration-300"
                      >
                        확인
                      </button>
                      <button
                        onClick={() => setIsConfirmOpen(false)}
                        className="px-5 py-3 bg-livealone-vanilla text-livealone-flame rounded-full hover:shadow-lg hover:duration-300"
                      >
                        취소
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </form>
        )}
      </>
    );
  }

  if (boardType === 'talk') {

    return (
      <form ref={formRef} action={formAction}>
        <div className="w-[500px] md:w-[600px] px-12 py-8 rounded-3xl shadow outline-1 bg-linear-to-b from-vanilla-100 to-columbia-blue-100">
          <p className="font-variable text-lg font-bold mb-2">
            자취하면서 생긴 고민이나 궁금한점 혹은 좋은 제품을 공유해주세요
          </p>
          <ul className="font-logo text-md">
            <li>
              † 자취상담소는 본인의 자취하면서 생긴 고민이나 궁금한점을
              공유하거나 좋은 제품을 추천하는 공간입니다 이외의 내용으로 글을
              작성할 시 반려될 수 있습니다.
            </li>
            <li>
              † 관리자가 승인한 글만 피드나 홈을 통해 노출됩니다.
            </li>
            <li>
              † 불건전한 콘텐츠 작성이 확인될 경우, 즉시 삭제될 수 있습니다.
            </li>
          </ul>
        </div>
        <TitleInput value={title} onChange={setTitle} />
        <SubjectCategorySelect value={subjectTag} onChange={setSubjectTag} />
        <ContentInput value={content} onChange={setContent} />
        <ImageUploader image={image} setImage={setImage} title={'나의 고민을 잘 나타낼 수 있는 사진을 골라주세요.'}/>
        {/* 서버에 넘길 hidden input들 */}
        <input type="hidden" name="title" value={title} />
        <input type="hidden" name="content" value={content} />
        <input type="hidden" name="image" value={JSON.stringify(image)} />
        <input
          type="hidden"
          name="tag"
          value={JSON.stringify(Object.values(tag))}
        />
        <input
          type="hidden"
          name="subject"
          value={JSON.stringify(Object.values(subjectTag))}
        />
        <input type="hidden" name="type" value={boardType} />{' '}
        <input
          type="hidden"
          name="accessToken"
          value={user?.token?.accessToken ?? ''}
        />
        {/* 게시판 구분용 */}
        <div className="flex font-variable gap-7 mt-20">
          <ButtonRounded
            text={isLoading ? '등록 중...' : '발행신청'}
            background="bg-livealone-columbia-blue"
            animate="btn-gradient"
            event={postPublish}
          ></ButtonRounded>
          {isConfirmOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50" onClick={() => setIsConfirmOpen(false)}>
              <div className="bg-white rounded-3xl shadow-lg p-8 w-[400px] modal-bounce" onClick={(e) => e.stopPropagation()}>
                <p className="flex justify-center text-lg font-semibold text-gray-800 mb-6">
                  게시글을 등록하시겠습니까?
                </p>
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setIsConfirmOpen(false);
                      if (formRef.current) formRef.current.requestSubmit();
                    }}
                    className="px-5 py-3 bg-livealone-flame text-white rounded-full hover:shadow-lg hover:duration-300"
                  >
                    확인
                  </button>
                  <button
                    onClick={() => setIsConfirmOpen(false)}
                    className="px-5 py-3 bg-livealone-vanilla text-livealone-flame rounded-full hover:shadow-lg hover:duration-300"
                  >
                    취소
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
    );
  }
}
