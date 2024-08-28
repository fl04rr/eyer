import { Link } from "react-router-dom";
import { Icon } from "../Icon/styled";
import { ItemContainer, ItemHeading, ItemTime, StyledItem } from "./styled";

type ItemProps = {
  icon: {
    src: string;
    alt: string;
  };
  heading: string;
  time: number;
  exerciseId: number;
};

export default function Item({ icon, heading, time, exerciseId }: ItemProps) {
  return (
    <Link to={`/exercise/${exerciseId}`}>
      <StyledItem>
        <ItemContainer>
          <Icon src={icon.src} alt={icon.alt} />
          <ItemHeading>{heading}</ItemHeading>
        </ItemContainer>
        <ItemTime>{`${time}s`}</ItemTime>
      </StyledItem>
    </Link>
  );
}
