import styled from "styled-components";
import { theme } from "../../utils/theme";

export const SettingItem = styled.article<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem 1.5rem;
  border-bottom: 1px solid ${theme.dark.darken};
  ${(props) => props.$disabled && `opacity: .5`}
`;
