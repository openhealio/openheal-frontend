import React from "react";

interface Props {
  labelClassName?: string;
  selectClassName?: string;
  htmlForLabel: string;
  label: string;
  selectId: string;
  selectName: string;
  selectAutoComplete: string;
  options: string[];
}

export default function DropBoxStd({
  labelClassName,
  selectClassName,
  htmlForLabel,
  label,
  selectId,
  selectName,
  selectAutoComplete,
  options,
}: Props) {
  return (
    <div className="col-span-6 sm:col-span-3">
      <label
        htmlFor={htmlForLabel}
        className={`${labelClassName} block text-sm font-medium text-gray-700`}
      >
        {label}
      </label>
      <select
        id={selectId}
        name={selectName}
        autoComplete={selectAutoComplete}
        className={`${selectClassName} mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
      >
        {options.map((option) => (
          <>
            <option>{option}</option>
          </>
        ))}
      </select>
    </div>
  );
}
