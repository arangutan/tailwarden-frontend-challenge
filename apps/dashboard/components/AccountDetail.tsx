import React from 'react';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AccountStatsType } from '../utils/types';
import { getAccountStatsById } from '../queries';

type AccountDetailProps = {
  id: string | string[];
};

const AccountDetail = ({ id }: AccountDetailProps) => {
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<AccountStatsType, Error> = useQuery<
    AccountStatsType,
    Error
  >(['account', id], () => getAccountStatsById(id), {
    enabled: !!id,
    staleTime: 10 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  if (isError) return <p>Boom boy: Error is -- {error?.message}</p>;
  return (
    <>
      <p>{data?.bill}</p>
      <p>{data?.regions}</p>
      <p>{data?.alarms}</p>
      <p>{data?.servers}</p>
    </>
  );
};

export default AccountDetail;
