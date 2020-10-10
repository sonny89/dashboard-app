export enum TimeUnit {
  Month = 'MONTH',
  Week = 'WEEK',
  Quarter = 'QUARTER',
  Year = 'YEAR',
}

export interface TimeUnitData {
  timeUnit: TimeUnit;
  timeUnitCount: number;
}

export interface TimeUnitOption {
  id: string;
  label: string;
  data: TimeUnitData;
}
