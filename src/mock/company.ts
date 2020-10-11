// @ts-nocheck
// disable typecheck to prevent property comparison errors

import { CompaniesResponse, Company } from 'domain/company';
import { SortUnitData } from 'domain/sortUnit';

export const companies: Company[] = [
  {
    id: '1',
    name: 'Gronda GmbH',
    segment: 'A',
    contract: 'ABC',
    renewals: 10,
    npsAvg: 30,
    npsLast: 12,
    npsFirst: 44,
  },
  {
    id: '2',
    name: 'Test GmbH',
    segment: 'C',
    contract: 'XYZ',
    renewals: 8,
    npsAvg: 10,
    npsLast: 30,
    npsFirst: 20,
  },
  {
    id: '3',
    name: 'Cool company',
    segment: 'T',
    contract: 'FOO',
    renewals: 17,
    npsAvg: 20,
    npsLast: 34,
    npsFirst: 81,
  },
  {
    id: '4',
    name: 'Great GmbH',
    segment: 'B',
    contract: 'BAR',
    renewals: 2,
    npsAvg: 5,
    npsLast: 4,
    npsFirst: 3,
  },
];

// generate sorted mock Companies response
export const getCompaniesBySortUnit: (sortUnitData: SortUnitData) => CompaniesResponse = ({ sortUnit, ascending }) => {
  companies.sort((a, b) => {
    if (ascending) {
      if (a[sortUnit] < b[sortUnit]) {
        return -1;
      }
      return 1;
    }
    if (a[sortUnit] < b[sortUnit]) {
      return 1;
    }
    return -1;
  });
  return { data: companies, status: 'ok' };
};
