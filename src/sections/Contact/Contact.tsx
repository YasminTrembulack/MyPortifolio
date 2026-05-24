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
import { useTranslation } from "react-i18next";

export function Contact() {
    const { ref, isVisible } = useIntersection();
    const { t } = useTranslation();

    return (
        <BaseSection
            id="contact"
            title={t("contact.title")}
            description={t("contact.description")}
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
                            <Label>{t("contact.form.nameLabel")}</Label>
                            <Input type="text" placeholder={t("contact.form.namePlaceholder")} />
                        </Field>

                        <Field>
                            <Label>{t("contact.form.emailLabel")}</Label>
                            <Input type="email" placeholder={t("contact.form.emailPlaceholder")} />
                        </Field>

                        <Field>
                            <Label>{t("contact.form.messageLabel")}</Label>
                            <Textarea rows={5} placeholder={t("contact.form.messagePlaceholder")} />
                        </Field>
                        <Button type="submit">{t("contact.form.submit")}</Button>
                    </Form>
                </Right>
            </Content>
        </BaseSection>
    );
}