import React, { ReactNode } from "react";
import * as Styled from "./RoundButton.styles";

export enum RoundButtonTypeEnum {
  PRIMARY = "bg-black text-white",
}

interface RoundButtonProps {
  primaryColor?: boolean;
  children: ReactNode;
}

export const RoundButton = ({
  primaryColor = true,
  children,
}: RoundButtonProps) => {
  return (
    <Styled.RoundButtonWrapper>
      <button
        className={`
          mt-8 
          text-sm 
          font-medium 
          uppercase 
          px-6 
          py-1 
          rounded-full 
          shadow-sm
          ${primaryColor && RoundButtonTypeEnum.PRIMARY}
        `}
      >
        {children}
      </button>
    </Styled.RoundButtonWrapper>
  );
};
