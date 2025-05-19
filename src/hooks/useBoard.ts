import { useQuery } from "@tanstack/react-query";
import { getAllBoard, getBoard, getPinnedBoard } from "@/services/boardService";

// 전체 게시판 조회
export const useAllBoard = () => {
  return useQuery({
    queryKey: ["allBoards"],
    queryFn: () => getAllBoard(),
  });
};

// 게시판 조회
export const useBoard = (boardId: string) => {
  return useQuery({
    queryKey: ["boards"],
    queryFn: () => getBoard(boardId),
    enabled: !!boardId,
  });
};

// 핀고정 게시판 조회
export const usePinnedBoard = () => {
  return useQuery({
    queryKey: ["pinned"],
    queryFn: () => getPinnedBoard(),
  });
};
