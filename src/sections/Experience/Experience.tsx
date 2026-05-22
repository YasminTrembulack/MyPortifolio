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
  Divider,
  CardIcon,
  CardGrid,
  CardTitle,
  CardGlow,
  Container,
} from "./Experience.styles";

import Flower1 from "../../assets/icons/flowers/flower1.svg?react";
import Flower2 from "../../assets/icons/flowers/flower2.svg?react";
import Flower3 from "../../assets/icons/flowers/flower3.svg?react";
import Flower4 from "../../assets/icons/flowers/flower4.svg?react";
import Flower5 from "../../assets/icons/flowers/flower5.svg?react";
import Flower6 from "../../assets/icons/flowers/flower6.svg?react";
import Flower7 from "../../assets/icons/flowers/flower7.svg?react";
import { flower } from "../../assets/ascii-art";
import { experiences } from "../../data/experiences";

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
      <Container>
        <ContentHeader>
          <Eyebrow>My Journey</Eyebrow>

        <TitleRow>
          <HeaderIcon>{flower}</HeaderIcon>
          <Title>Experience</Title>
        </TitleRow>

        <Subtitle>
          Building real-world solutions and growing professionally.
        </Subtitle>
      </ContentHeader>
      <Divider />
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
      </Container>
    </Section>
  );
}
