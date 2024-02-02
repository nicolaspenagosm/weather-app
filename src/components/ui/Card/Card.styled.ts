import styled from "styled-components";
import { Styles } from "../../../App.style";

export const StyledCard = styled.article<Styles>`
  background-color: ${({ theme }) => theme.dark.primary400};
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  
  ${({ $styles }) => $styles};
`;
