import { KPIResponse } from 'domain/kpi';
import { TimeUnit, TimeUnitData } from 'domain/timeUnit';

const timeUnitMap = [TimeUnit.Week, TimeUnit.Month, TimeUnit.Quarter, TimeUnit.Year];

// generate mock KPI response by time unit data with a simple logic
export const getKPIByTimeUnit: (timeUnitData: TimeUnitData) => KPIResponse = ({ timeUnit, timeUnitCount }) => {
  return {
    data: {
      active_source: {
        current_period: (timeUnitMap.indexOf(timeUnit) + 1) * (timeUnitCount + 1),
        last_period: (timeUnitMap.indexOf(timeUnit) + 1) * (timeUnitCount + 2),
      },
      weekly_active: {
        current_period: 3 * (timeUnitMap.indexOf(timeUnit) + 1) * (timeUnitCount + 1),
        last_period: 3 * (timeUnitMap.indexOf(timeUnit) + 1) * (timeUnitCount + 2),
      },
      nps: {
        current_period: 10 * (timeUnitMap.indexOf(timeUnit) + 1) * (timeUnitCount + 1),
        last_period: 10 * (timeUnitMap.indexOf(timeUnit) + 1) * (timeUnitCount + 2),
      },
    },
    status: 'ok',
  };
};
