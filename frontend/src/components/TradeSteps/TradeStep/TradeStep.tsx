import { FC } from "react";

import Text from "src/components/Text";

import {
  StyledTradeStep,
  StyledTradeStepBg,
  StyledTradeStepNumber,
  StyledTradeStepText,
} from "../styled";

interface ITradeStep {
  title: string;
  description: string;
  src?: any;
  number: number;
}

const TradeStep: FC<{ step: ITradeStep }> = ({ step }) => {
  const { title, description, src, number } = step;

  return (
    <StyledTradeStep>
      <StyledTradeStepNumber>
        <Text size={82} weight={700} fontFamily="Inter">
          {number}.
        </Text>
      </StyledTradeStepNumber>
      <StyledTradeStepText>
        <Text size={50} weight={700} fontFamily="Inter">
          {title}
        </Text>
        <Text size={30} weight={400}>
          {description}
        </Text>
      </StyledTradeStepText>
      <StyledTradeStepBg number={number}>
        <img src={src} alt="trade img" />
      </StyledTradeStepBg>
    </StyledTradeStep>
  );
};

export default TradeStep;
