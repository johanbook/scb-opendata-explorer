import { useSearchParams } from "react-router-dom";

import { removePrefix } from "../utils/string";

const DELIMITER = "/";
const KEY = "datasetIds";

type UseDatasetIdsResult = [
  datasetIds: string[],
  setDatasetIds: (datasetIds: string[]) => void
];

const deserialize = (ids: string) => ids.split(DELIMITER);
const serialize = (ids: string[]) => ids.join(DELIMITER);

export default function useDatasetIds(): UseDatasetIdsResult {
  const [searchParams, setSearchParams] = useSearchParams();

  const rawDatasetIds = removePrefix(searchParams.get(KEY) || "", DELIMITER);
  const datasetIds = deserialize(rawDatasetIds);

  function handleSearchParamsChange(datasetIds: string[]): void {
    searchParams.set(KEY, serialize(datasetIds));
    setSearchParams(searchParams);
  }

  return [datasetIds, handleSearchParamsChange];
}
