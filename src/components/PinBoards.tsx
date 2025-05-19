import { usePinnedBoard } from "@/hooks/useBoard";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";

type BoardItem = {
  pinnedBoardId: number;
  boardId: number;
  boardName: string;
  desc: string;
  posts: {
    postId: number;
    board: { boardId: number; boardName: string };
    title: string;
    commentableYN: boolean;
    commentCnt: number;
    viewCnt: number;
    likeCnt: number;
  }[];
};

export default function PinBoards() {
  const { data } = usePinnedBoard();
  const [items, setItems] = useState<BoardItem[]>([]);

  useEffect(() => {
    if (data) {
      setItems(data);
    }
  }, [data]);

  return (
    <ReactSortable
      tag="ul"
      list={items}
      setList={setItems}
      className="grid grid-cols-2 gap-[20px]"
      dataIdAttr="data-id"
    >
      {items.map((item) => (
        <li
          key={item.pinnedBoardId}
          data-id={String(item.pinnedBoardId)}
          className="p-[20px] border border-gray-200 rounded-md cursor-grab"
        >
          <h3 className="font-bold mb-2">{item.boardName}</h3>
          <p className="mb-2 text-sm text-gray-600">{item.desc}</p>

          <ul className="list-disc list-inside text-sm">
            {item.posts.map((post) => (
              <li key={post.postId}>
                <Link href={`/boards/${item.boardId}/posts/${post.postId}`}>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ReactSortable>
  );
}
