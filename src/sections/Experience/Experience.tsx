import { useEffect, useRef, useState } from "react";
import {
  Section,
  Title,
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
  ContentHeader,
  HeaderIcon,
  Eyebrow,
  TitleRow,
  Subtitle,
  CardIcon,
  CardGrid,
} from "./Experience.styles";

import Flower1 from "../../assets/icons/flowers/flower1.svg?react";
import Flower2 from "../../assets/icons/flowers/flower2.svg?react";
import Flower3 from "../../assets/icons/flowers/flower3.svg?react";
import Flower4 from "../../assets/icons/flowers/flower4.svg?react";
import Flower5 from "../../assets/icons/flowers/flower5.svg?react";
import Flower6 from "../../assets/icons/flowers/flower6.svg?react";
import Flower7 from "../../assets/icons/flowers/flower7.svg?react";
import { bosch, flower } from "../../assets/ascii-art";

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

const data = [
  {
    icon: bosch,
    year: "2023 - 2025",
    title: "ETS - Desenvolvimento de Sistemas",
    description:
      "Início na Bosch como aprendiz técnica com foco em lógica, backend e fundamentos de arquitetura.",
  },
  {
    icon: bosch,
    year: "2025 - 2026",
    title: "BDO - Xpertify Team",
    description:
      "Atuação com Azure, APIs REST, testes automatizados e arquitetura de sistemas escaláveis.",
  },
  {
    icon: bosch,
    year: "2026 - actual",
    title: "BDO - KMS Team",
    description:
      "Atuação com Azure, APIs REST, testes automatizados e arquitetura de sistemas escaláveis.",
  },
];

export function Experience() {
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
    <Section id="experience">
      <ContentHeader>
        <Eyebrow>My Journey</Eyebrow>

        <TitleRow>
          <HeaderIcon>{flower}</HeaderIcon>
          <Title>Experience</Title>
        </TitleRow>

        <Subtitle>
          Building real-world solutions and growing professionally
        </Subtitle>
      </ContentHeader>

      <TimelineWrapper ref={timelineRef}>
        <TimelineLine />
        <ProgressLine ref={progressRef} />

        {data.map((item, index) => (
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
              <CardGrid />
              <Header>
                <CardIcon>{item.icon}</CardIcon>

                <div style={{ width: "100%" }}>
                  <h3 style={{ marginBottom: "5px" }}>{item.title}</h3>
                  <Year>{item.year}</Year>
                </div>
                <Icon $active={activeIndex === index}>+</Icon>
              </Header>

              <Body $active={activeIndex === index}>
                <p>{item.description}</p>
              </Body>
            </Card>
          </Item>
        ))}
      </TimelineWrapper>
    </Section>
  );
}
