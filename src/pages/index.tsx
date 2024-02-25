import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/desin-system/typography/typography";

export default function Home() {
  return (
    <>
      <Seo title="cours react" description="description.." />

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
