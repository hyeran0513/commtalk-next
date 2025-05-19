"use client";

import EmailInputField from "@/components/EmailInputField";
import NicknameInputField from "@/components/NicknameInputField";
import PasswordConfirmInputField from "@/components/PasswordConfirmInputField";
import PasswordInputField from "@/components/PasswordInputField";
import PhoneInputField from "@/components/PhoneInputField";
import UserNameInputField from "@/components/UserNameInputField";
import { useCreateMember } from "@/hooks/useMember";
import { Member } from "@/types/member";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";

const SignUpPage = () => {
  const methods = useForm<Member>({
    defaultValues: {
      nickname: "",
      password: "",
      confirmPassword: "",
      username: "",
      email: "",
      phone: "",
    },
  });

  const { handleSubmit } = methods;
  const { mutate: createMemberMutate } = useCreateMember();

  const onSubmit = (data: Member) => {
    createMemberMutate({
      ...data,
    });
  };

  return (
    <div className="m-auto max-w-[1240px] py-[40px]">
      <div className="mb-[30px] text-[40px] font-semibold text-center">
        회원가입
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto">
          <NicknameInputField />
          <PasswordInputField />
          <PasswordConfirmInputField />
          <UserNameInputField />
          <EmailInputField />
          <PhoneInputField />

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

export default SignUpPage;
