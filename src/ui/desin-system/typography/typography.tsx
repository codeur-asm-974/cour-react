import clsx from "clsx";
import { Component } from "react";

interface Props {
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "Lead"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
  thème?: "black" | "gray" | "white" | "primary" | "secondary";
  weight?: "regular" | "medium";
  className: string;
  children: React.ReactNode;
}

export const Typography = ({
  variant = "h3",
  component: Component = "div",
  thème = "black",
  weight = "regular",
  className,
  children,
}: Props) => {
  let variantStyles: string = "";
  switch (variant) {
    case "display":
      variantStyles = "text-8xl";
      break;

    case "h1":
      variantStyles = "text-green-500";
      break;
  }
  return (
    <Component
      className={clsx(
        variantStyles,
        weight === "medium" && "font-medium",
        className,
        "text-8xl"
      )}
    >
      {children}
    </Component>
  );
};
