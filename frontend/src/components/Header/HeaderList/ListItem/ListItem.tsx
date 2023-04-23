import { FC } from "react";

import Text from "src/components/Text";

const ListItem: FC<{ value: string }> = ({ value }) => (
  <li>
    <Text size={26} weight={400}>
      {value}
    </Text>
  </li>
);

export default ListItem;
