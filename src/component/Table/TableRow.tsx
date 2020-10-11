import React from 'react';

import style from './Table.module.sass';

export interface Props {
  children: any;
}

const TableRow: React.FC<Props> = ({ children }) => {
  return <div className={style.row}>{children}</div>;
};

export default TableRow;
