"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import TitleInputField from "@/components/TitleInputField";
import ContentInputField from "@/components/ContentInputField";
import HashTagInputField from "@/components/HashTagInputField";
import { useCreatePost } from "@/hooks/usePost";
import { useParams } from "next/navigation";

type FormValues = {
  title: string;
  content: string;
  anonymousYN: boolean;
  commentableYN: boolean;
  hashtags: string;
};

const PostCreatePage = () => {
  const { boardId } = useParams();

  const methods = useForm<FormValues>({
    defaultValues: {
      title: "",
      content: "",
      hashtags: "",
      anonymousYN: false,
      commentableYN: true,
    },
  });

  const { register, handleSubmit } = methods;
  const { mutate: createMutate } = useCreatePost(String(boardId));

  const onSubmit = (data: FormValues) => {
    const hashtagsArray = data.hashtags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    createMutate({
      ...data,
      hashtags: hashtagsArray,
    });
  };

  return (
    <div className="m-auto max-w-[1240px] pt-[166px] pb-[40px]">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto">
          <TitleInputField />
          <ContentInputField />
          <HashTagInputField />

          <div>
            <label>
              <input type="checkbox" {...register("anonymousYN")} /> 익명 여부
            </label>
          </div>

          <div>
            <label>
              <input type="checkbox" {...register("commentableYN")} /> 댓글 허용
              여부
            </label>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded cursor-pointer"
            >
              등록
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default PostCreatePage;
