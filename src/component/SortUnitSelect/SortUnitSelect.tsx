import React from 'react';

import { SortUnitData, SortUnitOption } from 'domain/sortUnit';

import Select, { Props as SelectProps } from 'component/Select';

const generateSortUnitOption: (sortUnitData: SortUnitData, label: string) => SortUnitOption = (
  { sortUnit, ascending },
  label
) => {
  return {
    id: `${sortUnit}-${ascending}`,
    label,
    data: {
      sortUnit,
      ascending,
    },
  };
};

export const sortUnitOptions = [
  generateSortUnitOption({ sortUnit: 'id', ascending: true }, 'Id'),
  generateSortUnitOption({ sortUnit: 'name', ascending: true }, 'Name'),
  generateSortUnitOption({ sortUnit: 'segment', ascending: true }, 'Segment'),
  generateSortUnitOption({ sortUnit: 'contract', ascending: true }, 'Contract'),
  generateSortUnitOption({ sortUnit: 'renewals', ascending: true }, 'Renewals ascending'),
  generateSortUnitOption({ sortUnit: 'renewals', ascending: false }, 'Renewals descending'),
  generateSortUnitOption({ sortUnit: 'npsAvg', ascending: false }, 'Best NPS avg'),
  generateSortUnitOption({ sortUnit: 'npsAvg', ascending: true }, 'Worst NPS avg'),
  generateSortUnitOption({ sortUnit: 'npsLast', ascending: false }, 'Best NPS last'),
  generateSortUnitOption({ sortUnit: 'npsLast', ascending: true }, 'Worst NPS last'),
  generateSortUnitOption({ sortUnit: 'npsFirst', ascending: false }, 'Best NPS first'),
  generateSortUnitOption({ sortUnit: 'npsFirst', ascending: true }, 'Worst NPS first'),
];

// specific Sort unit select, reusing the Select component (the options are generated above)
const SortUnitSelect: React.FC<Omit<SelectProps<SortUnitData>, 'placeholder' | 'items'>> = ({ ...props }) => {
  return <Select placeholder="Select sorting" items={sortUnitOptions} {...props} />;
};

export default SortUnitSelect;
