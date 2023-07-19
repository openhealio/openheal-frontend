import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function LayoutTextEditor({ children }: Props) {
  return <>{children}</>;
}
