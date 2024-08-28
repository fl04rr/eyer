import styled from "styled-components";
import { theme } from "../../utils/theme";

// export const Progress = styled.div`
//   width: 80%;
//   border-radius: 4rem;
//   padding: 3rem;
//   background: rebeccapurple;
//   filter: blur(5px);
// `;

// export const BtnProgress = styled.button`
//   width: 80%;
//   border-radius: 4rem;
//   padding: 2rem;
//   background: red;
//   opacity: 0.5;
//   transform: translateY(-113%);
//   font-size: 2rem;
//   line-height: 2rem;
// `;

export const BtnProgress = styled.button`
  padding: 2rem;
  border-radius: 4rem;
  font-size: 2rem;
  line-height: 2rem;
  color: ${theme.dark.color};
  background-color: ${theme.dark.accent};
  width: 100%;
  font-weight: bold;
`;
