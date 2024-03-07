import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { LandingPageContainer } from "@/ui/modules/landing-page/components/landing-page.container";

export default function Home() {
  return (
    <>
      <Seo title="cour-react" description="Description..."></Seo>

      <Layout isDisplayBreadcrumbs={false}>
        <LandingPageContainer />
      </Layout>
    </>
  );
}
