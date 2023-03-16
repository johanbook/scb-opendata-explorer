import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import { FetchDatasetResult } from "../../api/dataset";
import { truncate } from "../../utils/array";

interface MetadataProps {
  metadata: FetchDatasetResult["metadata"][number];
}

export function Metadata({ metadata }: MetadataProps): React.ReactElement {
  return (
    <>
      <Typography variant="h6">Metadata for {metadata.infofile}</Typography>
      <Typography>Label: {metadata.label}</Typography>
      <Typography>Source {metadata.source}</Typography>
      <Typography>Last updated {metadata.updated}</Typography>
    </>
  );
}

interface DataProps {
  data: FetchDatasetResult["data"];
}

function formatOptions(options: string[]): string {
  const truncated = truncate(options, 30, "...");
  return truncated.join(", ");
}

export function Data({ data }: DataProps): React.ReactElement {
  const slicedData = data.slice(0, 10);

  return (
    <>
      <Typography sx={{ paddingTop: 2 }} variant="h6">
        Data preview
      </Typography>
      <Typography color="textSecondary">
        Here are some sample data points from the dataset
      </Typography>

      <List dense>
        {slicedData.map((point) => (
          <ListItem key={point.key}>
            <ListItemText
              primary={point.key}
              secondary={formatOptions(point.values)}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

interface DatasetsProps {
  data: FetchDatasetResult;
}

export default function Datasets({ data }: DatasetsProps): React.ReactElement {
  return (
    <>
      <Metadata metadata={data.metadata[0]} />

      <Data data={data.data} />
    </>
  );
}
