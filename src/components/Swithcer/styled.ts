import styled from "styled-components";
import { theme } from "../../utils/theme";

const switcherSize = "1.5rem";

export const LabelSwitcher = styled.label<{ $checked: boolean }>`
  height: calc(${switcherSize} * 1.5);
  width: calc(${switcherSize} * 3);
  background-color: ${(props) => (props.$checked ? "#b39ddb" : "#bdbdbd")};
  border-radius: calc(${switcherSize});
  display: flex;
  align-items: center;
  transition: background-color 0.2s;

  &:before {
    content: "";
    height: calc(${switcherSize} * 1.5 - 2px);
    width: calc(${switcherSize} * 1.5 - 2px);
    background-color: ${(props) =>
      props.$checked ? theme.dark.accent : theme.dark.darken};
    border-radius: 50%;
    transform: translateX(
      ${(props) => (props.$checked ? `calc(${switcherSize} * 1.5)` : `2px`)}
    );
    transition:
      transform 0.2s,
      background-color 0.2s;
  }
`;

export const SwitcherInput = styled.input`
  visibility: hidden;
`;
