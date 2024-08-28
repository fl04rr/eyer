import { Link } from "react-router-dom";
import Header from "./Header";
import { BackContainer } from "./styled";
import { Icon } from "../Icon/styled";
import { images } from "../../constants/images";

type ExerciseHeaderProps = {
  exerciseHeading: string;
};

export default function ExerciseHeader({
  exerciseHeading,
}: ExerciseHeaderProps) {
  return (
    <>
      <BackContainer>
        <Link to="/">
          <Icon src={images.ArrowBack.src} alt={images.ArrowBack.alt} />
        </Link>
      </BackContainer>
      <Header heading={exerciseHeading} />
    </>
  );
}
