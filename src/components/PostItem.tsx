"use client";

import Link from "next/link";
import { BiComment, BiLike, BiShow } from "react-icons/bi";
import React from "react";

type Post = {
  postId: number;
  board: {
    boardId: number;
    boardName: string;
  };
  title: string;
  previewContent?: string;
  authorName: string;
  updatedAt: string;
  commentCnt: number;
  likeCnt: number;
  viewCnt: number;
};

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <Link
      href={`/boards/${post.board.boardId}/posts/${post.postId}`}
      className="block py-[20px] border-b border-gray-200"
    >
      <div className="mb-[10px] inline-block px-[8px] py-[4px] bg-indigo-50 text-indigo-400 text-xs rounded-sm">
        {post.board.boardName}
      </div>

      <div>
        <div className="mb-[10px] text-lg font-semibold">{post.title}</div>

        {post.previewContent && (
          <div className="mb-[10px]">{post.previewContent}</div>
        )}

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
  );
};

export default PostItem;
