export interface Dataset {
  id: string;
  text: string;
}

export interface Variable {
  code: string;
  text: string;
  time?: boolean;
  values: string[];
  valueTexts: string[];
}

export interface DatasetMetadata {
  title: string;
  variables: Variable[];
}
