import React from "react";

import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";

import { DatasetMetadata } from "../../domain/dataset";
import Link from "../ui/Link";
import DatasetMetadataVariable from "./DatasetMetadataVariable";

export interface DatasetMetadataProps {
  datasetMetadata: DatasetMetadata;
}

export default function DatasetMetadataComponent({
  datasetMetadata,
}: DatasetMetadataProps): React.ReactElement {
  return (
    <>
      <Typography sx={{ marginTop: 2 }} variant="h5">
        Dataset: {datasetMetadata.title}
      </Typography>
      <Typography color="textSecondary">
        This is the summary of the dataset '{datasetMetadata.title}'
      </Typography>

      <Typography sx={{ paddingTop: 2 }} variant="h6">
        Variables
      </Typography>
      <Typography color="textSecondary">
        These are the variables of the dataset
      </Typography>

      <List>
        {datasetMetadata.variables.map((variable) => (
          <DatasetMetadataVariable key={variable.code} variable={variable} />
        ))}
      </List>

      <div>
        <Button component={Link} to="/dataset" variant="contained">
          Visualize dataset
        </Button>
      </div>
    </>
  );
}
