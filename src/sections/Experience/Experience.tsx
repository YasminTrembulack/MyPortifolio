import { useEffect, useRef, useState } from "react";
import * as S from "./Experience.styles";

import Flower1 from "../../assets/icons/flowers/flower1.svg?react";
import Flower2 from "../../assets/icons/flowers/flower2.svg?react";
import Flower3 from "../../assets/icons/flowers/flower3.svg?react";
import Flower4 from "../../assets/icons/flowers/flower4.svg?react";
import Flower5 from "../../assets/icons/flowers/flower5.svg?react";
import Flower6 from "../../assets/icons/flowers/flower6.svg?react";
import Flower7 from "../../assets/icons/flowers/flower7.svg?react";
import { experiences } from "../../data/experiences";
import BaseSection from "../../components/BaseSection/BaseSection";
import useIntersection from "../../hooks/useIntersection";
import { useTranslation } from "react-i18next";
import BaseCard from "../../components/BaseCard/BaseCard";

export const MARKER_ICONS = [
  Flower1,
  Flower2,
  Flower3,
  Flower4,
  Flower5,
  Flower6,
  Flower7,
];

const Marker = ({ active, index }: { active: boolean; index: number }) => {
  const Icon = MARKER_ICONS[index % MARKER_ICONS.length];
  return <S.MarkerIcon as={Icon} $active={active} />;
};

export function Experience() {
  const { ref, isVisible } = useIntersection();
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const updateProgress = () => {
    if (!timelineRef.current || !progressRef.current) return;

    const rect = timelineRef.current.getBoundingClientRect();
    const height = Math.min(
      timelineRef.current.offsetHeight,
      Math.max(0, window.innerHeight - rect.top),
    );

    progressRef.current.style.height = `${height}px`;
  };

  useEffect(() => {
    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);


  return (
    <BaseSection
      id="experience"
      eyebrow={t("experience.eyebrow")}
      title={t("experience.title")}
      description={t("experience.description")}
      variant="blue"
      $headerAlign="center"
      ref={ref}
      isVisible={isVisible}
      $paddingBottom={2}
      $paddingTop={6}
    >
      <S.TimelineWrapper ref={timelineRef}>
        <S.TimelineLine />
        <S.ProgressLine ref={progressRef} />

        {experiences.map((e, index) => {
          const side = index % 2 === 0 ? "left" : "right";

          return (
            <S.Item className="timeline-item" key={index} $side={side}>
              <S.MarkerWrapper>
                <Marker active={activeIndex === index} index={index} />
              </S.MarkerWrapper>
              <BaseCard
                $side={side}
                $visible={isVisible}
                onClick={() => {
                  setActiveIndex((prev) => (prev === index ? null : index));
                  setTimeout(updateProgress, 450);
                }}
              >
                <BaseCard.Header>
                  <S.CardIcon>{e.icon}</S.CardIcon>

                  <div style={{ width: "100%" }}>
                    <BaseCard.Title>{e.title}</BaseCard.Title>
                    <S.Year>{e.year}</S.Year>
                  </div>
                  <S.Icon $active={activeIndex === index}>+</S.Icon>
                </BaseCard.Header>

                <S.Body $active={activeIndex === index}>
                  <p>{e.description}</p>
                </S.Body>
              </BaseCard>

            </S.Item>
          );
        })}
      </S.TimelineWrapper>
    </BaseSection>
  );
}
