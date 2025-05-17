import axios from "@/api/axiosInstance";

// 게시글 댓글 목록 조회
export const getComment = async (postId: string) => {
  const res = await axios.get(`/posts/${postId}/comments`);

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
  const response = await axios.post(`/posts/${postId}/comments`, payload);
  return response.data;
};
