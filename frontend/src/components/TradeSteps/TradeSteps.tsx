import { useState, useRef, useEffect, MutableRefObject } from "react";

import TradeStep from "./TradeStep";
import Text from "src/components/Text";
import Button from "src/components/Button";

import { TRADE_STEPS } from "src/constants";

import {
  StyledTradeSteps,
  StyledTradeStepsContent,
  StyledTradeStepsList,
} from "./styled";

const TradeSteps = () => {
  const [isVisible, setVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef() as MutableRefObject<HTMLElement>;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setVisible(true);
          setHasAnimated(true);
        }
      });
    });
    observer.observe(ref.current);
    return () => observer.unobserve(ref.current);
  }, [hasAnimated]);

  return (
    <StyledTradeSteps
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={ref}
    >
      <Text size={64} weight={700} fontFamily="Inter">
        Build your own crypto portfolio
      </Text>
      <StyledTradeStepsContent>
        <Text size={27} weight={400}>
          Start your first trade with these easy steps.
        </Text>
        <StyledTradeStepsList>
          {TRADE_STEPS.map((step) => (
            <TradeStep key={step.number} step={step}></TradeStep>
          ))}
          <Button value="Get Started" isPrimary marginLeft={165} />
        </StyledTradeStepsList>
      </StyledTradeStepsContent>
    </StyledTradeSteps>
  );
};

export default TradeSteps;
