import React from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { Dataset } from "../../domain/dataset";

interface DatasetProps {
  onClick: (dataset: Dataset) => void;
  dataset: Dataset;
}

function DatasetListItem({
  onClick,
  dataset,
}: DatasetProps): React.ReactElement {
  return (
    <ListItemButton dense divider onClick={() => onClick(dataset)}>
      <ListItemText primary={dataset.text} />
    </ListItemButton>
  );
}

interface DatasetsProps {
  data: Dataset[];
  onChange: (datasetId: string) => void;
}

export default function Datasets({
  data,
  onChange,
}: DatasetsProps): React.ReactElement {
  return (
    <>
      <List>
        {data.map((dataset) => (
          <DatasetListItem
            key={dataset.id}
            onClick={(dataset: Dataset) => onChange(dataset.id)}
            dataset={dataset}
          />
        ))}
      </List>
    </>
  );
}
