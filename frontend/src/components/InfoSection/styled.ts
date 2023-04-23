import styled from "styled-components";

export const StyledInfoSection = styled.section`
  padding: 0 134px;
  font-family: "DM Sans";
  margin-bottom: 340px;

  @media only screen and (max-width: 1920px) {
    padding: 0 5vw 13vh 5vw;
    margin-bottom: 0;

    & > button {
      margin-left: 3vw;
    }
  }
`;

export const StyledInfoSectionList = styled.ul`
  padding: 75px 47px 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 133px;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 2vh 0;
    gap: 3vh;
    align-items: center;

    & > div {
      text-align: center;
    }
  }
`;
