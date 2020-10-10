import React, { useState } from 'react';
import classnames from 'classnames';

import style from './Select.module.sass';

export interface SelectItem {
  id: string;
  label: string;
  data: any;
}

export interface Props {
  items: SelectItem[];
}

// use timeout to prevent closing the list before the onClick is triggered on a button
let timeoutID = 0;

const Select: React.FC<Props> = ({ items }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<any>();

  const onFocus = () => {
    timeoutID && window.clearTimeout(timeoutID);
    setOpen(true);
  };

  const onBlur = () => {
    timeoutID = window.setTimeout(() => {
      setOpen(false);
    }, 0);
  };

  const handleItemClick = (item: SelectItem) => {
    setSelectedItem(item);
    setOpen(false);
  };

  return (
    <div tabIndex={0} onFocus={onFocus} onBlur={onBlur} className={classnames(style.root, open && style.open)}>
      <div className={style.select}>
        <span>{open || !selectedItem?.label ? 'Select time unit' : selectedItem.label}</span>
        <span className={style.chevron}>&#9660;</span>
      </div>
      <ul className={style.list}>
        {items.map((item) => (
          <li key={item.id} className={style.listItem}>
            <button type="button" onClick={() => handleItemClick(item)} className={style.button}>
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
