import { Grid } from "./Certifications.styles";
import { CertificationCard } from "../../components/CertificationCard/CertificationCard";
import { certifications } from "../../data/certifications";
import { useIntersection } from "../../hooks/useIntersection";
import { BaseSection } from "../../components/BaseSection/BaseSection";
import { useTranslation } from "react-i18next";

export function Certifications() {
  const { ref, isVisible } = useIntersection();
  const { t } = useTranslation();

  return (
    <BaseSection
      id="certifications"
      title={t("certifications.title")}
      description={t("certifications.description")}
      variant="blue"
      ref={ref}
      isVisible={isVisible}
      $headerAlign="start"
      $paddingBottom={0}
      $paddingTop={8}
      $minHeight={85}
    >
      <Grid>
        {certifications.map((c, index) => (
          <CertificationCard
            key={index}
            title={c.title}
            institution={c.institution}
            year={c.year}
            $visible={isVisible}
            $delay={index * 300}
          />
        ))}

      </Grid>
    </BaseSection>
  );
}
