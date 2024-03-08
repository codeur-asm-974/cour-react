import { Box } from "@/ui/desin-system/box/box";
import { Typography } from "@/ui/desin-system/typography/typography";
import Link from "next/link";
import { Container } from "@/ui/components/container/container";

import Image from "next/image";
import ForgetPassword from "@/pages/connexion/mots-de-passe-perdu";
import { ForgetPasswordForm } from "./forget-password-form";
import { FormsType } from "@/types/form";

interface Props {
  form: FormsType;
}

export const ForgetPasswordView = ({ form }: Props) => {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="flex items-center ">
        <div className="relative w-full h-[531px]">
          <Image
            fill
            priority
            src="/assets/images/image/character-3.png"
            alt="illustration"
            className="object"
          />
        </div>
      </div>

      <div className=" flex items-center">
        <Box padding_y="py-5" padding_x="px-5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h1">
              Mot de passe perdu
            </Typography>

            <Typography variant="caption4" component="span" theme="primary">
              <Link href="/connexion">Connexion</Link>
            </Typography>
          </div>
          <ForgetPasswordForm form={form} />
        </Box>
      </div>
    </Container>
  );
};
