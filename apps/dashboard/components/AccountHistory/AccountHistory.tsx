import React from 'react';
import { AccountHistoryContainer } from './AccountHistory.styles';

import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AccountHistoryType } from '../../utils/types';
import { getAccountHistoryById } from '../../queries';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { getBarchartData, getPieData } from '../../utils/getDataCharts';

type AccountHistoryProps = {
  accountId?: string | string[];
};

const COLORS = ['#8884d8', '#FFBB28', '#FF8042'];

const AccountHistory = ({ accountId }: AccountHistoryProps) => {
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<AccountHistoryType[], Error> = useQuery<
    AccountHistoryType[],
    Error
  >(['account', 'history', accountId], () => getAccountHistoryById(accountId), {
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
        There was an error loading the History Account data - {error?.message}
      </p>
    );

  const barChartData = getBarchartData(data);
  const pieChartData = getPieData(data);

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    // eslint-disable-next-line
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    // eslint-disable-next-line
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    // eslint-disable-next-line
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#fff"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {pieChartData[index].name}
      </text>
    );
  };

  return (
    <>
      <AccountHistoryContainer>
        <div>
          <h3>Last 6 months spend by service</h3>
          <BarChart
            width={500}
            height={300}
            data={barChartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Compute" fill="#8884d8" />
            <Bar dataKey="Network" fill="#82ca9d" />
            <Bar dataKey="Storage" fill="#82c12d" />
          </BarChart>
        </div>

        <div>
          <h3>Spend by service</h3>
          <PieChart width={400} height={400}>
            <Pie
              data={pieChartData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={90}
              label={renderCustomizedLabel}
              fill="#82ca9d"
            >
              {pieChartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </AccountHistoryContainer>
    </>
  );
};

export default AccountHistory;
