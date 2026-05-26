import * as S from "./Certifications.styles";

import { certifications } from "../../data/certifications";
import useIntersection from "../../hooks/useIntersection";
import BaseSection from "../../components/BaseSection/BaseSection";
import { useTranslation } from "react-i18next";
import BaseCard from "../../components/BaseCard/BaseCard";
import MedalReward from "../../assets/icons/medal.svg?react";
import MedalRewardFilled from "../../assets/icons/medal-filled.svg?react";
import { useState } from "react";


import Masonry from "react-masonry-css";


export function Certifications() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { ref, isVisible } = useIntersection();
  const { t } = useTranslation();

  const breakpointColumnsObj = { default: 3, 1100: 2, 700: 1 };

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
      $minHeight={87}
    >
      <S.MasonryWrapper>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {certifications.map((c, index) => (
            <S.Container key={index} $visible={isVisible} $delay={index * 300}>
              <BaseCard
                $minHeight={140}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex((prev) => (prev === index ? null : index))}
              >
                <BaseCard.Header>
                  <BaseCard.Title>{c.title}</BaseCard.Title>
                  <S.Year>{c.year}</S.Year>
                </BaseCard.Header>
                <S.RepoSubTitle>{c.institution}</S.RepoSubTitle>
                <S.Body $active={activeIndex === index}>
                  <p>{c.description}</p>
                </S.Body>
              </BaseCard>
              <S.Icon>
                <MedalReward className={hoveredIndex !== index ? "active" : ""} />
                <MedalRewardFilled className={hoveredIndex === index ? "active" : ""} />
              </S.Icon>
            </S.Container>
          ))}
        </Masonry>
      </S.MasonryWrapper>
    </BaseSection>
  );
}
