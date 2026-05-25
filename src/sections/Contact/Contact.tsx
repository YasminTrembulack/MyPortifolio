import * as S from "./Contact.styles";
import useIntersection from "../../hooks/useIntersection";
import BaseSection from "../../components/BaseSection/BaseSection";
import { useTranslation } from "react-i18next";
import Socials from "../../components/Socials/Socials";

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
            <S.Content>
                <S.Left>
                    <Socials
                        contacts={["email", "linkedin", "github", "location"]}
                        $visible={isVisible}
                        $fade="right"
                        $gap={1.5}
                        showTitle
                        showText
                    />
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