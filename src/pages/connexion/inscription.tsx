import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { RegisterContainer } from "@/ui/modules/authentification/register/register.container";
import { GUEST } from "@/lib/session-status";

export default function Register() {
  return (
    <>
      <Seo
        title="Connexion sur Coders Monkeys"
        description="Page d'inscription"
      />

      <Layout sessionStatus={GUEST}>
        <RegisterContainer />
      </Layout>
    </>
  );
}
