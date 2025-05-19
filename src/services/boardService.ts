import axios from "@/api/axiosInstance";

// 전체 게시판 조회
export const getAllBoard = async () => {
  const res = await axios.get(`/boards`);

  return res.data;
};

// 게시판 조회
export const getBoard = async (boardId: string) => {
  const res = await axios.get(`/boards/${boardId}`);

  return res.data;
};

// 핀고정 게시판 조회
export const getPinnedBoard = async () => {
  const res = await axios.get("/boards/pinned");

  return res.data;
};
