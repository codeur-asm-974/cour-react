import { Box } from "@/ui/desin-system/box/box";
import { Typography } from "@/ui/desin-system/typography/typography";
import Link from "next/link";
import { Container } from "@/ui/components/container/container";

import Image from "next/image";
import { LoginForm } from "./login-Form";
import { FormsType } from "@/types/form";

interface Props {
  form: FormsType;
}

export const LoginView = ({ form }: Props) => {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="flex items-center ">
        <div className="relative w-full h-[531px]">
          <Image
            fill
            priority
            src="/assets/images/image/character-2.png"
            alt="illustration"
            className="object"
          />
        </div>
      </div>

      <div className=" flex items-center">
        <Box padding_y="py-5" padding_x="px-5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h1">
              Connexion
            </Typography>
            <div className="flex items-center gap-2">
              <Typography variant="caption4" component="span" theme="gray">
                Tu n'as pas de compte ?
              </Typography>
              <Typography variant="caption4" component="span" theme="primary">
                <Link href="/connexion/inscription">s'inscrire</Link>
              </Typography>
            </div>
          </div>
          <LoginForm form={form} />
          <Typography variant="caption4" theme="primary">
            <Link
              href="/connexion/mots-de-passe-perdu"
              className="flex justify-center"
            >
              Mot de passe perdu ?
            </Link>
          </Typography>
        </Box>
      </div>
    </Container>
  );
};
