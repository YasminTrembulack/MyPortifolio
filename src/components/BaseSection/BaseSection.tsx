
import { forwardRef } from "react";
import { Container, Section, type SectionProps } from "./BaseSection.styles";
import { Divider } from "../Divider/Divider";
import { SectionHeader, type SectionHeaderProps } from "../SectionHeader/SectionHeader";

type BaseSectionProps = {
  children: React.ReactNode;
  id: string;
};

type Props = BaseSectionProps & SectionHeaderProps  & SectionProps;

export const BaseSection = forwardRef<HTMLElement, Props>(
  ({ id, variant, isVisible, description, title, eyebrow, children, $headerAlign, $paddingBottom, $paddingTop, $minHeight }, ref) => {
    return (
      <Section id={id} ref={ref} $paddingBottom={$paddingBottom} $paddingTop={$paddingTop} $minHeight={$minHeight}>
        <Container>
          <SectionHeader 
            description={description} 
            title={title} 
            variant={variant} 
            eyebrow={eyebrow} 
            isVisible={isVisible} 
            $headerAlign={$headerAlign} 
            ref={ref} 
          />
          <Divider variant={variant} isVisible={isVisible} />
          {children}
        </Container>
      </Section>
    );
  }
);