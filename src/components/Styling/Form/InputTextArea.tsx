import React from "react";

interface Props {
  label: string;
  htmlForLabel: string;
  inputName: string;
  inputId: string;
  inputPalceholder: string;
  inputRows: number;
  description: string;
  inputDefaultValue?: string;
  inputClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  inputSpan?: string;
}

export default function InputTextArea({
  inputSpan,
  inputClassName,
  labelClassName,
  label,
  inputId,
  inputName,
  inputRows,
  inputPalceholder,
  inputDefaultValue,
  description,
  descriptionClassName,
  htmlForLabel,
}: Props) {
  const opt = {
    "1": "col-span-1",
    "2": "col-span-2",
    "3": "col-span-3",
    "4": "col-span-4",
    "5": "col-span-5",
    "6": "col-span-6",
  };

  return (
    <div className={`col-span-6 sm:${opt[inputSpan] || "col-span-3"}`}>
      <label
        htmlFor={htmlForLabel}
        className={`${labelClassName} block text-sm font-medium text-gray-700`}
      >
        {label}
      </label>
      <div className="mt-1">
        <textarea
          id={inputId}
          name={inputName}
          rows={inputRows}
          className={`${inputClassName} mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
          placeholder={inputPalceholder}
          defaultValue={inputDefaultValue}
        />
      </div>
      <p className={`${descriptionClassName} mt-2 text-sm text-gray-500`}>
        {description}
      </p>
    </div>
  );
}
