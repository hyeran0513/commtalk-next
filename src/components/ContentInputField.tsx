"use client";

import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextareaField from "./TextareaField";

const ContentInputField = () => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name="content"
        control={control}
        rules={{
          validate: (data: string) => {
            if (!data || data.length === 0) {
              return "내용을 입력해주세요.";
            }
            return true;
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <TextareaField
            label="내용"
            placeholder="내용을 입력해주세요."
            value={field.value}
            onChange={field.onChange}
            error={error?.message}
          />
        )}
      />
    </div>
  );
};

export default ContentInputField;
