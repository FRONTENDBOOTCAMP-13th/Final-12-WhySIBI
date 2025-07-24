import { User } from "@/types/user";
import { PostReply } from "./post";

// 등록된 게시물의 형태를 정의 (완전한 정보)
export interface HousePost {
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
  // 게시글 이미지
  image?: string;
  // 게시글 상세 이미지
  detailImages?: string[];
}