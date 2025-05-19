"use client";

import { usePopularPost } from "@/hooks/usePost";
import Link from "next/link";
import { BiComment, BiLike, BiShow } from "react-icons/bi";

type popularPost = {
  postId: number;
  board: {
    boardId: number;
    boardName: string;
  };
  title: string;
  commentableYN: true;
  commentCnt: number;
  viewCnt: number;
  likeCnt: number;
};

const PopularPosts = () => {
  const { data } = usePopularPost();

  if (!data) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="border border-gray-200 rounded-md">
      {data.map((item: popularPost) => (
        <Link
          href={`boards/${item.board.boardId}/posts/${item.postId}`}
          className="block p-[20px] border-b border-gray-200 cursor-pointer"
          key={item.postId}
        >
          <div className="mb-[8px] font-semibold">{item.title}</div>

          <div className="flex justify-between">
            <div className="text-sm text-gray-400">{item.board.boardName}</div>

            <div className="flex items-center gap-[10px]">
              <div className="flex items-center gap-[4px] text-sm text-gray-400">
                <BiComment />
                {item.commentCnt}
              </div>

              <div className="flex items-center gap-[4px] text-sm text-gray-400">
                <BiLike />
                {item.likeCnt}
              </div>

              <div className="flex items-center gap-[4px] text-sm text-gray-400">
                <BiShow />
                {item.viewCnt}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PopularPosts;
