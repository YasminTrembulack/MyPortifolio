
import { forwardRef } from "react";
import * as S from "./BaseSection.styles";
import { type SectionProps } from "./BaseSection.styles";
import Divider from "../Divider/Divider";
import  SectionHeader, { type SectionHeaderProps } from "../SectionHeader/SectionHeader";

type BaseProps = {
  children: React.ReactNode;
  id: string;
};

type Props = BaseProps & SectionHeaderProps & SectionProps;

type BaseSection = React.ForwardRefExoticComponent<
  Props & React.RefAttributes<HTMLElement>
> & {
  Grid: React.FC<{ children: React.ReactNode }>;
};

const Base = forwardRef<HTMLElement, Props>(
  function Base(props, ref) {
    return (
      <S.Section
        id={props.id}
        ref={ref}
        $paddingBottom={props.$paddingBottom}
        $paddingTop={props.$paddingTop}
        $minHeight={props.$minHeight}
      >
        <S.Container>
          <SectionHeader
            description={props.description}
            title={props.title}
            variant={props.variant}
            eyebrow={props.eyebrow}
            isVisible={props.isVisible}
            $headerAlign={props.$headerAlign}
          />

          <Divider
            variant={props.variant}
            isVisible={props.isVisible}
          />

          {props.children}
        </S.Container>
      </S.Section>
    );
  }
);

const BaseSection = Base as BaseSection;

BaseSection.Grid = function Grid({ children }: { children: React.ReactNode }) {
  return <S.Grid>{children}</S.Grid>;
};

export default BaseSection;