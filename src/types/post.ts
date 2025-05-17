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
