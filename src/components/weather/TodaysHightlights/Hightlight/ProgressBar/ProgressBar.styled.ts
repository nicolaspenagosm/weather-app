import styled from "styled-components";

const progressBarWidth = 10;

export const ProgressBarContainer = styled.div`
  height: 2.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const StyledProgressBar = styled.div`
  position: relative;
  height: 0.5rem;
  border-radius: 0.5rem;
  div{
    display: flex;
    justify-content: space-between;
    i{
        font-size:0.85rem;
    }
  }
`;

export const OuterProgressBar = styled(StyledProgressBar)`
  width: ${progressBarWidth + "rem"};
  background-color: ${({ theme }) => theme.dark.accent500};
`;

export const InnerProgressBar = styled(StyledProgressBar)<{ $progress: number }>`
  transition: all ease-in 500ms;
  width: ${({ $progress }) => ($progress * progressBarWidth) / 100 + "rem"};
  background-color: ${({ theme }) => theme.dark.contrast500};
`;
