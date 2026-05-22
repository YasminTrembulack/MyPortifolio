import LinkedinIcon from "../../assets/icons/linkedin.svg?react";
import GithubIcon from "../../assets/icons/github.svg?react";
import GmailIcon from "../../assets/icons/gmail.svg?react";
import Location from "../../assets/icons/location.svg?react";

export type Contacts = {
    link: string;
    icon: React.ReactNode;
    title: string;
    text: string;
};

export const contacts: Contacts[] = [
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
