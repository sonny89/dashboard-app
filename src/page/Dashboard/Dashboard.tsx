import React from 'react';

import KPICard, { KPIType } from 'component/KPICard';

import style from './Dashboard.module.sass';

const Dashboard: React.FC<{}> = () => {
  return (
    <div>
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
