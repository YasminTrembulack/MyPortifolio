import { useEffect, useRef, useState } from "react";
import {
  TimelineWrapper,
  TimelineLine,
  ProgressLine,
  Item,
  Card,
  Header,
  Year,
  Icon,
  Body,
  MarkerIcon,
  MarkerWrapper,
  CardIcon,
  CardGrid,
  CardTitle,
  CardGlow,
} from "./Experience.styles";

import Flower1 from "../../assets/icons/flowers/flower1.svg?react";
import Flower2 from "../../assets/icons/flowers/flower2.svg?react";
import Flower3 from "../../assets/icons/flowers/flower3.svg?react";
import Flower4 from "../../assets/icons/flowers/flower4.svg?react";
import Flower5 from "../../assets/icons/flowers/flower5.svg?react";
import Flower6 from "../../assets/icons/flowers/flower6.svg?react";
import Flower7 from "../../assets/icons/flowers/flower7.svg?react";
import { experiences } from "../../data/experiences";
import { BaseSection } from "../../components/BaseSection/BaseSection";
import { useIntersection } from "../../hooks/useIntersection";
import { useTranslation } from "react-i18next";

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
  return <MarkerIcon as={Icon} $active={active} />;
};

export function Experience() {
  const { ref, isVisible } = useIntersection();
  const { t } = useTranslation();
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

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

  /* Scroll progress */
  useEffect(() => {
    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  /* Entrada dos cards */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) =>
              prev.includes(index) ? prev : [...prev, index],
            );
          }
        });
      },
      { threshold: 0.3 },
    );

    document
      .querySelectorAll(".timeline-item")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
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
      <TimelineWrapper ref={timelineRef}>
        <TimelineLine />
        <ProgressLine ref={progressRef} />

        {experiences.map((e, index) => (
          <Item key={index} className="timeline-item" data-index={index}>
            <MarkerWrapper>
              <Marker active={activeIndex === index} index={index} />
            </MarkerWrapper>
            <Card
              $side={index % 2 === 0 ? "left" : "right"}
              $visible={visibleItems.includes(index)}
              onClick={() => {
                setActiveIndex((prev) => (prev === index ? null : index));
                setTimeout(updateProgress, 450);
              }}
            >
              <CardGlow />
              <CardGrid />
              <Header>
                <CardIcon>{e.icon}</CardIcon>

                <div style={{ width: "100%" }}>
                  <CardTitle>{e.title}</CardTitle>
                  <Year>{e.year}</Year>
                </div>
                <Icon $active={activeIndex === index}>+</Icon>
              </Header>

              <Body $active={activeIndex === index}>
                <p>{e.description}</p>
              </Body>
            </Card>
          </Item>
        ))}
      </TimelineWrapper>
    </BaseSection>
  );
}
