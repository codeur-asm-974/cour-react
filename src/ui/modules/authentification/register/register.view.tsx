import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/desin-system/box/box";
import { Typography } from "@/ui/desin-system/typography/typography";
import Image from "next/image";
import Link from "next/link";
import { RegisterForm } from "./register.form";
import { FormsType } from "@/types/form";

interface Props {
  form: FormsType;
}

export const RegisterView = ({ form }: Props) => {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="flex items-center ">
        <div className="relative w-full h-[531px]">
          <Image
            fill
            priority
            src="/assets/images/image/character.png"
            alt="illustration"
            className="object"
          />
        </div>
      </div>

      <div className=" flex items-center">
        <Box padding_y="py-5" padding_x="px-5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h1">
              Inscription
            </Typography>
            <div className="flex items-center gap-2">
              <Typography variant="caption4" component="span" theme="gray">
                Tu as déjà un compte ?
              </Typography>
              <Typography variant="caption4" component="span" theme="primary">
                <Link href="/connexion">Connexion</Link>
              </Typography>
            </div>
          </div>
          <RegisterForm form={form} />
        </Box>
      </div>
    </Container>
  );
};
