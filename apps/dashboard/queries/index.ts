import {
  AccountType,
  AccountStatsType,
  AccountHistoryType,
} from '../utils/types';

const BASE_URL = 'https://hiring.tailwarden.com/v1';

const getAllAccounts = async (): Promise<AccountType[]> => {
  const res = await fetch(`${BASE_URL}/accounts`);

  if (res.ok) {
    return res.json();
  }

  throw new Error('error fetching accounts');
};

const getAccountStatsById = async (
  id: string | string[] | undefined
): Promise<AccountStatsType> => {
  if (typeof id === 'string') {
    const res = await fetch(`${BASE_URL}/accounts/${id}`);
    if (res.ok) {
      return res.json();
    }
    throw new Error('error fetching account stats with id');
  }
  throw new Error('invalid id');
};

const getAccountHistoryById = async (
  id: string | string[] | undefined
): Promise<AccountHistoryType[]> => {
  if (typeof id === 'string') {
    const res = await fetch(`${BASE_URL}/accounts/${id}/history`);
    if (res.ok) {
      return res.json();
    }
    throw new Error('error fetching account history with id');
  }
  throw new Error('invalid id');
};

export { getAllAccounts, getAccountStatsById, getAccountHistoryById };
