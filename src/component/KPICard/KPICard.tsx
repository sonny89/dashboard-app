import React from 'react';
import classnames from 'classnames';

import style from './KPICard.module.sass';

// we can use these to select the background of a KPI component
export enum KPIType {
  Red = 'red',
  Blue = 'blue',
  Green = 'green',
}

export interface Props {
  type: KPIType;
  title: string;
  currentPeriod: number;
  lastPeriod: number;
  className?: string;
}

const KPICard: React.FC<Props> = ({ type, title, currentPeriod, lastPeriod, className }) => {
  return (
    <div className={classnames(style.root, style[type], className)}>
      <div className={style.title}>{title}</div>
      <div className={style.currentPeriod}>{currentPeriod}</div>
      <div className={style.lastPeriod}>{`${lastPeriod} Last period`}</div>
    </div>
  );
};

export default KPICard;
