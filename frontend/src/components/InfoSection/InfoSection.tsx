import { useState, useRef, useEffect, MutableRefObject } from "react";

import Text from "src/components/Text";
import Button from "src/components/Button";

import { INFO_ITEMS } from "src/constants";

import { StyledInfoSection, StyledInfoSectionList } from "./styled";

const InfoSection = () => {
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
    <StyledInfoSection
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={ref}
    >
      <Text size={64} weight={700}>
        BxLend is a crypto exchange for everyone.
      </Text>
      <StyledInfoSectionList>
        {INFO_ITEMS.map(({ title, description, id }) => (
          <div key={id}>
            <Text size={90} weight={700}>
              {title}
            </Text>
            <Text size={40} weight={400}>
              {description}
            </Text>
          </div>
        ))}
      </StyledInfoSectionList>
      <Button value="Get Started" isPrimary />
    </StyledInfoSection>
  );
};

export default InfoSection;
