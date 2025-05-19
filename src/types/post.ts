export interface Post {
  postId: number;
  title: string;
  content: string;
  author: {
    memberId: number;
    nickname: string;
  };
  board: {
    boardId: number;
    boardName: string;
    desc: string;
  };
  updatedAt: string;
  commentableYN: boolean;
  anonymousYN: boolean;
  commentCnt: number;
  viewCnt: number;
  likeCnt: number;
  scrapCnt: number;
  hashtags: string[];
  likeYN: boolean;
  scrapYN: boolean;
}

export interface Board {
  boardId: number;
  boardName: string;
}

export interface PostList {
  postId: number;
  title: string;
  previewContent: string;
  board: Board;
  authorName: string;
  updatedAt: string;
  commentableYN: boolean;
  commentCnt: number;
  viewCnt: number;
  likeCnt: number;
}

export interface PostListResponse {
  totalPages: number;
  pageNumber: number;
  previous: number;
  next: number;
  posts: Post[];
}
