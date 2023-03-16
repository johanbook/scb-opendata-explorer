import { Dataset, DatasetMetadata } from "../domain/dataset";
import { request } from "../utils/request";

type FetchDatasetListResult = Dataset[] | DatasetMetadata;

export async function fetchDatasetList(
  datasetIds: string[] = []
): Promise<FetchDatasetListResult> {
  return (await request(
    `https://api.scb.se/OV0104/v1/doris/en/ssd/` + datasetIds.join("/")
  )) as FetchDatasetListResult;
}
