// 등록된 게시물의 형태를 정의 (완전한 정보)
export interface HousePost {
  _id: number;
  user: string;
  title: string;
  content: string;
  imgUrl: string;
  detailImages?: string[];
  isLiked: number;
  views: number;
  comments: number;
  bookMark: boolean;
  category?: string[];
}