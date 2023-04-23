import styled from "styled-components";

export const StyledHelpSection = styled.section`
  padding: 0 134px;
  font-family: "DM Sans";
  margin-bottom: 73px;

  @media only screen and (max-width: 1920px) {
    padding: 0 5vw;
  }
`;

export const StyledHelpSectionList = styled.ul`
  padding: 48px 47px 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 229px;
`;

export const StyledHelpSectionItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;
`;

export const StyledAvatarMock = styled.div`
  width: 196px;
  height: 196px;
  border-radius: 50%;
  background-color: #172a4f;

  @media only screen and (max-width: 1920px) {
    width: 20vw;
    height: 20vw;
  }
`;
