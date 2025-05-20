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

// 게시판 핀고정 및 해제
export const pinnedBoard = async (
  data: {
    boardId: number;
    boardName: string;
    pinnedBoardId: number;
  }[]
) => {
  const res = await axios.post("/boards/pinned", data);

  return res.data;
};

// 핀고정 게시판 순서 변경
export const reorderPinnedBoard = async (pinnedBoardIds: number[]) => {
  const res = await axios.patch("/boards/pinned/reorder", {
    pinnedBoardIds,
  });

  return res.data;
};

// 전체 게시판 조회 (핀고정 여부 포함)
export const getBoardsWithPin = async () => {
  const res = await axios.get("/boards/with-pin");

  return res.data;
};
