"use client";

import Link from "next/link";
import { BiEditAlt } from "react-icons/bi";

const FloatingButton = ({ boardId }: { boardId: string }) => {
  return (
    <div className="fixed right-[50px] bottom-[50px]">
      <Link
        href={`/boards/${boardId}/create`}
        className="w-[70px] h-[70px] rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg hover:bg-indigo-600 transition-colors"
      >
        <BiEditAlt className="text-[30px]" />
      </Link>
    </div>
  );
};

export default FloatingButton;
