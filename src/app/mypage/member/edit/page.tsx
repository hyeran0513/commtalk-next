"use client";

import EmailInputField from "@/components/EmailInputField";
import NicknameInputField from "@/components/NicknameInputField";
import PhoneInputField from "@/components/PhoneInputField";
import UserNameInputField from "@/components/UserNameInputField";
import {
  useDeleteMember,
  useEditMember,
  useGetMember,
} from "@/hooks/useMember";
import { Member } from "@/types/member";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";

const MemberEditPage = () => {
  const { data: member } = useGetMember();
  const methods = useForm<Member>({
    defaultValues: {
      username: member?.username,
      nickname: member?.nickname,
      email: member?.email,
      phone: member?.phone,
    },
  });

  const { handleSubmit } = methods;
  const { mutate: editMemberMutate } = useEditMember();
  const { mutate: deleteMemberMutate } = useDeleteMember();

  const onSubmit = (data: Member) => {
    editMemberMutate({
      ...data,
    });
  };

  return (
    <div className="m-auto max-w-[1240px] py-[40px]">
      <div className="mb-[30px] text-[40px] font-semibold text-center">
        개인정보 변경
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto">
          <NicknameInputField />
          <UserNameInputField />
          <EmailInputField />
          <PhoneInputField />

          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded cursor-pointer"
            >
              수정
            </button>
          </div>
        </form>
      </FormProvider>

      <button
        className="py-[8px] px-[10px] text-red-500 border border-red-500 hover:bg-red-50 transition-colors cursor-pointer rounded-md"
        onClick={() => deleteMemberMutate()}
      >
        회원 삭제
      </button>
    </div>
  );
};

export default MemberEditPage;
