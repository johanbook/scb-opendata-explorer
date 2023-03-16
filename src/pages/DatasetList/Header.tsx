import React from "react";

import Typography from "@mui/material/Typography";

import DatasetListBreadcrumbs from "../../components/DatasetListBreadcrumbs";

export interface HeaderProps {
  datasetIds: string[];
}

export default function Header({
  datasetIds,
}: HeaderProps): React.ReactElement {
  return (
    <>
      <DatasetListBreadcrumbs datasetIds={datasetIds} />

      <Typography sx={{ marginTop: 2 }} variant="h5">
        Available datasets
      </Typography>

      <Typography color="textSecondary" gutterBottom>
        These are the datasets available in SCB Opendata. Select one to explore
        its contents.
      </Typography>
    </>
  );
}
