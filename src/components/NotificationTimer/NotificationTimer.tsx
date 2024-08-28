import { images } from "../../constants/images";
import { Icon } from "../Icon/styled";
import { NotificationValue, NotificationWrapper } from "./styled";

type NotificationTimerProps = {
  time: number;
  changeTimer: (step: number) => void;
  disabled: boolean;
};
export default function NotificationTimer({
  time,
  changeTimer,
  disabled,
}: NotificationTimerProps) {
  return (
    <NotificationWrapper>
      <button onClick={() => changeTimer(-5)} disabled={time <= 5 || disabled}>
        <Icon src={images.Chevron.src} alt={images.Chevron.alt} />
      </button>
      <NotificationValue>{time}m</NotificationValue>
      <button onClick={() => changeTimer(5)} disabled={time >= 100 || disabled}>
        <Icon src={images.Chevron.src} alt={images.Chevron.alt} $rotate={180} />
      </button>
    </NotificationWrapper>
  );
}
