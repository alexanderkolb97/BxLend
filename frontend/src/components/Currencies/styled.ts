import styled from "styled-components";

export const StyledCurrenciesList = styled.ul`
  font-size: 24px;
  padding: 0;
`;

export const StyledCurrenciesWrap = styled.section`
  padding: 0 134px;
  margin-bottom: 186px;

  @media only screen and (max-width: 1900px) {
    padding: 0 5vw;
  }
`;

export const StyledCurrenciesHeader = styled.div`
  display: grid;
  grid-template-columns: 35% 20% 25% 20%;
  align-items: center;
  background: #f2f2f2;
  border-radius: 20px;
  color: #172a4f;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  padding: 21px 0 16px 0;
  margin-bottom: 63px;

  > * {
    &:last-child {
      text-align: right;
      padding-right: 47px;
    }
  }

  > * {
    &:first-child {
      padding-left: 85px;
    }
  }

  @media only screen and (max-width: 1900px) {
    font-size: 3vw;
    grid-template-columns: 30% 25% 25% 20%;
  }
`;
