import { Heading } from "../Heading/styled";
import { StyledHeader } from "./styled";

type HeaderProps = {
  heading: string;
};

export default function Header({ heading }: HeaderProps) {
  return (
    <StyledHeader>
      <Heading>{heading}</Heading>
    </StyledHeader>
  );
}
