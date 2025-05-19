import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputField from "./InputField";

const HashTagInputField = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="hashtags"
      control={control}
      rules={{
        validate: (data: string) => {
          if (!data || data.length === 0) {
            return "해시 태그를 입력해주세요.";
          }
          return true;
        },
      }}
      render={({ field, fieldState: { error } }) => (
        <InputField
          label="해시 태그"
          placeholder="해시 태그를 입력해주세요."
          value={field.value}
          onChange={field.onChange}
          error={error?.message}
        />
      )}
    />
  );
};

export default HashTagInputField;
