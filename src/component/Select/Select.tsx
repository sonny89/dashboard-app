import React, { useState } from 'react';
import classnames from 'classnames';

import style from './Select.module.sass';

// use generics <T> - this way we can use here any data
export interface SelectItem<T> {
  id: string;
  label: string;
  data: T;
}

export interface Props<T> {
  placeholder: string;
  items: SelectItem<T>[];
  selected?: SelectItem<T>;
  onSelect: (item: SelectItem<T>) => any;
  className?: string;
}

// use timeout to prevent closing the list before the onClick is triggered on a button
let timeoutID = 0;

const Select: React.FC<Props<any>> = <T,>({ placeholder, items, selected, onSelect, className }: Props<T>) => {
  const [open, setOpen] = useState<boolean>(false);

  const onFocus = () => {
    timeoutID && window.clearTimeout(timeoutID);
    setOpen(true);
  };

  const onBlur = () => {
    timeoutID = window.setTimeout(() => {
      setOpen(false);
    }, 0);
  };

  const handleItemClick = (item: SelectItem<T>) => {
    onSelect(item); // call the provided onSelect method to be able to use the selected item outside of the Select component
    setOpen(false);
  };

  return (
    <div
      tabIndex={0}
      onFocus={onFocus}
      onBlur={onBlur}
      className={classnames(style.root, open && style.open, className)}
    >
      <div className={style.select}>
        <span>{open || !selected ? placeholder : selected.label}</span>
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
