import styled from "styled-components";
import { theme } from "../../utils/theme";

export const StyledItem = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: ${theme.dark.darken};
  border-radius: 1rem;

  &:hover img {
    opacity: 1;
    filter: drop-shadow(0px 0px 2px ${theme.dark.accent});
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ItemHeading = styled.h6`
  font-size: 2rem;
  text-transform: capitalize;
`;
export const ItemTime = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  opacity: 0.5;
`;
