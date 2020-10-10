import { getKPIByTimeUnit } from 'mock/kpi';
import { KPI } from 'domain/kpi';
import { TimeUnitData } from 'domain/timeUnit';

// this method should get the data from the backend (currently just get mock data)
export const getKPI: (timeUnitData: TimeUnitData) => Promise<KPI> = (timeUnitData) => {
  return new Promise((resolve) => setTimeout(() => resolve(getKPIByTimeUnit(timeUnitData).data), 500));
};
