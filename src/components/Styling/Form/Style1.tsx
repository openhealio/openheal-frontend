import React from "react";

interface Props {
  children: React.ReactNode;
  label?: string;
  span?: string;
  className?: string;
}

export default function InputStd({ children, label, span, className }: Props) {
  return (
    <div className={`col-span-6 sm:${className}`}>
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <span className="w-32 inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
          {span}
        </span>
        {children}
      </div>
    </div>
  );
}
