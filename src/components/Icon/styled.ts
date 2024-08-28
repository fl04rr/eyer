import styled from "styled-components";
import { theme } from "../../utils/theme";
import { transform } from "typescript";

export const Icon = styled.img<{ $rotate?: number }>`
  width: 3rem;
  height: 3rem;
  opacity: 0.7;
  transition: opacity 0.2s;
  transform: rotate(${(props) => props.$rotate}deg);

  &:hover {
    opacity: 1;
    filter: drop-shadow(0px 0px 2px ${theme.dark.accent});
  }
`;
