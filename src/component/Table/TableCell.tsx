import React from 'react';

import style from './Table.module.sass';

export interface Props {
  children: any;
}

const TableCell: React.FC<Props> = ({ children }) => {
  return <div className={style.cell}>{children}</div>;
};

export default TableCell;
