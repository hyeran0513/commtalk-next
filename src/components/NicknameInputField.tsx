"use client";

import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputField from "./InputField";

const NicknameInputField = () => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name="nickname"
        control={control}
        rules={{
          validate: (data: string) => {
            if (!data || data.length === 0) {
              return "닉네임을 입력해주세요.";
            }
            return true;
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <InputField
            label="닉네임"
            placeholder="닉네임을 입력해주세요."
            value={field.value}
            onChange={field.onChange}
            error={error?.message}
          />
        )}
      />
    </div>
  );
};

export default NicknameInputField;
