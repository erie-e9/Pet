import * as React from "react";
import Link from "next/link";

import { User } from "../interfaces";

type Props = {
  data: User;
};

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link
    as={`/item/${data.id}/${data.name.toLowerCase()}`}
    href={`/detail?id=${data.id}`}
    replace
  >
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
