import { User } from "@/types/user";

/**
 * 게시글에 대한 답글(댓글) 정보를 나타내는 인터페이스
 * Pick<T, K>:
 * T 타입에서 K에 해당하는 속성만 선택해 새로운 타입을 만듭니다.
 * 예시: Pick<User, '_id' | 'name' | 'image'>는 User 타입에서 _id, name, image만 포함하는 타입입니다.
 */
export interface PostReply {
  // 답글의 고유 ID
  _id: number,
  // 답글 작성자 정보 (id, 이름, 이미지)
  user: Pick<User, '_id' | 'name' | 'image'>,
  // 답글 내용
  content: string,
  // 답글의 좋아요 수
  like: number,
  // 답글 생성일
  createdAt: string,
  // 답글 수정일
  updatedAt: string,
}

/**
 * 답글 작성 폼에서 사용하는 타입 (content만 포함)
 */
export type PostReplyForm = Pick<PostReply, 'content'>;

/**
 * 게시글 정보를 나타내는 인터페이스
 */
export interface Post {
  // 게시글의 고유 ID
  _id: number,
  // 게시글 타입
  type: string,
  // 게시글 제목
  title: string,
  // 게시글 본문 내용
  content: string,
  // 게시글 작성자 정보 (id, 이름, 이미지)
  user: Pick<User, '_id' | 'name' | 'image'>,
  // 게시글 조회수
  views: number,
  // 댓글 개수
  repliesCount: number,
  // 댓글 목록
  replies?: PostReply[],
  // 게시글 생성일
  createdAt: string,
  // 게시글 수정일
  updatedAt: string,
}

/**
 * 게시글 작성/수정 폼에서 사용하는 타입
 * - Partial<Pick<Post, 'type' | 'title' | 'content' | '_id'>>: Post 타입에서 type, title, content, _id만 선택해 모두 옵셔널로 만듦
 * - image, tags는 옵션
 */
export type PostForm = Partial<Pick<Post, 'type' | 'title' | 'content' | '_id'>> & {
  // 게시글 이미지
  image?: string | string[],
  // 게시글 태그(쉼표로 구분된 문자열)
  tags?: string,
}