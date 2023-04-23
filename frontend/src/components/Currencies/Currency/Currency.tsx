import { FC } from "react";

import Text from "src/components/Text";

import {
  StyledCurrency,
  StyledCurrencyTitle,
  StyledDailyChange,
  StyledCurrencyName,
  StyledCurrencySymbol,
  StyledmarketCap,
} from "./styled";

export interface ICurrency {
  "24h_change": string;
  logo_png: string;
  logo_svg: string;
  market_cap: string;
  name: string;
  price: number;
  symbol: string;
}

const Currency: FC<{ data: ICurrency }> = ({ data }) => {
  const { logo_svg, market_cap, name, price, symbol } = data;
  const color = data["24h_change"].includes("-") ? "#d13a4a" : "#03a676";

  return (
    <StyledCurrency>
      <StyledCurrencyTitle>
        <img src={logo_svg} alt="currency logo" />
        <StyledCurrencyName>
          <Text size={30} weight={600} fontFamily="Inter">
            {name}
          </Text>
        </StyledCurrencyName>{" "}
        <StyledCurrencySymbol>
          <Text size={20} weight={400} fontFamily="Inter">
            {symbol}
          </Text>
        </StyledCurrencySymbol>
      </StyledCurrencyTitle>
      <span>{price}</span>
      <StyledDailyChange color={color}>
        {color === "#03a676" ? "+" : ""}
        {data["24h_change"]}
      </StyledDailyChange>
      <StyledmarketCap>{market_cap}</StyledmarketCap>
    </StyledCurrency>
  );
};

export default Currency;
