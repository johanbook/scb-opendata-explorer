import { DatasetMetadata } from "../domain/dataset";
import { request } from "../utils/request";

interface Metadata {
  infofile: string;
  label: string;
  source: string;
  updated: string;
}

interface Data {
  key: string;
  values: string[];
}

export interface FetchDatasetResult {
  columns: unknown[];
  comments: unknown[];
  data: Data[];
  metadata: Metadata[];
}

type Options = Record<string, unknown>;

function verifyOptions(dataset: DatasetMetadata, options: Options): void {
  const variables = dataset.variables;

  for (const key in options) {
    if (!(key in dataset)) {
      throw new Error(
        `Variable '${key}' not recognized, expected one of '${Object.keys(
          variables
        ).join(",")}'`
      );
    }
  }
}

export async function fetchDataset(
  datasetIds: string[],
  dataset: DatasetMetadata,
  options: Options
): Promise<FetchDatasetResult> {
  verifyOptions(dataset, options);

  const url =
    `https://api.scb.se/OV0104/v1/doris/en/ssd/` + datasetIds.join("/");

  const payload = {
    query: [],
    response: {
      format: "json",
    },
  };

  return (await request(url, {
    body: JSON.stringify(payload),
    method: "POST",
  })) as FetchDatasetResult;
}
