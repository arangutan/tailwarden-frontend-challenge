export type AccountType = {
  id: string;
  provider: string;
  label: string;
  logo: string;
};

export type AccountStatsType = {
  bill: number;
  servers: number;
  regions: number;
  alarms: number;
};

export type AccountHistoryGroupType = {
  key: string;
  amount: number;
};

export type AccountHistoryType = {
  date: string;
  groups: AccountHistoryGroupType[];
};
