import { useState } from "react";
import { OnboardingView } from "./onboarding.View";
import { WelcomeStep } from "./components/steps/welcome-step/welcome-step";
import { onboardingStepsListInterface } from "@/types/onboarding-steps-list";
import { ProfileStep } from "./components/steps/profile-step/profile-step";

export const OnboardingContainer = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const stepsList: onboardingStepsListInterface[] = [
    { id: 1, label: "Bienvenue", component: { step: WelcomeStep } },
    { id: 2, label: "Profile", component: { step: ProfileStep } },
    { id: 3, label: "Avatar", component: { step: WelcomeStep } },
  ];
  const getCurrentStep = () => {
    return stepsList.find((el) => el.id === currentStep);
  };

  const next = () => {
    if (currentStep < stepsList.length) {
      setCurrentStep(currentStep + 1);
    }
  };
  const prev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isFirtStep = () => {
    if (currentStep === 1) {
      return true;
    }
    return false;
  };
  const isFinalStep = () => {
    if (currentStep === stepsList.length) {
      return true;
    }
    return false;
  };

  return (
    <OnboardingView
      getCurrentStep={getCurrentStep}
      next={next}
      prev={prev}
      isFirtStep={isFirtStep}
      isFinalStep={isFinalStep}
      stepsList={stepsList}
    />
  );
};
