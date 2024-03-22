export interface BaseComponentProps {
  getCurrentStep: () => onboardingStepsListInterface | undefined;
  next: () => void;
  prev: () => void;
  isFirtStep: () => boolean;
  isFinalStep: () => boolean;
  stepsList: onboardingStepsListInterface[];
}

export interface onboardingStepsListInterface {
  id: number;
  label: string;
  component: { step: React.ComponentType<BaseComponentProps> };
}
