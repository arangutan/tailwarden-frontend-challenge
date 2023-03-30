import React from 'react';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AccountStatsType } from '../../utils/types';
import { getAccountStatsById } from '../../queries';
import { Card } from '@tailwarden-frontend-challenge/ui-lib';
import { AccountStatsContainer } from './AccountStats.styles';

type AccountDetailProps = {
  accountId?: string | string[];
};

const AccountStats = ({ accountId }: AccountDetailProps) => {
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<AccountStatsType, Error> = useQuery<
    AccountStatsType,
    Error
  >(['account', accountId], () => getAccountStatsById(accountId), {
    enabled: !!accountId,
    staleTime: 10 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  if (isError)
    return (
      <p>
        There was an error loading the Account Stats data - {error?.message}
      </p>
    );

  return (
    <AccountStatsContainer>
      {Object.keys(data).map((key: string) => {
        return <Card type={key} value={data[key]} key={key} />;
      })}
    </AccountStatsContainer>
  );
};

export default AccountStats;
