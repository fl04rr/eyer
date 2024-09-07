import { images } from "./images";
import { Exercise } from "./types";
import VerticalMovementLottie from "../assets/lotties/vertical-movement.json";
import HorizontalMovementLottie from "../assets/lotties/horizontal-movement.json";
import MeditationLottie from "../assets/lotties/meditation.json";
import CombineLottie from "../assets/lotties/combine.json";
import InfinityLottie from "../assets/lotties/infinity.json";
import BlinkLottie from "../assets/lotties/blink.json";
import FocusLottie from "../assets/lotties/focus.json";

export const exercises: Exercise[] = [
  {
    heading: "Meditation",
    description:
      "Combine blinking and relaxation to help relieve eye strain and fatigue",
    icon: images.ClosedEye,
    time: 120,
    animation: BlinkLottie,
  },
  {
    heading: "horizontal movement",
    description:
      "Combine lateral eye movements and deep breathing to alleviate eye strain and enhance focus.",
    icon: images.HorizontalArrows,
    time: 30,
    animation: HorizontalMovementLottie,
  },
  {
    heading: "Vertical movement",
    description:
      "Combine vertical eye movements and gentle blinking to refresh vision and reduce fatigue.",
    icon: images.VerticalArrows,
    time: 30,
    animation: VerticalMovementLottie,
  },
  {
    heading: "Eight",
    description:
      "Combine eye movements in a figure-eight pattern to enhance flexibility and relieve strain.",
    icon: images.Infinity,
    time: 60,
    animation: InfinityLottie,
  },
  {
    heading: "Focus",
    description:
      "Combine focusing on a near object and then a distant one to enhance clarity and relieve strain.",
    icon: images.Focus,
    time: 180,
    animation: FocusLottie,
  },
];
