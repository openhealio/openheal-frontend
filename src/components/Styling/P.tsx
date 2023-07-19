import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function P({ className, children }: Props) {
  return (
    <p
      className={`px-4 lg:px-80  mt-6 text-lg text-justify font-camber leading-6 text-gray-800 ${className}`}
    >
      {children}
    </p>
  );
}
