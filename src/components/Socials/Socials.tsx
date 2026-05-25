import type { HTMLAttributes } from "react";

import * as S from "./Socials.styles";
import type { AnimationProps } from "../../styles/transitions";
import { getContacts } from "../../data/contacts";
import { useTranslation } from "react-i18next";

interface SocialsProps extends HTMLAttributes<HTMLDivElement> {
    contacts: ("email" | "linkedin" | "github" | "location")[];
    showTitle?: boolean;
    showText?: boolean;
}

function Socials({
    contacts,
    showTitle = false,
    showText = false,
    $variant = "blue",
    $flexDirection = "column",
    $visible = true,
    $gap = 0,
    $delay,
    $fade,
    ...rest
}: SocialsProps 
    & AnimationProps 
    & S.InfoItemProps 
    & S.InfoListProps 
    & S.InfoRevealProps
) {
    const { t } = useTranslation();

    return (
        <S.InfoList $flexDirection={$flexDirection} $gap={$gap} {...rest}>
            {contacts.map((c, index) => {
                const contact = getContacts(t)[c];

                return (
                    <S.InfoReveal key={index} $visible={$visible} $delay={index * 120} $fade={$fade}>
                        <S.InfoItem $variant={$variant}>
                            <S.Link href={contact.link} target="_blank" rel="noreferrer">
                                {contact.icon}
                                <S.Content>
                                    {showTitle && <S.InfoTitle>{contact.title}</S.InfoTitle>}
                                    {showText && <S.InfoText>{contact.text}</S.InfoText>}
                                </S.Content>
                            </S.Link>
                        </S.InfoItem>
                    </S.InfoReveal>
                )
            })}
        </S.InfoList>
    );
}

export default Socials;