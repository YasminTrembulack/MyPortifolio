
import { forwardRef } from "react";
import { Div } from "./Divider.styles";

type DividerProps = {
  variant: "blue" | "yellow";
  isVisible: boolean;
};

export const Divider = forwardRef<HTMLElement, DividerProps>(
  ({ variant, isVisible }) => {
    return <Div $variant={variant} $visible={isVisible} />
  }
);