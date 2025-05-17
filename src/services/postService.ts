import axios from "@/api/axiosInstance";

export const getPost = async (boardId: string, postId: string) => {
  const res = await axios.get(`/boards/${boardId}/posts/${postId}`);

  return res.data;
};
