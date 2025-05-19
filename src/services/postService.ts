import axios from "@/api/axiosInstance";

// 게시판 게시글 목록 조회
export const getPostList = async (
  boardId: string,
  keyword: string,
  page: number = 0,
  size: number = 10,
  sort: string[] = []
) => {
  const res = await axios.get(`/boards/${boardId}/posts`, {
    params: {
      keyword,
      page,
      size,
      sort,
    },
  });

  return res.data;
};

// 게시글 생성
export const createPost = async (
  boardId: string,
  title: string,
  content: string,
  anonymousYN: boolean,
  commentableYN: boolean,
  hashtags: string[]
) => {
  const res = await axios.post(`/boards/${boardId}/posts`, {
    title,
    content,
    anonymousYN,
    commentableYN,
    hashtags,
  });

  return res.data;
};

// 게시글 상세 조회
export const getPostDetail = async (boardId: string, postId: string) => {
  const res = await axios.get(`/boards/${boardId}/posts/${postId}`);

  return res.data;
};

// 게시글 삭제
export const deletePost = async (boardId: string, postId: string) => {
  const res = await axios.delete(`boards/${boardId}/posts/${postId}`);

  return res.data;
};

// 게시글 수정
export const editPost = async (boardId: string, postId: string) => {
  const res = await axios.patch(`boards/${boardId}/posts/${postId}`);

  return res.data;
};
