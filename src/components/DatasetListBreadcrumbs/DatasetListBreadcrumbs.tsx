import React from "react";

import Breadcrumbs from "../../components/ui/Breadcrumbs";
import { buildUrl } from "../../utils/url";

const DELIMITER = "/";
const KEY = "datasetIds";

const serialize = (ids: string[]) => ids.join(DELIMITER);

export interface DatasetListBreadcrumbsProps {
  datasetIds: string[];
}

export default function DatasetListBreadcrumbs({
  datasetIds,
}: DatasetListBreadcrumbsProps): React.ReactElement {
  return (
    <Breadcrumbs
      createLink={(segments) =>
        buildUrl({
          pathname: "/metadata",
          searchParams: {
            [KEY]: serialize(segments),
          },
        })
      }
      links={datasetIds}
      root="Home"
    />
  );
}
