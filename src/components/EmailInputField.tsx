"use client";

import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputField from "./InputField";

const EmailInputField = () => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name="email"
        control={control}
        rules={{
          validate: (data: string) => {
            if (!data || data.length === 0) {
              return "이메일을 입력해주세요.";
            }
            return true;
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <InputField
            label="이메일"
            placeholder="이메일을 입력해주세요."
            value={field.value}
            onChange={field.onChange}
            error={error?.message}
          />
        )}
      />
    </div>
  );
};

export default EmailInputField;
