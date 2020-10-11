import { getCompaniesBySortUnit } from 'mock/company';
import { Company } from 'domain/company';
import { SortUnitData } from 'domain/sortUnit';

// this method should get the data from the backend (currently just get mock data)
export const getCompanies: (sortUnitData: SortUnitData) => Promise<Company[]> = (sortUnitData) => {
  return new Promise((resolve) => setTimeout(() => resolve(getCompaniesBySortUnit(sortUnitData).data), 500));
};
