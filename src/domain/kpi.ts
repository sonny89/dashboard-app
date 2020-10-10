export interface KPIPeriods {
  current_period: number;
  last_period: number;
}

export interface KPI {
  active_source: KPIPeriods;
  weekly_active: KPIPeriods;
  nps: KPIPeriods;
}

export interface KPIResponse {
  data: KPI;
  status: string;
}
