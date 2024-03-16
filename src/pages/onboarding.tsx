import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { REGISTERED } from "@/lib/session-status";

export default function Onboarding() {
  return (
    <>
      <Seo title="onBoarding" description="Description..."></Seo>

      <Layout sessionStatus={REGISTERED}>
        <div className="flex items-center justify-center py-40 pt-20">
          bienvenue
        </div>
      </Layout>
    </>
  );
}
