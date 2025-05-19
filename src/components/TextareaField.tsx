import React, { TextareaHTMLAttributes } from "react";

interface TextareaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const TextareaField = ({ label, error = "", ...props }: TextareaFieldProps) => {
  return (
    <div className="mb-4">
      {label && <label className="block mb-1">{label}</label>}
      <textarea
        className="border border-gray-300 rounded px-3 py-2 w-full"
        {...props}
      />
      {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
    </div>
  );
};

export default TextareaField;
