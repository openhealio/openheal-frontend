import React, { useContext } from "react";
import Context from "context/Context";

interface Props {
  className?: string;
  label: string;
  fieldName?: string;
  onChange?: (e) => void;
  placeholder?: string;
}

export default function FilePickerStd({
  onChange,
  placeholder,
  label,
  className,
  fieldName,
  ...rest
}: Props) {
  const { register } = useContext(Context);

  return (
    <div className={`col-span-6 sm:${className}`}>
      <label htmlFor={fieldName} className="flex flex-row">
        <span className="hover:text-gray-900 w-32 inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
          {label}
        </span>
        <input
          disabled
          type="text"
          placeholder={placeholder || "<- Clique Aqui"}
          className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {/* <input id="file-upload" {...register(fileName)} name="file-upload" type="file" className="sr-only"/> */}
        <input
          {...register(fieldName)}
          name={fieldName}
          id={fieldName}
          onChange={onChange}
          type="file"
          className="sr-only"
          {...rest}
        />
      </label>
    </div>
  );
}
