import React from 'react';

import KPICard, { KPIType } from 'component/KPICard';
import Select from 'component/Select';

import style from './Dashboard.module.sass';

enum TimeUnit {
  Month = 'MONTH',
  Week = 'WEEK',
  Quarter = 'QUARTER',
  Year = 'YEAR',
}

const generateTimeUnitOption = (timeUnit: TimeUnit, timeUnitCount: number) => {
  return {
    id: `${timeUnit}-${timeUnitCount}`,
    label: `${timeUnitCount ? 'Last' : 'This'} ${timeUnit.toLowerCase()}`,
    data: {
      timeUnit,
      timeUnitCount,
    },
  };
};

const timeUnitOptions = [
  generateTimeUnitOption(TimeUnit.Month, 0),
  generateTimeUnitOption(TimeUnit.Month, 1),
  generateTimeUnitOption(TimeUnit.Week, 0),
  generateTimeUnitOption(TimeUnit.Week, 1),
  generateTimeUnitOption(TimeUnit.Quarter, 0),
  generateTimeUnitOption(TimeUnit.Quarter, 1),
  generateTimeUnitOption(TimeUnit.Year, 0),
  generateTimeUnitOption(TimeUnit.Year, 1),
];

const Dashboard: React.FC<{}> = () => {
  return (
    <div className={style.root}>
      <Select items={timeUnitOptions} />
      <div className={style.kpiContainer}>
        <KPICard
          type={KPIType.Red}
          title="Active sourcing"
          lastPeriod={1}
          currentPeriod={2}
          className={style.kpiCard}
        />
        <KPICard type={KPIType.Blue} title="Weekly active" lastPeriod={1} currentPeriod={2} className={style.kpiCard} />
        <KPICard type={KPIType.Green} title="NPS" lastPeriod={1} currentPeriod={2} className={style.kpiCard} />
      </div>
    </div>
  );
};

export default Dashboard;
