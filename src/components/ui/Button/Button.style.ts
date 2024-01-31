import styled, { Interpolation } from "styled-components";
export interface Styles {
  $styles?: Interpolation<React.CSSProperties>;
}

export const BaseButton = styled.button<Styles>`
  background-color: ${({ theme }) => theme.dark.accent700};
  color: ${({ theme }) => theme.dark.accent500};
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: background-color 0.15s;
  -webkit-transition: background-color 0.15s;
  -o-transition: background-color 0.15s;
  -moz-transition: background-color 0.15s;
  ${({ $styles }) => $styles};

  &:hover {
    background-color: ${({ theme }) => theme.dark.accent800};
  }
`;

export const StyledButton = styled(BaseButton)`
  padding: 0.5rem 1rem;
`;

export const StyledIconButton = styled(BaseButton)`
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
`;