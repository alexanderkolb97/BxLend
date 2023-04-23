import { FC } from "react";
import { StyledText } from "./styled";

const Text: FC<{
  size: number;
  weight: number;
  fontFamily?: string;
  marginBottom?: number;
  children: any;
}> = ({ size, weight, fontFamily, marginBottom, children }) => (
  <StyledText
    size={size}
    weight={weight}
    fontFamily={fontFamily}
    marginBottom={marginBottom}
  >
    {children}
  </StyledText>
);

export default Text;
