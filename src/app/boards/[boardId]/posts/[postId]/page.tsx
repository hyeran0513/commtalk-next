"use client";

import { use } from "react";
import { BiSolidLike, BiSolidBookmark } from "react-icons/bi";
import classNames from "classnames";
import CommentList from "@/components/CommentList";
import CommentForm from "@/components/CommentForm";
import {
  useDeletePost,
  useEditPost,
  useLikePost,
  usePostDetail,
  useScrapPost,
} from "@/hooks/usePost";

export default function PostPage({
  params,
}: {
  params: Promise<{ boardId: string; postId: string }>;
}) {
  const { boardId, postId } = use(params);

  const { data: post, isLoading, error } = usePostDetail(boardId, postId);
  const { mutate: deletePost } = useDeletePost(boardId, postId);
  const { mutate: editPost } = useEditPost(boardId, postId);
  const { mutate: likePost } = useLikePost(boardId, postId);
  const { mutate: scrapPost } = useScrapPost(boardId, postId);

  if (isLoading) return <div>로딩 중..</div>;
  if (error) return <div>에러 {error.message}</div>;

  return (
    <div className="m-auto max-w-[1240px] pt-[166px] pb-[40px]">
      <div className="border border-gray-200 rounded-md p-[20px] mb-[30px]">
        <div className="flex justify-between mb-[20px]">
          <h3 className="text-[20px] font-semibold">{post.title}</h3>

          <div className="flex gap-[14px]">
            <button
              className="text-[14px] cursor-pointer"
              onClick={() => editPost()}
            >
              수정
            </button>
            <button
              className="text-[14px] cursor-pointer"
              onClick={() => deletePost()}
            >
              삭제
            </button>
          </div>
        </div>

        <p className="break-words">{post.content}</p>

        <div className="flex flex-wrap gap-[10px] mt-[20px]">
          {post.hashtags.map(
            (hashtag: { hashtagId: number; hashtag: string }) => (
              <div
                className="py-[4px] px-[10px] bg-gray-100 text-gray-500 text-sm rounded-md"
                key={hashtag.hashtagId}
              >
                {hashtag.hashtag}
              </div>
            )
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mb-[30px]">
        <div className="flex gap-[10px]">
          <button
            onClick={() => likePost()}
            className="flex items-center gap-[10px] px-[14px] py-[8px] border border-gray-200 rounded-[50px] cursor-pointer"
          >
            <div
              className={classNames(
                "flex items-center justify-center w-[30px] h-[30px] rounded-[50%]",
                {
                  "bg-indigo-500": post.likeYN,
                  "bg-gray-200": !post.likeYN,
                }
              )}
            >
              <BiSolidLike className="text-[16px] text-white" />
            </div>
            <span>{post.likeCnt}</span>
          </button>

          <button
            onClick={() => scrapPost()}
            className="flex items-center gap-[10px] px-[14px] py-[8px] border border-gray-200 rounded-[50px] cursor-pointer"
          >
            <div
              className={classNames(
                "flex items-center justify-center w-[30px] h-[30px] rounded-[50%]",
                {
                  "bg-indigo-500": post.scrapYN,
                  "bg-gray-200": !post.scrapYN,
                }
              )}
            >
              <BiSolidBookmark className="text-[16px] text-white" />
            </div>
            <span>{post.scrapCnt}</span>
          </button>
        </div>

        <div className="flex gap-[10px] items-center">
          <div className="text-gray-500 text-[14px]">
            by. {post.author?.nickname}
          </div>
          <div className="text-gray-500 text-[14px]">{post.updatedAt}</div>
        </div>
      </div>

      <CommentList postId={postId} />

      <CommentForm postId={postId} />
    </div>
  );
}
