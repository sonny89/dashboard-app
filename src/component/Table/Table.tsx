import React from 'react';

import Row from './TableRow';
import Cell from './TableCell';

import style from './Table.module.sass';

export interface TableOptions {
  rowClassName: string;
  cellClassName: string;
}

export interface Props<T> {
  headerItems: string[];
  data: T[];
  renderRow: (rowData: T) => any; // this way we can render a row as we want (using any style)
}

const Table: React.FC<Props<any>> = <T,>({ headerItems, data, renderRow }: Props<T>) => {
  return (
    <div className={style.root}>
      <div className={style.header}>
        {headerItems.map((headerItem) => (
          <div key={headerItem} className={style.cell}>
            {headerItem}
          </div>
        ))}
      </div>
      {data.map((rowData) => renderRow(rowData))}
    </div>
  );
};

// for simplicity we can use the Row and Cell in the renderRow method and can access as Table.Row, Table.Cell
export default Object.assign(Table, { Row, Cell });
