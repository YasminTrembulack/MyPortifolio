
import { forwardRef } from "react";
import { Div } from "./Divider.styles";

type DividerProps = {
  variant: "blue" | "yellow";
  isVisible: boolean;
};

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ variant, isVisible }, ref) => {
    return (
      <Div
        ref={ref}
        $variant={variant}
        $visible={isVisible}
      />
    );
  }
);

export default Divider;