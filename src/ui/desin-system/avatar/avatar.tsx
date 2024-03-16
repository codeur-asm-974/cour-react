import Image from "next/image";
import { clsx } from "clsx";

interface props {
  size?: "small" | "medium" | "large";
  src: string;
  alt: string;
}

export const Avatar = ({ size = "medium", src, alt }: props) => {
  let sizeStyles: string;
  switch (size) {
    case "small":
      sizeStyles = "w-[24px] h-[24px]";

      break;
    case "medium":
      sizeStyles = "w-[34px] h-[34px]";

      break;
    case "large":
      sizeStyles = "w-[50px] h-[50px]";

      break;

    //default:
  }

  return (
    <div className={clsx(sizeStyles, "bg-gray-500 rounded-full relative")}>
      <Image
        fill
        src={src ? src : "/assets/svg/paresseux.svg"}
        alt={alt}
        className="rounded-full"
      />
    </div>
  );
};
