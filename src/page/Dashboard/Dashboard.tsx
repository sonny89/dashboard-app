import React, { useEffect, useState } from 'react';

import { TimeUnitData } from 'domain/timeUnit';
import { KPI } from 'domain/kpi';
import { Company } from 'domain/company';

import { getKPI } from 'service/kpi';
import { getCompanies } from 'service/company';

import KPICard, { KPIType } from 'component/KPICard';
import { SelectItem } from 'component/Select';
import TimeUnitSelect, { timeUnitOptions } from 'component/TimeUnitSelect';
import Table from 'component/Table';

import style from './Dashboard.module.sass';

const initialTimeUnitOption = timeUnitOptions[0];

const Dashboard: React.FC<{}> = () => {
  const [selectedTimeUnitData, setSelectedTimeUnitData] = useState<TimeUnitData>(initialTimeUnitOption.data);
  const [kpi, setKpi] = useState<KPI>();

  const [companies, setCompanies] = useState<Company[]>();

  useEffect(() => {
    getKPI(selectedTimeUnitData).then((kpiResponseData) => {
      setKpi(kpiResponseData);
    });
  }, [selectedTimeUnitData]);

  useEffect(() => {
    getCompanies({ sortUnit: 'segment', ascending: true }).then((companiesResponseData) => {
      setCompanies(companiesResponseData);
    });
  }, []);

  const onTimeUnitSelect = (item: SelectItem<TimeUnitData>) => {
    setSelectedTimeUnitData(item.data);
  };

  const renderTableRow = ({ id, name, segment, contract, renewals, npsAvg, npsLast, npsFirst }: Company) => {
    return (
      <Table.Row>
        <Table.Cell>{id}</Table.Cell>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{segment}</Table.Cell>
        <Table.Cell>{contract}</Table.Cell>
        <Table.Cell>{renewals}</Table.Cell>
        <Table.Cell>{npsAvg}</Table.Cell>
        <Table.Cell>{npsLast}</Table.Cell>
        <Table.Cell>{npsFirst}</Table.Cell>
      </Table.Row>
    );
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

      {companies && (
        <Table
          headerItems={['Id', 'Company name', 'Segment', 'Contract', 'Renewals', 'NPS avg', 'NPS last', 'NPS first']}
          data={companies}
          renderRow={renderTableRow}
        />
      )}
    </div>
  );
};

export default Dashboard;
