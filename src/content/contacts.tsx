import LinkedinIcon from "../assets/icons/linkedin.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";
import GmailIcon from "../assets/icons/gmail.svg?react";
import Location from "../assets/icons/location.svg?react";
import type { TFunction } from "i18next";

export type Contacts = {
    link: string;
    icon: React.ReactNode;
    title: string;
    text: string;
};

export const getContacts = (t: TFunction): Record<string, Contacts> => ({
  "email": {
    link: "mailto:yasmin.agostinho.012@gmail.com",
    icon: <GmailIcon />,
    title: t("contact.cards.email.title"),
    text: t("contact.cards.email.text"),
  },

  "linkedin": {
    link: "https://www.linkedin.com/in/yasmintrembulack",
    icon: <LinkedinIcon />,
    title: t("contact.cards.linkedin.title"),
    text: t("contact.cards.linkedin.text"),
  },

  "github": {
    link: "https://github.com/yasmintrembulack",
    icon: <GithubIcon />,
    title: t("contact.cards.github.title"),
    text: t("contact.cards.github.text"),
  },

  "location": {
    link: "https://maps.app.goo.gl/LG8iyi9HdagjTzQr8",
    icon: <Location />,
    title: t("contact.cards.location.title"),
    text: t("contact.cards.location.text"),
  },
});