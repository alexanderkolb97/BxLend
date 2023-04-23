import Text from "../Text/Text";

import { SIDE_LIST, NAV_LIST } from "src/constants";

import { StyledFooter, StyledWrap } from "./styled";


const Footer = () => (
  <StyledFooter>
    <StyledWrap>
      {[...SIDE_LIST, ...NAV_LIST].map(({ value, id }) => (
        <li key={id}>{value}</li>
      ))}
    </StyledWrap>
    <Text size={25} weight={400} fontFamily="Inter">
      {" "}
      ©2023 BxLend Company | All rights reserved
    </Text>
  </StyledFooter>
);

export default Footer;
