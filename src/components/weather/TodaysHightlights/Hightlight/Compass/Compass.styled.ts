import styled from "styled-components";
import { Styles } from "../../../../../App.styled";

export const DirArrow = styled.img<Styles>`
  height: 2rem;
  width: 2rem;
  transition: all 500ms ease-out;
  ${({ $styles }) => $styles};
`;

export const DetailContainer = styled.div`
  position: relative;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const StyledCompass = styled.div`
  position: relative;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;