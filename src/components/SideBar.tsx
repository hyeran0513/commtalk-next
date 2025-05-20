"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import Modal from "./Modal";
import { useForm, FormProvider } from "react-hook-form";
import CurrentPasswordInputField from "./CurrentPasswordInputField";
import { useConfirmPassword } from "@/hooks/useMember";
import { CurrentPassword } from "@/types/member";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const methods = useForm<CurrentPassword>({
    defaultValues: {
      currentPassword: "",
    },
  });

  const { handleSubmit } = methods;

  const { mutate: confirmPasswordMutate } = useConfirmPassword(() => {
    setIsOpen(false);
  });

  const onSubmit = (data: CurrentPassword) => {
    console.log("???????????");
    confirmPasswordMutate(data);
  };

  return (
    <div className="w-[360px] border-r border-gray-200 h-screen">
      <div className="flex justify-content items-center px-[20px] h-[72px] border-b border-gray-200">
        <Link href="/mypage" className="text-black-200 text-3xl font-bold">
          커톡커톡
        </Link>
      </div>

      <div>
        <ul>
          <li className="px-[20px] py-[10px] cursor-pointer">
            <Link href="/mypage/comment">나의 댓글 작성 게시글</Link>
          </li>

          <li className="px-[20px] py-[10px] cursor-pointer">
            <Link href="/mypage/like">나의 좋아요 게시글</Link>
          </li>

          <li className="px-[20px] py-[10px] cursor-pointer">
            <Link href="/mypage/post">나의 작성 게시글</Link>
          </li>

          <li className="px-[20px] py-[10px] cursor-pointer">
            <Link href="/mypage/scrap">나의 스크랩 게시글</Link>
          </li>

          <li className="px-[20px] py-[10px] cursor-pointer">
            <button onClick={() => setIsOpen(true)}>개인정보 변경</button>
          </li>

          <li className="px-[20px] py-[10px] cursor-pointer">
            <Link href="/" className="flex items-center gap-[8px]">
              <BiHomeAlt /> 홈으로 이동하기
            </Link>
          </li>
        </ul>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-semibold mb-4">본인인증</h2>

        <div className="mb-4">
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-xl mx-auto"
            >
              <CurrentPasswordInputField />

              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-md transition-colors text-white cursor-pointer"
                >
                  확인
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </Modal>
    </div>
  );
};

export default SideBar;
