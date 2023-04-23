import styled from "styled-components";

export const StyledCurrency = styled.li`
  padding: 15px 0;
  font-family: Inter;

  display: grid;
  grid-template-columns: 35% 20% 25% 20%;
  align-items: center;

  @media only screen and (max-width: 1900px) {
    font-size: 1.8vw;
    grid-template-columns: 30% 25% 25% 20%;
  }
`;

export const StyledCurrencyTitle = styled.span`
  display: flex;
  align-items: center;
  padding-left: 20px;

  img {
    width: 40px;
  }
`;

export const StyledCurrencyName = styled.span`
  padding: 0 10px 0 26px;

  & > div {
    color: #111;
  }
`;

export const StyledCurrencySymbol = styled.span`
  & > div {
    color: #9f9393;
  }
`;

export const StyledDailyChange = styled.span<{ color: string }>`
  color: ${({ color }) => color};
`;

export const StyledmarketCap = styled.span`
  padding-right: 47px;
  text-align: right;
`;
