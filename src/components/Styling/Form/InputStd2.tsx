import React, { useContext } from "react";
import Context from "context/Context";

interface Props {
  className?: string;
  htmlForLabel?: string;
  label?: string;
  fieldName?: string;
}

export default function InputStd2({
  className,
  htmlForLabel,
  label,
  fieldName,
  ...rest
}: Props) {
  const { register } = useContext(Context);

  return (
    <div className={`${className}`}>
      <label
        htmlFor={htmlForLabel}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        {...register(fieldName)}
        {...rest}
        type="text"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  );
}
