import DatasetListBreadcrumbs from "components/DatasetListBreadcrumbs";
import React from "react";

import Typography from "@mui/material/Typography";

export interface HeaderProps {
  datasetIds: string[];
}

export default function Header({
  datasetIds,
}: HeaderProps): React.ReactElement {
  return (
    <>
      <DatasetListBreadcrumbs datasetIds={datasetIds} />

      <Typography gutterBottom sx={{ marginTop: 2 }} variant="h5">
        Inspected dataset
      </Typography>
    </>
  );
}
