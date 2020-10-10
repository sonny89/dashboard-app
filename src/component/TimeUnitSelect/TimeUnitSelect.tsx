import React from 'react';

import { TimeUnit, TimeUnitData, TimeUnitOption } from 'domain/timeUnit';

import Select, { Props as SelectProps } from 'component/Select';

const generateTimeUnitOption: (timeUnitData: TimeUnitData) => TimeUnitOption = ({ timeUnit, timeUnitCount }) => {
  return {
    id: `${timeUnit}-${timeUnitCount}`,
    label: `${timeUnitCount ? 'Last' : 'This'} ${timeUnit.toLowerCase()}`,
    data: {
      timeUnit,
      timeUnitCount,
    },
  };
};

export const timeUnitOptions = [
  generateTimeUnitOption({ timeUnit: TimeUnit.Month, timeUnitCount: 0 }),
  generateTimeUnitOption({ timeUnit: TimeUnit.Month, timeUnitCount: 1 }),
  generateTimeUnitOption({ timeUnit: TimeUnit.Week, timeUnitCount: 0 }),
  generateTimeUnitOption({ timeUnit: TimeUnit.Week, timeUnitCount: 1 }),
  generateTimeUnitOption({ timeUnit: TimeUnit.Quarter, timeUnitCount: 0 }),
  generateTimeUnitOption({ timeUnit: TimeUnit.Quarter, timeUnitCount: 1 }),
  generateTimeUnitOption({ timeUnit: TimeUnit.Year, timeUnitCount: 0 }),
  generateTimeUnitOption({ timeUnit: TimeUnit.Year, timeUnitCount: 1 }),
];

// specific Time unit select, reusing the Select component (the options are generated above)
const TimeUnitSelect: React.FC<Omit<SelectProps<TimeUnitData>, 'placeholder' | 'items'>> = ({ ...props }) => {
  return <Select placeholder="Select time unit" items={timeUnitOptions} {...props} />;
};

export default TimeUnitSelect;
