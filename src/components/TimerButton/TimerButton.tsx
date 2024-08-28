import { useState } from "react";
import { BtnProgress } from "./styled";

type TimerButtonProps = {
  time: number;
};

export default function TimerButton({ time }: TimerButtonProps) {
  const [timer, setTimer] = useState<number>(time);
  const [isActive, setIsActive] = useState(false);
  console.log(typeof time);
  console.log(timer);
  const handleTimer = () => {
    if (isActive) {
    } else {
      const interval = setInterval(() => {
        if (timer > 0) setTimer((timer) => timer - 1);
      }, 100);
      timer <= 0 && clearInterval(interval);
    }
    // if(isActive){
    //     setIsActive(!isActive);

    // }
  };

  return (
    <>
      <BtnProgress
        onClick={() => handleTimer()}
      >{`start (${timer}s)`}</BtnProgress>
    </>
  );
}
