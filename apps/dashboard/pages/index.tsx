import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { getAllAccounts } from '../queries';
import {
  useQuery,
  QueryClient,
  dehydrate,
  DehydratedState,
} from '@tanstack/react-query';
import { AccountType } from '../utils/types';
import AccountStats from '../components/AccountStats/AccountStats';
import { Dropdown, Option } from '@tailwarden-frontend-challenge/ui-lib';
import { useEffect, useState } from 'react';

const SimpleBarChartWithoutSSR = dynamic(
  import('../components/AccountHistory/AccountHistory'),
  { ssr: false }
);

const StyledDashBoard = styled.div`
  max-width: 1240px;
  margin: auto;
`;

export function Index() {
  const [selectedAccount, setSelectedAccount] = useState('');

  const {
    isLoading,
    isError,
    error,
    data: dataAccounts,
  } = useQuery<AccountType[], Error>({
    queryKey: ['account'],
    queryFn: getAllAccounts,
  });

  useEffect(() => {
    const { id } = dataAccounts[0];
    setSelectedAccount(id);
  }, [dataAccounts]);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  const onProviderSelect = (elem) => {
    setSelectedAccount(elem);
  };

  if (isError)
    return <p>There was an error loading the data - {error?.message}</p>;

  return (
    <StyledDashBoard>
      <h1>Dashboard</h1>
      <p>
        Welcome to your dashboard, here you can find the details of your
        accounts
      </p>
      <h3>Filter By Provider</h3>
      <Dropdown label="test" onChange={onProviderSelect}>
        {dataAccounts.map(({ id, provider, label, logo }) => (
          <Option value={id} key={id}>
            {`${provider}-${label}`}
          </Option>
        ))}
      </Dropdown>

      <AccountStats accountId={selectedAccount} />
      <SimpleBarChartWithoutSSR accountId={selectedAccount} />
    </StyledDashBoard>
  );
}

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: { dehydratedState: DehydratedState };
}> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['account'], getAllAccounts);
  return { props: { dehydratedState: dehydrate(queryClient) } };
};

export default Index;
