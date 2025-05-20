import { BoardWithPin } from "@/types/board";
import { useState } from "react";

export function useSelectedBoards(initialBoards: BoardWithPin[] | undefined) {
  const [selectedBoards, setSelectedBoards] = useState<number[]>([]);

  // 초기 선택 상태 세팅
  const initializeSelected = () => {
    if (!initialBoards) return;
    const initiallySelected = initialBoards
      .filter((board) => board.pinnedBoardId && board.pinnedBoardId !== 0)
      .map((board) => board.boardId);
    setSelectedBoards(initiallySelected);
  };

  // 체크박스 토글
  const toggleBoard = (boardId: number) => {
    setSelectedBoards((prev) =>
      prev.includes(boardId)
        ? prev.filter((id) => id !== boardId)
        : [...prev, boardId]
    );
  };

  return { selectedBoards, initializeSelected, toggleBoard, setSelectedBoards };
}
