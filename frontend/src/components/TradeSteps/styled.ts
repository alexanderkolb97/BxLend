import styled from "styled-components";

export const StyledTradeSteps = styled.section`
  padding-left: 134px;
  margin-bottom: 264px;

  @media only screen and (max-width: 1920px) {
    padding: 0 5vw;
    margin-bottom: 13vh;
  }
`;

export const StyledTradeStepsContent = styled.div`
  padding: 26px 0 0 47px;
`;

export const StyledTradeStepsList = styled.ul`
  padding: 26px 114px 0 0;

  @media only screen and (max-width: 1920px) {
    padding: 1vw 0 0 0;

    & > button {
      margin-left: 0;
    }

    & > li:nth-child(3) {
      padding-bottom: 50px;
    }
  }
`;

export const StyledTradeStep = styled.li`
  display: flex;
  align-items: center;
  cursor: default;
`;

export const StyledTradeStepNumber = styled.div`
  padding-right: 104px;

  @media only screen and (max-width: 1920px) {
    padding-right: 8vw;
  }
`;

export const StyledTradeStepText = styled.div`
  width: 50%;

  & > div:nth-child(1) {
    padding-bottom: 26px;
  }

  @media only screen and (max-width: 1900px) {
    & > div:nth-child(1) {
      padding-bottom: 1vh;
    }
  }
`;
export const StyledTradeStepBg = styled.div<{ number: number }>`
  text-align: ${({ number }) => (number % 2 ? "left" : "right")};
  flex: 1;

  & > img {
    width: 20vw;
  }
`;
