import { useParams } from "react-router-dom";
import ExerciseHeader from "../components/Header/ExerciseHeader";
import { exercises } from "../constants/exercises";
import { ExerciseContainer } from "../components/Container/styled";
import { Description } from "../components/Description/styled";
import TimerButton from "../components/TimerButton/TimerButton";
import LottieContainer from "../components/LottieContainer/LottieContainer";

export default function ExercisePage() {
  const { id } = useParams<string>();
  if (!id) {
    return <p>Error</p>;
  }
  return (
    <>
      <ExerciseHeader exerciseHeading={exercises[+id].heading} />
      <ExerciseContainer>
        <Description>{exercises[+id].description}</Description>
        <LottieContainer animation={exercises[+id].animation} />
        {/* <TimerButton time={exercises[+id].time} /> */}
      </ExerciseContainer>
    </>
  );
}
