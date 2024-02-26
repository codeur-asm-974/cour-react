import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/desin-system/typography/typography";
import { Button } from "@/ui/desin-system/button/button";
export default function Home() {
  return (
    <>
      <Seo title="cour-react" description="Description..."></Seo>

      <div className="flex items-center gap-4 p-10">
        <Button size="small" variant="accent">
          Button
        </Button>
        <Button size="medium" variant="secondary">
          bonjour
        </Button>
        <Button size="large" variant="outline">
          Celia
        </Button>
        <Button size="medium" variant="disabled">
          Patou
        </Button>
      </div>

      <div className="space-y-5">
        <Typography theme="primary" variant="display" component="div">
          Monaco 974 debrief
        </Typography>
        <Typography theme="gray" variant="h3" component="div">
          Monaco 974 debrief
        </Typography>
        <Typography theme="secondary" variant="h2" component="div">
          Monaco 974 debrief
        </Typography>
        <Typography theme="secondary" variant="body-sm" component="div">
          Monaco 974 debrief
        </Typography>
        <Typography variant="caption4" component="div">
          Monaco 974 debrief
        </Typography>
        <Typography variant="caption4" weight="medium" component="div">
          Monaco 974 debrief
        </Typography>
      </div>
    </>
  );
}
