
import { forwardRef } from "react";
import * as S from "./Section.styles";
import { type SectionProps } from "./Section.styles";
import Divider from "../Divider/Divider";
import  SectionHeader, { type SectionHeaderProps } from "../SectionHeader/SectionHeader";

type BaseProps = {
  children: React.ReactNode;
  id: string;
};

type Props = BaseProps & SectionHeaderProps & SectionProps;

type Section = React.ForwardRefExoticComponent<
  Props & React.RefAttributes<HTMLElement>
> & {
  Grid: React.FC<{ children: React.ReactNode }>;
};

const BaseSection = forwardRef<HTMLElement, Props>(
  function BaseSection(props, ref) {
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

const Section = BaseSection as Section;

Section.Grid = function Grid({ children }: { children: React.ReactNode }) {
  return <S.Grid>{children}</S.Grid>;
};

export default Section;