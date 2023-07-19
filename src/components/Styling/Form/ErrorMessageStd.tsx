import React from "react";
import Context from "context/Context";
import { useContext } from "react";

interface Props {
  className?: string;
  fieldName: string;
}

export default function ErrorMessageStd({ fieldName, className }: Props) {
  const { errors } = useContext(Context);
  // const message = errors[fieldName]?.message

  return (
    <div className={className}>
      <p className="text-red-300 text-sm">{errors[fieldName]?.message}</p>
    </div>
  );
}
