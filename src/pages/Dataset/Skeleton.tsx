import React from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import MuiSkeleton from "@mui/material/Skeleton";

export default function Skeleton(): React.ReactElement {
  const elements = [
    160, 90, 123, 102, 80, 132, 193, 121, 89, 154, 125, 142, 93,
  ];

  return (
    <List>
      {elements.map((element) => (
        <ListItemButton key={element} dense divider>
          <MuiSkeleton height={25} width={element} />
        </ListItemButton>
      ))}
    </List>
  );
}
