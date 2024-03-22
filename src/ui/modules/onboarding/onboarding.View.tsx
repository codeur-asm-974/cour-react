import { BaseComponentProps } from "@/types/onboarding-steps-list";

export const OnboardingView = ({
  getCurrentStep,
  next,
  prev,
  isFirtStep,
  isFinalStep,
  stepsList,
}: BaseComponentProps) => {
  if (getCurrentStep()?.component) {
    const Component = getCurrentStep()?.component.step;

    return (
      <div>
        {Component && (
          <Component
            getCurrentStep={getCurrentStep}
            next={next}
            prev={prev}
            isFirtStep={isFirtStep}
            isFinalStep={isFinalStep}
            stepsList={stepsList}
          />
        )}
      </div>
    );
  }
  return null;
};
