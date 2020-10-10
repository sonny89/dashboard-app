import React, { useEffect, useState } from 'react';

import { TimeUnitData } from 'domain/timeUnit';
import { KPI } from 'domain/kpi';

import { getKPI } from 'service/kpi';

import KPICard, { KPIType } from 'component/KPICard';
import { SelectItem } from 'component/Select';
import TimeUnitSelect, { timeUnitOptions } from 'component/TimeUnitSelect';

import style from './Dashboard.module.sass';

const initialTimeUnitOption = timeUnitOptions[0];

const Dashboard: React.FC<{}> = () => {
  const [selectedTimeUnitData, setSelectedTimeUnitData] = useState<TimeUnitData>(initialTimeUnitOption.data);
  const [kpi, setKpi] = useState<KPI>();

  useEffect(() => {
    getKPI(selectedTimeUnitData).then((kpiResponseData) => {
      setKpi(kpiResponseData);
    });
  }, [selectedTimeUnitData]);

  const onTimeUnitSelect = (item: SelectItem<TimeUnitData>) => {
    setSelectedTimeUnitData(item.data);
  };

  return (
    <div className={style.root}>
      <div className={style.filterContainer}>
        <div className={style.label}>Filter by</div>
        <TimeUnitSelect selected={initialTimeUnitOption} onSelect={onTimeUnitSelect} className={style.select} />
      </div>

      {kpi && (
        <div className={style.kpiContainer}>
          <KPICard
            type={KPIType.Red}
            title="Active sourcing"
            lastPeriod={kpi.active_source.last_period}
            currentPeriod={kpi.active_source.current_period}
            className={style.kpiCard}
          />
          <KPICard
            type={KPIType.Blue}
            title="Weekly active"
            lastPeriod={kpi.weekly_active.last_period}
            currentPeriod={kpi.weekly_active.current_period}
            className={style.kpiCard}
          />
          <KPICard
            type={KPIType.Green}
            title="NPS"
            lastPeriod={kpi.nps.last_period}
            currentPeriod={kpi.nps.current_period}
            className={style.kpiCard}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
