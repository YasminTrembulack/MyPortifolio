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
    Textarea,
    Title,
    InfoTitle,
    InfoText,
    Right,
    Left,
    Subtitle,
    Header,
    Divider,
    Content
} from "./Contact.styles";
import { flower } from "../../assets/ascii-art";
import { useIntersection } from "../../hooks/useIntersection";
import { contacts } from "../../data/contacts";

export function Contact() {
    const { ref, isVisible } = useIntersection();

    return (
        <Section id="contact" ref={ref}>
            <Container>
                <Header $visible={isVisible}>
                    <ContentHeader>
                        <Icon>{flower}</Icon>
                        <Title>Get in Touch</Title>
                    </ContentHeader>
                    <Subtitle>
                        Have a project, collaboration idea, or opportunity in mind? I’m always open to new connections and would love to hear from you.
                    </Subtitle>
                </Header>
                <Divider />
                <Content>
                    <Left>
                        <InfoList>
                            {contacts.map((c, index) => (
                                <InfoItem key={index} $visible={isVisible}>
                                    <a href={c.link} target="_blank" rel="noreferrer">
                                        {c.icon}
                                    </a>

                                    <div>
                                        <InfoTitle>{c.title}</InfoTitle>
                                        <InfoText>{c.text}</InfoText>
                                    </div>
                                </InfoItem>
                            ))}
                        </InfoList>
                    </Left>
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
                </Content>
            </Container>
        </Section>
    );
}