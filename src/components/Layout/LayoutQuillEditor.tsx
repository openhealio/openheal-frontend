import NavBar from "components/NavBar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function LayoutQuillEditor({ children }: Props) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
