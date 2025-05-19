"use client";

import { useAllBoard } from "@/hooks/useBoard";
import { Board } from "@/types/board";
import { useRouter } from "next/navigation";
import React from "react";

interface CategoryProps {
  onClose: () => void;
}

const Category = ({ onClose }: CategoryProps) => {
  const { data: boards, isLoading, error } = useAllBoard();
  const router = useRouter();

  const handleNavigate = (path: string) => {
    onClose();
    router.push(path);
  };

  if (isLoading) return <div>로딩 중..</div>;
  if (error) return <div>에러 {error.message}</div>;

  return (
    <div className="border-b border-gray-200">
      <div className="grid grid-cols-5 m-auto max-w-[1240px] w-full py-[30px]">
        {boards.map((board: Board) => (
          <button
            onClick={() => handleNavigate(`/boards/${board?.boardId}`)}
            className="py-[10px] text-left cursor-pointer"
            key={board?.boardId}
          >
            {board?.boardName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
