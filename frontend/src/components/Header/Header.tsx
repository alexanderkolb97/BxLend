import HeaderList from "./HeaderList/HeaderList";

import avatar from "src/assets/Avatar.png";

import { ReactComponent as LogoRadiant } from "src/assets/LogoRadiant.svg";
import { ReactComponent as LogoName } from "src/assets/LogoName.svg";
import { ReactComponent as Bell } from "src/assets/Bell.svg";

import { NAV_LIST, SIDE_LIST } from "src/constants";

import {
  StyledHeader,
  StyledLogoWrapper,
  StyledAvatarWrapper,
  StyledAvatar,
  StyledNavBar,
} from "./styled";

const Header = () => (
  <StyledHeader>
    <StyledLogoWrapper>
      <LogoRadiant />
      <LogoName />
    </StyledLogoWrapper>
    <StyledNavBar>
      <label className="hamburger-menu">
        <input type="checkbox" />
      </label>
      <aside className="sidebar">
        <nav>
          <ul>
            {[...NAV_LIST, ...SIDE_LIST].map(({ value, id }) => (
              <li key={id}>{value}</li>
            ))}
          </ul>
        </nav>
      </aside>
    </StyledNavBar>
    <HeaderList isNav gap={125} />
    <HeaderList gap={68} />
    <StyledAvatarWrapper>
      <Bell />
      <StyledAvatar src={avatar} />
    </StyledAvatarWrapper>
  </StyledHeader>
);
export default Header;
