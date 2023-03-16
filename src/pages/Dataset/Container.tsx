import React from "react";
import { useQuery } from "react-query";

import Typography from "@mui/material/Typography";

import { fetchDataset } from "../../api/dataset";
import ErrorMessage from "../../components/ui/ErrorMessage";
import useDatasetIds from "../../hooks/useDatasetIds";
import Component from "./Component";
import Header from "./Header";
import Skeleton from "./Skeleton";

export default function DatasetContainer(): React.ReactElement {
  const datasetIds = useDatasetIds()[0];

  const { error, data, isLoading } = useQuery(
    `dataset-${datasetIds.join("-")}`,
    () => fetchDataset(datasetIds, { title: "", variables: [] }, {})
  );

  if (error) {
    const message = (error as Error).message;
    return (
      <>
        <Header datasetIds={datasetIds} />
        <ErrorMessage message={`An error occured: ${message}`} />
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <Header datasetIds={datasetIds} />
        <Skeleton />
      </>
    );
  }

  if (!data) {
    return (
      <>
        <Header datasetIds={datasetIds} />
        <Typography>We were unable to fetch the requested dataset</Typography>
      </>
    );
  }

  return (
    <>
      <Header datasetIds={datasetIds} />
      <Component data={data} />
    </>
  );
}
