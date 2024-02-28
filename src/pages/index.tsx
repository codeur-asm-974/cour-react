import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/desin-system/typography/typography";
import { Button } from "@/ui/desin-system/button/button";
import { Ri4KFill } from "react-icons/ri";
import { Spinner } from "@/ui/desin-system/spinner/spiner";
import { Logo } from "@/ui/desin-system/logo/logo";
import { Avatar } from "@/ui/desin-system/avatar/avatar";

export default function Home() {
  return (
    <>
      <Seo title="cour-react" description="Description..."></Seo>

      <div className="flex items-center gap-2 p-5 border-gray-400 rounded">
        <Spinner size="small" />
        <Spinner />
        <Spinner size="large" />
      </div>

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
          isLoading
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

      <div
        className=" space-y-4 gap-2 p-5
      border border-gray-400 rounded"
      >
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

      <div className="flex items-center gap-2 p-5 border-gray-400 rounded">
        <Logo size="very-small"></Logo>
        <Logo size="small"></Logo>
        <Logo size="large"></Logo>
      </div>

      <div className="flex items-center gap-2 p-5 border border-gray-500 rounded">
        <Avatar
          size="small"
          src="/daniel-lincoln-pe-X2NUwVQo-unsplash1.png"
          alt="Avatar de Daniel Lincoln"
        />
        <Avatar
          src="src/assets/images/image/daniel-lincoln-pe-X2NUwVQo-unsplash1.png"
          size="small"
          alt="Avatar"
        />
        <Avatar
          src="/assets/images/image/daniel-lincoln-pe-X2NUwVQo-unsplash1.png"
          size="medium"
          alt="Avatar"
        />
      </div>
    </>
  );
}
