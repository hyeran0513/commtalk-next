import axios from "@/api/axiosInstance";

// 전체 게시판 조회
export const getBoard = async () => {
  const res = await axios.get(`/boards`);

  return res.data;
};
