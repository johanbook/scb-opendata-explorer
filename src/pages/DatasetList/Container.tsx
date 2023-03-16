import React from "react";
import { useQuery } from "react-query";

import Typography from "@mui/material/Typography";

import { fetchDatasetList } from "../../api/datasetList";
import DatasetListBreadcrumbs from "../../components/DatasetListBreadcrumbs";
import DatasetMetadata from "../../components/DatasetMetadata";
import ErrorMessage from "../../components/ui/ErrorMessage";
import useDatasetIds from "../../hooks/useDatasetIds";
import Component from "./Component";
import Header from "./Header";
import Skeleton from "./Skeleton";

export default function DatasetContainer(): React.ReactElement {
  const [datasetIds, setDatasetIds] = useDatasetIds();

  const { error, data, isLoading } = useQuery(
    `datasets-${datasetIds.join("-")}`,
    () => fetchDatasetList(datasetIds)
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
        <Typography>We were unable to fetch available datasets</Typography>
      </>
    );
  }

  if (!Array.isArray(data)) {
    return (
      <>
        <DatasetListBreadcrumbs datasetIds={datasetIds} />
        <DatasetMetadata datasetMetadata={data} />
      </>
    );
  }

  return (
    <>
      <Header datasetIds={datasetIds} />
      <Component
        data={data}
        onChange={(newDatasetId) =>
          setDatasetIds([...datasetIds, newDatasetId])
        }
      />
    </>
  );
}
