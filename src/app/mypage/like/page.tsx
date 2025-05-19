"use client";

import PostItem from "@/components/PostItem";
import { useMyLike } from "@/hooks/useMy";
import React from "react";

type Post = {
  postId: number;
  title: string;
  previewContent: string;
  board: {
    boardId: number;
    boardName: string;
  };
  authorName: string;
  updatedAt: string;
  commentableYN: boolean;
  commentCnt: number;
  viewCnt: number;
  likeCnt: number;
};

const MyLikePage = () => {
  const { data: likes } = useMyLike();

  if (!likes) return <div>로딩 중...</div>;

  return (
    <div>
      {likes?.posts?.map((post: Post) => (
        <PostItem key={post.postId} post={post} />
      ))}
    </div>
  );
};

export default MyLikePage;
