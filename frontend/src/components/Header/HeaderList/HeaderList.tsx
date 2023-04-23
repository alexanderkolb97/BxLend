import { FC } from "react";

import { NAV_LIST, SIDE_LIST } from "src/constants";

import ListItem from "./ListItem/ListItem";

import { StyledHeaderList } from "./styled";

const HeaderList: FC<{ isNav?: boolean; gap: number }> = ({ isNav, gap }) => {
  const list = isNav ? NAV_LIST : SIDE_LIST;

  return (
    <StyledHeaderList isNav={isNav} gap={gap}>
      {list.map(({ value, id }) => (
        <ListItem key={id} value={value} />
      ))}
    </StyledHeaderList>
  );
};

export default HeaderList;
