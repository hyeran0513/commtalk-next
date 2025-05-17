export interface CommentWriter {
  memberId: number;
  nickname: string;
}

export interface ChildComment {
  commentId: number;
  parentId: number;
  content: string;
  writer: CommentWriter;
  anonymousYN: boolean;
  likeCount: number;
  updatedAt: string;
  likeYN: boolean;
}

export interface Comment {
  commentId: number;
  content: string;
  writer: CommentWriter;
  anonymousYN: boolean;
  likeCount: number;
  updatedAt: string;
  children: ChildComment[];
  childCount: number;
  likeYN: boolean;
}
