import { images } from "./images";
import { Exercise } from "./types";
import VerticalMovementLottie from "../assets/lotties/vertical-movement.json";
import HorizontalMovementLottie from "../assets/lotties/horizontal-movement.json";
import MeditationLottie from "../assets/lotties/meditation.json";
import CombineLottie from "../assets/lotties/combine.json";
import InfinityLottie from "../assets/lotties/infinity.json";
import BlinkLottie from "../assets/lotties/blink.json";

export const exercises: Exercise[] = [
  {
    heading: "Meditation",
    description:
      "Combine blinking and relaxation to help relieve eye strain and fatigue",
    icon: images.ClosedEye,
    time: 30,
    animation: BlinkLottie,
  },
  {
    heading: "horizontal movement",
    description:
      "Combine blinking and relaxation to help relieve eye strain and fatigue",
    icon: images.HorizontalArrows,
    time: 30,
    animation: HorizontalMovementLottie,
  },
  {
    heading: "Vertical movement",
    description:
      "Combine blinking and relaxation to help relieve eye strain and fatigue",
    icon: images.VerticalArrows,
    time: 30,

    animation: VerticalMovementLottie,
  },
  {
    heading: "Eight",
    description:
      "Combine blinking and relaxation to help relieve eye strain and fatigue",
    icon: images.Infinity,
    time: 30,
    animation: InfinityLottie,
  },
  {
    heading: "Focus",
    description:
      "Combine blinking and relaxation to help relieve eye strain and fatigue",
    icon: images.Focus,
    time: 30,
    animation: CombineLottie,
  },
];
