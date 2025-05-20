"use client";

import Modal from "@/components/Modal";
import PinBoards from "@/components/PinBoards";
import PopularPosts from "@/components/PopularPosts";
import { useBoardsWithPin, usePinnedBoard } from "@/hooks/useBoard";
import { useSelectedBoards } from "@/hooks/useSelectedBoards";
import { useState } from "react";
import { BiPin } from "react-icons/bi";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: boardsWithPin } = useBoardsWithPin();
  const { mutate: pinnedBoardMutate } = usePinnedBoard();

  const { selectedBoards, initializeSelected, toggleBoard } =
    useSelectedBoards(boardsWithPin);

  const handleOpenModal = () => {
    initializeSelected();
    setIsOpen(true);
  };

  const handleSave = () => {
    if (!boardsWithPin) return;

    const payload = selectedBoards
      .map((boardId) => {
        const board = boardsWithPin.find((b) => b.boardId === boardId);

        if (!board) return null;

        return {
          boardId: board.boardId,
          boardName: board.boardName,
          pinnedBoardId: board.pinnedBoardId ?? 0,
        };
      })
      .filter(
        (
          item
        ): item is {
          boardId: number;
          boardName: string;
          pinnedBoardId: number;
        } => item !== null
      );

    pinnedBoardMutate(payload);
    setIsOpen(false);
  };

  return (
    <div className="m-auto max-w-[1240px] pt-[166px] pb-[40px]">
      <main className="flex gap-[40px]">
        <section className="flex-1">
          <div className="flex items-center justify-between mb-[20px]">
            <h3 className="text-lg font-semibold">나만의 핀 고정 게시판</h3>

            <button
              onClick={handleOpenModal}
              className="flex items-center gap-[4px] cursor-pointer text-sm text-gray-600"
            >
              <BiPin /> 핀 고정 설정
            </button>
          </div>
          <PinBoards />
        </section>

        <aside className="w-[360px]">
          <div className="mb-[20px]">
            <h3 className="text-lg font-semibold">실시간 인기 게시글</h3>
          </div>
          <PopularPosts />
        </aside>
      </main>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-semibold mb-4">나만의 핀 고정</h2>

        <div className="mb-4 max-h-60 overflow-y-auto pr-2">
          <div className="flex flex-col gap-2">
            {boardsWithPin?.map((board) => (
              <label key={board.boardId} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedBoards.includes(board.boardId)}
                  onChange={() => toggleBoard(board.boardId)}
                />
                {board.boardName}
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-md transition-colors text-white cursor-pointer"
          >
            저장
          </button>
        </div>
      </Modal>
    </div>
  );
}
