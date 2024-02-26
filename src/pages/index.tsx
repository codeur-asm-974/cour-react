import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/desin-system/typography/typography";
import { Button } from "@/ui/desin-system/button/button";
import { Ri4KFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Seo title="cour-react" description="Description..."></Seo>

      <div className="flex items-center gap-4 p-10">
        <Button
          size="small"
          icon={{ icon: Ri4KFill }}
          iconPosition="right"
          variant="accent"
        >
          Button
        </Button>
        <Button
          size="medium"
          icon={{ icon: Ri4KFill }}
          iconPosition="left"
          variant="accent"
        >
          patou
        </Button>
        <Button size="medium" variant="secondary">
          bonjour
        </Button>
        <Button size="medium" variant="outline">
          Celia
        </Button>
        <Button
          size="small"
          variant="ico"
          icon={{ icon: Ri4KFill }}
          iconTheme="secondary"
        />
        <Button
          size="small"
          variant="ico"
          icon={{ icon: Ri4KFill }}
          iconTheme="gray"
        />
        <Button
          size="small"
          variant="ico"
          icon={{ icon: Ri4KFill }}
          iconTheme="accent"
        />
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
