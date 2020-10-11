import React, { useEffect, useState } from 'react';

import { TimeUnitOption } from 'domain/timeUnit';
import { SortUnitOption } from 'domain/sortUnit';
import { KPI } from 'domain/kpi';
import { Company } from 'domain/company';

import { getKPI } from 'service/kpi';
import { getCompanies } from 'service/company';

import TimeUnitSelect, { timeUnitOptions } from 'component/TimeUnitSelect';
import SortUnitSelect, { sortUnitOptions } from 'component/SortUnitSelect';
import KPICard, { KPIType } from 'component/KPICard';
import Table from 'component/Table';

import style from './Dashboard.module.sass';

const initialTimeUnitOption = timeUnitOptions[0];
const initialSortUnitOption = sortUnitOptions[0];

const Dashboard: React.FC<{}> = () => {
  const [selectedTimeUnitOption, setSelectedTimeUnitOption] = useState<TimeUnitOption>(initialTimeUnitOption);
  const [kpi, setKpi] = useState<KPI>();

  const [selectedSortUnitOption, setSelectedSortUnitOption] = useState<SortUnitOption>(initialSortUnitOption);
  const [companies, setCompanies] = useState<Company[]>();

  useEffect(() => {
    getKPI(selectedTimeUnitOption.data).then((kpiResponseData) => {
      setKpi(kpiResponseData);
    });
  }, [selectedTimeUnitOption]);

  useEffect(() => {
    getCompanies(selectedSortUnitOption.data).then((companiesResponseData) => {
      setCompanies(companiesResponseData);
    });
  }, [selectedSortUnitOption]);

  const onTimeUnitSelect = (item: TimeUnitOption) => {
    setSelectedTimeUnitOption(item);
  };

  const onSortUnitSelect = (item: SortUnitOption) => {
    setSelectedSortUnitOption(item);
  };

  const renderTableRow = ({ id, name, segment, contract, renewals, npsAvg, npsLast, npsFirst }: Company) => {
    return (
      <Table.Row key={id}>
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
        <TimeUnitSelect selected={selectedTimeUnitOption} onSelect={onTimeUnitSelect} className={style.select} />
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

      <div className={style.filterContainer}>
        <div className={style.label}>Sort by</div>
        <SortUnitSelect selected={selectedSortUnitOption} onSelect={onSortUnitSelect} className={style.select} />
      </div>

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
