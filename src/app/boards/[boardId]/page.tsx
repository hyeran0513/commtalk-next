"use client";

import FloatingButton from "@/components/FloatingButton";
import { useBoard } from "@/hooks/useBoard";
import { usePostList } from "@/hooks/usePost";
import { PostList } from "@/types/post";
import Link from "next/link";
import { use } from "react";
import { BiComment, BiLike, BiShow } from "react-icons/bi";

export default function BoardPage({
  params,
}: {
  params: Promise<{ boardId: string; postId: string }>;
}) {
  const { boardId } = use(params);
  const { data: board, isLoading, error } = useBoard(boardId);
  const { data: postList } = usePostList(boardId);

  if (isLoading) return <div>로딩 중..</div>;
  if (error) return <div>에러 {error.message}</div>;

  return (
    <div className="m-auto max-w-[1240px] pt-[166px] pb-[40px]">
      <FloatingButton boardId={boardId} />
      <div className="mb-[40px] border border-gray-200 rounded-md p-[20px]">
        <div className="mb-[14px] font-semibold text-xl">
          {board?.boardName}
        </div>
        <div>{board?.desc}</div>
      </div>

      {postList?.posts?.map((post: PostList) => (
        <Link
          href={`/boards/${boardId}/posts/${post.postId}`}
          key={post.postId}
          className="block py-[20px] border-b border-gray-200"
        >
          <div className="mb-[10px] inline-block px-[8px] py-[4px] bg-indigo-50 text-indigo-400 text-xs rounded-sm">
            {post.board.boardName}
          </div>

          <div>
            <div className="mb-[10px] text-lg font-semibold">{post.title}</div>

            <div className="mb-[10px]">{post.previewContent}</div>

            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-400">
                {post.authorName} · {post.updatedAt}
              </div>

              <div className="flex items-center gap-[10px]">
                <div className="flex items-center gap-[4px] text-sm text-gray-400">
                  <BiComment />
                  {post.commentCnt}
                </div>

                <div className="flex items-center gap-[4px] text-sm text-gray-400">
                  <BiLike />
                  {post.likeCnt}
                </div>

                <div className="flex items-center gap-[4px] text-sm text-gray-400">
                  <BiShow />
                  {post.viewCnt}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
