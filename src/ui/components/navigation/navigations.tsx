import { Logo } from "@/ui/desin-system/logo/logo";
import { Container } from "../container/container";
import { Typography } from "@/ui/desin-system/typography/typography";
import { Button } from "@/ui/desin-system/button/button";
import Link from "next/link";
import { ActivLink } from "./activLink";
interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <div className="border-b-2 border-gray-400">
      <Container className="flex items-center justify-between py-1.5 gap-7 ">
        <Link href="/">
          <div className="flex items-center gap-2.5">
            <Logo size="small" />
            <div className="flex flex-col">
              <div className="text-gray font-extrabold text-[24px]">
                Coders Monkeys
              </div>

              <Typography variant="caption4" component="span" theme="gray">
                Trouve ton inspiration & recois des feedbacks!
              </Typography>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-7">
          <Typography
            variant="caption3"
            component="div"
            className="flex items-center gap-7"
          >
            <ActivLink href="/design-system">Design system</ActivLink>
            <Link href="/projet">Projet</Link>
            <Link href="/formation">Formation</Link>
            <Link href="/contact">Contact</Link>
          </Typography>
          <div className="flex items-center gap-2">
            <Button baseUrl="/connexion" size="small">
              Connexion
            </Button>
            <Button
              baseUrl="/connexion/inscription"
              size="small"
              variant="secondary"
            >
              Rejoindre
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
