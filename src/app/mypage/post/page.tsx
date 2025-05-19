"use client";

import PostItem from "@/components/PostItem";
import { useMyPost } from "@/hooks/useMy";
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

const MyPostPage = () => {
  const { data: posts } = useMyPost();

  if (!posts) return <div>로딩 중...</div>;

  return (
    <div>
      {posts?.posts?.map((post: Post) => (
        <PostItem key={post.postId} post={post} />
      ))}
    </div>
  );
};

export default MyPostPage;
