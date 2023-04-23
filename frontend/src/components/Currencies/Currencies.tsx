import { useState, useEffect } from "react";

import Text from "src/components/Text";
import Currency from "./Currency/Currency";

import { CURRENCIES_HEADER_ITEMS } from "src/constants";
import { ICurrency } from "./Currency/Currency";

import {
  StyledCurrenciesWrap,
  StyledCurrenciesList,
  StyledCurrenciesHeader,
} from "./styled";

const Currencies = () => {
  const [currencies, setCurrencies] = useState<ICurrency[]>([]);

  useEffect(() => {
    try {
      fetch(process.env.REACT_APP_API_URL!)
        .then((res) => res.json())
        .then(({ currencies }) => setCurrencies(currencies));
    } catch (e) {
      console.log(e);
    }

    const socket = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL!);

    socket.onmessage = (event) => {
      const { data } = JSON.parse(event.data);
      setCurrencies((prevState) =>
        prevState.map((curr) => ({
          ...curr,
          ...data.find(({ name }: ICurrency) => name === curr.name),
        }))
      );
    };

    return () => {
      if (socket.readyState === 1) {
        socket.close();
      }
    };
  }, []);

  return (
    <StyledCurrenciesWrap>
      <Text size={64} weight={700} marginBottom={130} fontFamily="Inter">
        Popular Cryptocurrencies
      </Text>
      <StyledCurrenciesHeader>
        {CURRENCIES_HEADER_ITEMS.map(({ value, id }) => (
          <Text key={id} size={24} weight={400} fontFamily="Inter">
            {value}
          </Text>
        ))}
      </StyledCurrenciesHeader>
      <StyledCurrenciesList>
        {currencies.map((data) => (
          <Currency key={data.name} data={data} />
        ))}
      </StyledCurrenciesList>
    </StyledCurrenciesWrap>
  );
};

export default Currencies;
