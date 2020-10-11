export interface Company {
  id: string;
  name: string;
  segment: string;
  contract: string;
  renewals: number;
  npsAvg: number;
  npsLast: number;
  npsFirst: number;
}

export interface CompaniesResponse {
  data: Company[];
  status: string;
}
