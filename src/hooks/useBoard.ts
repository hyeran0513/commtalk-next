import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAllBoard,
  getBoard,
  getBoardsWithPin,
  getPinnedBoard,
  pinnedBoard,
  reorderPinnedBoard,
} from "@/services/boardService";

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
export const useGetPinnedBoard = () => {
  return useQuery({
    queryKey: ["pinned"],
    queryFn: () => getPinnedBoard(),
  });
};

// 게시판 핀고정 및 해제
export const usePinnedBoard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["pinnedAction"],
    mutationFn: pinnedBoard,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["pinned"],
      });
      console.log("핀고정 성공");
    },
    onError: (error) => {
      alert("핀고정 실패: " + error.message);
    },
  });
};

// 핀고정 게시판 순서 변경
export const useReorderPinnedBoard = () => {
  return useMutation({
    mutationKey: ["reorder"],
    mutationFn: ({ pinnedBoardIds }: { pinnedBoardIds: number[] }) =>
      reorderPinnedBoard(pinnedBoardIds),
  });
};

// 전체 게시판 조회 (핀고정 여부 포함)
export const useBoardsWithPin = () => {
  return useQuery({
    queryKey: ["boardsWithPin"],
    queryFn: () => getBoardsWithPin(),
  });
};
