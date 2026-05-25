import * as S from "./Contact.styles";
import useIntersection from "../../hooks/useIntersection";
import { getContacts } from "../../data/contacts";
import BaseSection from "../../components/BaseSection/BaseSection";
import { useTranslation } from "react-i18next";

export function Contact() {
    const { ref, isVisible } = useIntersection();
    const { t } = useTranslation();
    const contacts = getContacts(t);

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
            <S.Content>
                <S.Left>
                    <S.InfoList>
                        {contacts.map((c, index) => (
                            <S.InfoItem key={index} $visible={isVisible} $delay={index * 120}>
                                <a href={c.link} target="_blank" rel="noreferrer">
                                    {c.icon}
                                </a>
                                <div>
                                    <S.InfoTitle>{c.title}</S.InfoTitle>
                                    <S.InfoText>{c.text}</S.InfoText>
                                </div>
                            </S.InfoItem>
                        ))}
                    </S.InfoList>
                </S.Left>
                <S.Right $visible={isVisible} $delay={300}>
                    <S.Form>
                        <S.Field>
                            <S.Label>{t("contact.form.nameLabel")}</S.Label>
                            <S.Input type="text" placeholder={t("contact.form.namePlaceholder")} />
                        </S.Field>

                        <S.Field>
                            <S.Label>{t("contact.form.emailLabel")}</S.Label>
                            <S.Input type="email" placeholder={t("contact.form.emailPlaceholder")} />
                        </S.Field>

                        <S.Field>
                            <S.Label>{t("contact.form.messageLabel")}</S.Label>
                            <S.Textarea rows={5} placeholder={t("contact.form.messagePlaceholder")} />
                        </S.Field>
                        <S.Button type="submit">{t("contact.form.submit")}</S.Button>
                    </S.Form>
                </S.Right>
            </S.Content>
        </BaseSection>
    );
}