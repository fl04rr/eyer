import styled from "styled-components";
import { theme } from "../../utils/theme";

export const StyledNavbar = styled.nav`
  border-radius: 2rem 2rem 0 0;
  position: absolute;
  width: 100%;
  padding: 3rem 2rem 2rem;
  bottom: 0;
  background-color: ${theme.dark.darken};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
