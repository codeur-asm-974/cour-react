import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { ForgetPasswordContainer } from "@/ui/modules/authentification/forget-password/forget.password.container";

export default function ForgetPassword() {
  return (
    <>
      <Seo
        title="Connexion sur Coders Monkeys"
        description="Mot de passe oublié"
      />

      <Layout>
        <ForgetPasswordContainer />
      </Layout>
    </>
  );
}
