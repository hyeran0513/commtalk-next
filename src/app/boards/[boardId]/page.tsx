"use client";

import FloatingButton from "@/components/FloatingButton";
import PostItem from "@/components/PostItem";
import { useBoard } from "@/hooks/useBoard";
import { usePostList } from "@/hooks/usePost";
import { PostList } from "@/types/post";
import { use } from "react";

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
        <PostItem key={post.postId} post={post} />
      ))}
    </div>
  );
}
