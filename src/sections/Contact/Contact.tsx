import {
    Button,
    Field,
    Form,
    InfoItem,
    InfoList,
    Input,
    Label,
    Textarea,
    InfoTitle,
    InfoText,
    Right,
    Left,
    Content
} from "./Contact.styles";
import { useIntersection } from "../../hooks/useIntersection";
import { contacts } from "../../data/contacts";
import { BaseSection } from "../../components/BaseSection/BaseSection";

export function Contact() {
    const { ref, isVisible } = useIntersection();

    return (
        <BaseSection
            id="contact"
            title="Get in Touch"
            description="Have a project, collaboration idea, or opportunity in mind? I’m always open to new connections and would love to hear from you."
            variant="yellow"
            ref={ref}
            isVisible={isVisible}
            $headerAlign="start"
            $paddingBottom={2}
            $paddingTop={6}
        >
            <Content>
                <Left>
                    <InfoList>
                        {contacts.map((c, index) => (
                            <InfoItem key={index} $visible={isVisible} $delay={index * 120}>
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
                <Right $visible={isVisible} $delay={300}>
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
        </BaseSection>
    );
}