import * as React from "react";

import { User } from "../interfaces";

type ListDetailProps = {
  item: User;
};

const ListDetail: React.FunctionComponent<ListDetailProps> = ({
  item: user
}) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
    {/* <h1>ewe este es detail item</h1> */}
  </div>
);

export default ListDetail;
