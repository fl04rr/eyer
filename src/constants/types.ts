import { LottieProps } from "react-lottie";

export type Exercise = {
  heading: string;
  description: string;
  time: number;
  icon: {
    src: string;
    alt: string;
  };
  animation: unknown;
};
