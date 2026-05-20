import {
    Button,
    Container,
    ContentHeader,
    Field,
    Form,
    Icon,
    InfoItem,
    InfoList,
    Input,
    Label,
    Section,
    Text,
    Textarea,
    Title,
    InfoTitle,
    InfoText,
    Right,
    Left
} from "./Contact.styles";
import { flower } from "../../assets/ascii-art";
import LinkedinIcon from "../../assets/icons/linkedin.svg?react";
import GithubIcon from "../../assets/icons/github.svg?react";
import GmailIcon from "../../assets/icons/gmail.svg?react";
import Location from "../../assets/icons/location.svg?react";
import { useIntersection } from "../../hooks/useIntersection";

export type InfoItem = {
    link: string;
    icon: React.ReactNode;
    title: string;
    text: string;
};

export const infoItems: InfoItem[] = [
    {
        link: "mailto:yasmin.agostinho.012@gmail.com",
        icon: <GmailIcon />,
        title: "Email",
        text: "Let’s turn ideas into reality.",
    },

    {
        link: "https://www.linkedin.com/in/yasmintrembulack",
        icon: <LinkedinIcon />,
        title: "LinkedIn",
        text: "Open to connections and new opportunities.",
    },

    {
        link: "https://github.com/yasmintrembulack",
        icon: <GithubIcon />,
        title: "GitHub",
        text: "Code, creativity, and continuous learning.",
    },

    {
        link: "https://maps.app.goo.gl/LG8iyi9HdagjTzQr8",
        icon: <Location />,
        title: "Location",
        text: "São José dos Pinhais, PR - Brazil.",
    },
];

export function Contact() {
    const { ref, isVisible } = useIntersection();

    return (
        <Section id="contact" ref={ref}>
            <Container>

                <Left>
                    <ContentHeader>
                        <Icon>{flower}</Icon>
                        <Title>Get in Touch</Title>
                    </ContentHeader>

                    <Text>
                        Have a project in mind, a collaboration opportunity, or just want to connect? I’d love to hear from you.
                    </Text>

                    <InfoList>
                        {infoItems.map((item) => (
                            <InfoItem key={item.title} $visible={isVisible}>
                                <a href={item.link} target="_blank" rel="noreferrer">
                                    {item.icon}
                                </a>

                                <div>
                                    <InfoTitle>{item.title}</InfoTitle>
                                    <InfoText>{item.text}</InfoText>
                                </div>
                            </InfoItem>
                        ))}
                    </InfoList>
                </Left>

                {/* Right Side */}
                <Right>
                    <Form>
                        <Field>
                            <Label>What should I call you?</Label>
                            <Input type="text" placeholder="John Doe" />
                        </Field>

                        <Field>
                            <Label>Email</Label>
                            <Input type="email" placeholder="johndoe@example.com" />
                        </Field>

                        <Field>
                            <Label>Tell me about your idea</Label>
                            <Textarea rows={5} placeholder="Your Message here..." />
                        </Field>

                        <Button type="submit">Send Message</Button>
                    </Form>
                </Right>

            </Container>
        </Section>
    );
}