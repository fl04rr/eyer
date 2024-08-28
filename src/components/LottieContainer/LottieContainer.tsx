import Lottie from "react-lottie";
import { LottieWrapper } from "./styled";

type LottieProps = {
  animation: unknown;
};

export default function LottieContainer({ animation }: LottieProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <LottieWrapper>
      <Lottie options={defaultOptions} width={200} height={200} />
    </LottieWrapper>
  );
}
