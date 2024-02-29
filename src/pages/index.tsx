import { Navigation } from "@/ui/components/navigation/navigations";
import { Seo } from "@/ui/components/seo/seo";
import { Avatar } from "@/ui/desin-system/avatar/avatar";
import { Footer } from "@/ui/components/navigation/footer";
export default function Home() {
  return (
    <>
      <Seo title="cour-react" description="Description..."></Seo>
      <Navigation />
      <Footer />
    </>
  );
}
