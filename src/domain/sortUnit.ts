export interface SortUnitData {
  sortUnit: string;
  ascending: boolean;
}

export interface SortUnitOption {
  id: string;
  label: string;
  data: SortUnitData;
}
