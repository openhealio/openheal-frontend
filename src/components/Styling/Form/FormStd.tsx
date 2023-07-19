import React from "react";

interface Props {
  children: React.ReactNode;
  action?: string;
  method: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function FormStd({ onSubmit, children, action, method }: Props) {
  return (
    <div className="mt-5 p-4 md:mt-0">
      <form action={action} method={method} onSubmit={onSubmit}>
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">{children}</div>
          </div>
        </div>
      </form>
    </div>
  );
}
