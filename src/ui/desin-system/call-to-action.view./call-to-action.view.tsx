import { Container } from "@/ui/components/container/container";
import { Typography } from "../typography/typography";
import { Button } from "../button/button";
import { LinkTypes } from "@/lib/link-type";
import Image from "next/image";

export const CallToActionView = () => {
  return (
    <div className="relative overflow-hidden bg-primary">
      <Container className="py-20">
        <div className="relative z-10 max-w-3xl ">
          <Typography variant="h2" component="h2" theme="white">
            N’attend pas pour développer tes compétences...
          </Typography>
          <div>
            <Button
              variant="success"
              baseUrl="#/"
              linkType={LinkTypes.EXTERNAL}
            >
              Formation React.js gratuite
            </Button>
          </div>
        </div>
        <div>
          <Image
            width={1310}
            height={1310}
            src="/assets/svg/bomb.svg"
            alt="une bombe"
            className="absolute -bottom-[500px] right-[-180px]"
          />
        </div>
      </Container>
    </div>
  );
};
