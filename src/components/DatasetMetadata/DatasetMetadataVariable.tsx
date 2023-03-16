import _ from "lodash";
import React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { Variable } from "../../domain/dataset";
import { truncate } from "../../utils/array";

function formatOptions(options: string[]): string {
  const truncated = truncate(options, 30, "...");
  return truncated.join(", ");
}

export interface DatasetMetadataVariableProps {
  variable: Variable;
}

export default function DatasetMetadataVariable({
  variable,
}: DatasetMetadataVariableProps): React.ReactElement {
  const values = formatOptions(variable.valueTexts);

  return (
    <ListItem dense>
      <ListItemText primary={_.startCase(variable.text)} secondary={values} />
    </ListItem>
  );
}
