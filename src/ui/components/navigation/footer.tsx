import { Typography } from "@/ui/desin-system/typography/typography";
import { Container } from "../container/container";
import Image from "next/image";
import { footerLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { ActivLink } from "./activLink";
import { FooterLinks } from "@/types/app-links";
import { LinkTypes } from "@/lib/link-type";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerNavigationList = footerLinks.map((columnLinks) => (
    <FooterLink key={uuidv4()} data={columnLinks} />
  ));

  return (
    <div className="  bg-gray">
      <Container className="flex justify-between pt-16">
        <div className="flex flex-col items-center gap ">
          <Typography variant="caption1" theme="white" weight="medium">
            Formations gratuites
          </Typography>
          <Typography variant="caption3" theme="gray">
            Abonne toi a la chaîne
          </Typography>
          <a href="https://youtube.com/@remotemonkey" target="_blank">
            <Image
              src="/assets/svg/YTB.svg"
              width={229}
              height={216}
              priority
              alt="Remote youtube"
            />
          </a>
        </div>
        <div className="flex gap-7">{footerNavigationList}</div>
      </Container>
      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-gray-800" />
        <div className=" flex items-center justify-between">
          <Typography className="" variant="caption4" theme="gray">
            {`Copyright © ${currentYear}| Propulsed by
            `}

            <a
              href="https://arnaud-desportes.fr"
              target="_blank"
              className="underline"
            >
              Arnaud desportes
            </a>
            {`- Remote
            monkey SASU`}
          </Typography>
          <div className=""></div>
        </div>
      </Container>
    </div>
  );
};

interface footerLinkProps {
  data: FooterLinks;
}

const FooterLink = ({ data }: footerLinkProps) => {
  const linkList = data.links.map((link) => (
    <div key={uuidv4()}>
      {link.type === LinkTypes.INTERNAL && (
        <ActivLink href={link.baseUrl}>{link.label}</ActivLink>
      )}
      {link.type === LinkTypes.EXTERNAL && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
    </div>
  ));
  return (
    <div className="min-w-[190px]">
      <Typography
        theme="white"
        variant="caption2"
        weight="medium"
        className="pb-5"
      >
        {data.label}
      </Typography>
      <Typography theme="gray" variant="caption3" className="space-y-4">
        {linkList}
      </Typography>
    </div>
  );
};
