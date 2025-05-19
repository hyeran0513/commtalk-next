import axios from "@/api/axiosInstance";

// 게시글 댓글 목록 조회
export const getComment = async (postId: string) => {
  const res = await axios.get(`/posts/${postId}/comments`);

  console.log("@@@@" + JSON.stringify(res.data));
  return res.data;
};

// 게시글 댓글 생성
interface CreateCommentPayload {
  parentId: number;
  content: string;
  anonymousYN: boolean;
}

export const createComment = async (
  postId: string,
  payload: CreateCommentPayload
) => {
  const res = await axios.post(`/posts/${postId}/comments`, payload);
  return res.data;
};

// 게시글 댓글 삭제
export const deleteComment = async (postId: string, commentId: string) => {
  const res = await axios.delete(`/posts/${postId}/comments/${commentId}`);

  return res.data;
};

// 게시글 댓글 수정
interface EditCommentPayload {
  content: string;
  anonymousYN: boolean;
}

export const editComment = async (
  postId: string,
  commentId: string,
  payload: EditCommentPayload
) => {
  const res = await axios.patch(
    `posts/${postId}/comments/${commentId}`,
    payload
  );

  return res.data;
};

// 게시글 댓글 좋아요 및 취소
export const likeComment = async (postId: string, commentId: string) => {
  const res = await axios.post(`/posts/${postId}/comments/${commentId}/like`);

  return res.data;
};
