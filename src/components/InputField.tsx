import React, { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputField = ({ label, error = "", ...props }: InputFieldProps) => {
  return (
    <div className="mb-4">
      {label && <label className="block mb-1">{label}</label>}
      <input
        className="border border-gray-300 rounded px-3 py-2 w-full"
        {...props}
      />
      {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
    </div>
  );
};

export default InputField;
