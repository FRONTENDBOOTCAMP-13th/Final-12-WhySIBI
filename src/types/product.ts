/**
 * 게시글에 대한 답글(댓글) 정보를 나타내는 인터페이스
 * Pick<T, K>:
 * T 타입에서 K에 해당하는 속성만 선택해 새로운 타입을 만듭니다.
 * 예시: Pick<User, '_id' | 'name' | 'image'>는 User 타입에서 _id, name, image만 포함하는 타입입니다.
 */
// export interface PostReply {
//   // 답글의 고유 ID
//   _id: number;
//   // 답글 작성자 정보 (id, 이름, 이미지)
//   user: Pick<User, '_id' | 'name' | 'image'>;
//   // 답글 내용
//   content: string;
//   // 답글의 좋아요 수
//   like: number;
//   // 답글 생성일
//   createdAt: string;
//   // 답글 수정일
//   updatedAt: string;
// }

/**
 * 답글 작성 폼에서 사용하는 타입 (content만 포함)
 */
// export type PostReplyForm = Pick<PostReply, 'content'>;

/**
 * 상품 정보를 나타내는 인터페이스
 */
export interface ProductImage {
  path: string;
  name: string;
  originalname: string;
}
export interface Product {
  // 상품 고유 ID
  _id: number;
  // 상품 가격
  price: number;
  // 상품 제목
  name: string;
  mainImages: ProductImage[];
}
export interface ProductListProps {
  // 상품 고유 ID
  _id: number;
  // 상품 가격
  price: number;
  // 상품 제목
  name: string;
  mainImages: ProductImage[];
}
export interface ProductList {
  // 상품 고유 ID
  list: ProductListProps[];
}
/**
 * 게시글 작성/수정 폼에서 사용하는 타입
 * - Partial<Pick<Post, 'type' | 'title' | 'content' | '_id'>>: Post 타입에서 type, title, content, _id만 선택해 모두 옵셔널로 만듦
 * - image, tags는 옵션
 */
// export type PostForm = Partial<
//   Pick<Product, 'price' | 'name' | '_id' | 'mainImages'>
// > & {
//   // 상품 이미지
//   image?: string | string[];
//   // 게시글 태그(쉼표로 구분된 문자열)
//   tags?: string;
// };
