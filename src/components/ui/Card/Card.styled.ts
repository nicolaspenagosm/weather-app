import styled from "styled-components";
import { Styles } from "../../../App.styled";

export const StyledCard = styled.article<Styles>`
  background-color: ${({ theme }) => theme.dark.primary400};
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  align-items: center;
  ${({ $styles }) => $styles};
  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}px) {
    ${({ $desktopStyles }) => $desktopStyles};
  }
`;
