import Text from "src/components/Text";
import Button from "src/components/Button";

import { StyledPreview, StyledPreviewButtons } from "./styled";

const Preview = () => (
  <StyledPreview>
    <Text size={90} weight={900} fontFamily="Inter">
      Buy and exchange <br /> cryptocurrency <br /> instantly.
    </Text>
    <StyledPreviewButtons>
      <Button value="Get Started" isPrimary />
      <Button value="How it works?" />
    </StyledPreviewButtons>
  </StyledPreview>
);

export default Preview;
