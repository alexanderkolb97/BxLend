import { useState, useRef, useEffect, MutableRefObject } from "react";

import Text from "src/components/Text/";
import Button from "src/components/Button";

import { HELP_ITEMS } from "src/constants";

import {
  StyledAvatarMock,
  StyledHelpSection,
  StyledHelpSectionList,
  StyledHelpSectionItem,
} from "./styled";

const HelpSection = () => {
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
    <StyledHelpSection
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={ref}
    >
      <Text size={64} weight={700}>
        Need help?
      </Text>
      <StyledHelpSectionList>
        {HELP_ITEMS.map(({ title, description, id }) => (
          <StyledHelpSectionItem key={id}>
            <StyledAvatarMock />
            <Text size={44} weight={700} fontFamily="Inter">
              {title}
            </Text>
            <Text size={27} weight={400}>
              {description}
            </Text>
          </StyledHelpSectionItem>
        ))}
      </StyledHelpSectionList>
      <Text size={64} weight={700} marginBottom={74}>
        Start earning today
      </Text>
      <Button value="Join us now" isPrimary />
    </StyledHelpSection>
  );
};

export default HelpSection;
