import { DiVim } from "react-icons/di";
import { Spinner } from "./spiner";

export const ScreenSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spinner size="large" />
    </div>
  );
};
