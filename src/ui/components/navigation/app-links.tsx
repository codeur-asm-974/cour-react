import { AppLinks } from "@/types/app-links";

const footerApplicationLinks: AppLinks[] = [
  {
    label: "Acceuil",
    baseUrl: "/",
    type: "internal",
  },
  {
    label: "Projets",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Coders Monkeys",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Formation",
    baseUrl: "https://youtube.com/@remotemonkey",
    type: "external",
  },
];
const footerUsersLinks: AppLinks[] = [
  {
    label: "Mon espace",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Connexion",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Iscription",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Mot de passe oublier",
    baseUrl: "/#",
    type: "external",
  },
];
const footerInformationsLinks: AppLinks[] = [
  {
    label: "CGU",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Confidentialité",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "A propos",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Mot de passe Contact",
    baseUrl: "/#",
    type: "internal",
  },
];
const footerSocialNetworksLinks: AppLinks[] = [
  {
    label: "youtube",
    baseUrl: "https://youtube.com/@remotemonkey",
    type: "external",
  },
  {
    label: "Linkedin",
    baseUrl: "https://www.linkedin.com/in/arneaud-desportes-71999446/",
    type: "external",
  },
  {
    label: "Slack",
    baseUrl: "https://coders-monkeys.slack.com",
    type: "external",
  },
];
export const footerLinks = [
  {
    label: "App",
    links: footerApplicationLinks,
  },
  {
    label: "Utilisateur",
    links: footerUsersLinks,
  },
  {
    label: "Information",
    links: footerInformationsLinks,
  },
  {
    label: "Réseau",
    links: footerSocialNetworksLinks,
  },
];
