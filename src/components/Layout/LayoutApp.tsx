import React from "react";
import NavBar from "components/NavBar";

interface Props {
  children: React.ReactNode;
}

export default function LayoutApp({ children }: Props) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
