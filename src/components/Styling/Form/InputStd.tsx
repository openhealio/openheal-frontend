import React, { useContext } from "react";
import Context from "context/Context";

interface Props {
  label?: string;
  span?: string;
  className?: string;
  fieldName: string;
}

export default function InputStd({
  label,
  fieldName,
  span,
  className,
  ...rest
}: Props) {
  const { register } = useContext(Context);

  return (
    <div className={`${className}`}>
      <label
        htmlFor={label}
        className="w-full text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <span className="w-32 inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
          {span}
        </span>
        <input
          type="text"
          className="w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          {...register(fieldName)}
          {...rest}
        />
      </div>
    </div>
  );
}
