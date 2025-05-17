"use client";

import React, { useState } from "react";
import { useCreateComment } from "@/hooks/useComment";

interface CommentFormProps {
  postId: string;
  parentId?: number;
}

const CommentForm = ({ postId, parentId = 0 }: CommentFormProps) => {
  const [content, setContent] = useState("");
  const [anonymousYN, setAnonymousYN] = useState(false);
  const { mutate } = useCreateComment(postId);

  const handleSubmit = () => {
    if (!content.trim()) {
      alert("댓글 내용을 입력해 주세요.");
      return;
    }

    mutate(
      { parentId, content, anonymousYN },
      {
        onSuccess: () => {
          setContent("");
          setAnonymousYN(false);
        },
        onError: (error) => {
          alert("댓글 등록 중 오류가 발생했습니다." + error.message);
        },
      }
    );
  };

  return (
    <div className="mt-[20px]">
      <textarea
        className="
          p-[20px] w-full border border-transparent rounded-md 
          bg-gray-50
          focus:border-indigo-500 
          focus:outline-none 
          focus:ring-2 focus:ring-indigo-500
          transition-colors duration-300 ease-in-out
        "
        placeholder="댓글을 입력해 주세요."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="flex justify-between items-center mt-[20px]">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={anonymousYN}
            onChange={(e) => setAnonymousYN(e.target.checked)}
          />
          익명
        </label>

        <button
          onClick={handleSubmit}
          className="bg-indigo-500 text-white py-[10px] px-[20px] rounded-md disabled:opacity-50"
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default CommentForm;
