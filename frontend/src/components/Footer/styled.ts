import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 545px;
  background: #172a4f;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding: 5vh 0;

  & > div {
    color: #fff;
  }

  @media only screen and (max-width: 1920px) {
    height: auto;
  }
`;

export const StyledWrap = styled.ul`
  display: flex;
  gap: 3vw;
  font-size: 2vw;
`;
