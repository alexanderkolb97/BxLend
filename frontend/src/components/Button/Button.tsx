import { FC } from "react";

import { StyledButton } from "./styled";

const Button: FC<{
  value: string;
  isPrimary?: boolean;
  marginLeft?: number;
}> = ({ value, isPrimary, marginLeft }) => (
  <StyledButton isPrimary={isPrimary} marginLeft={marginLeft}>
    {value}
  </StyledButton>
);

export default Button;
