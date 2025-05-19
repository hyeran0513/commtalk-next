"use client";

import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputField from "./InputField";

const PasswordInputField = () => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name="password"
        control={control}
        rules={{
          validate: (data: string) => {
            if (!data || data.length === 0) {
              return "패스워드를 입력해주세요.";
            }
            return true;
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <InputField
            label="패스워드"
            placeholder="패스워드를 입력해주세요."
            value={field.value}
            onChange={field.onChange}
            error={error?.message}
          />
        )}
      />
    </div>
  );
};

export default PasswordInputField;
