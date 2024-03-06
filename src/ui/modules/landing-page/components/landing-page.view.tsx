import { HeroTopView } from "./hero-top/hero-top.view";
import { FeaturedView } from "./feattured/featured";
import { CodersMonkeysSlackView } from "./coders-monkeys-slack/coders-monkeys-slack.view";
import { CurrentsCourseCtaView } from "./currents-course-cta/currents-course-cta.view";
import { HighlightListView } from "./highlight-list/highlight-list.view";
import { CallToActionView } from "@/ui/desin-system/call-to-action.view./call-to-action.view";

export const LandingPageView = () => {
  return (
    <>
      <HeroTopView />
      <FeaturedView />
      <CodersMonkeysSlackView />
      <CurrentsCourseCtaView />
      <HighlightListView />
      <CallToActionView />
    </>
  );
};
