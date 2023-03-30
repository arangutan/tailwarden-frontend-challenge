import { AccountHistoryType, AccountHistoryGroupType } from './types';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getValuesAccountHistory = (groupData: AccountHistoryGroupType[]) => {
  return [
    ...groupData.map((groupDataElem) => ({
      [groupDataElem.key]: groupDataElem.amount,
    })),
  ];
};

const getBarchartData = (dataAccountHistory: AccountHistoryType[]) => {
  return dataAccountHistory.map((dataAccountHistoryElem) => {
    const groupData = getValuesAccountHistory([
      ...dataAccountHistoryElem.groups,
    ]);

    return {
      date: monthNames[new Date(dataAccountHistoryElem.date).getMonth()],
      Compute: groupData[0].Compute,
      Storage: groupData[1].Storage,
      Network: groupData[2].Network,
    };
  });
};

const getAmountPerCategory = (
  dataAccountHistoryElem: AccountHistoryType,
  category: string
) => {
  return dataAccountHistoryElem.groups.find((groupElem) =>
    groupElem.key === category ? groupElem.amount : 0
  ).amount;
};

const getDataPerCategory = (dataAccountHistory: AccountHistoryType[]) => {
  return dataAccountHistory.reduce(
    (historyPerService, dataAccountHistoryElem: AccountHistoryType) => {
      const totalCompute = getAmountPerCategory(
        dataAccountHistoryElem,
        'Compute'
      );

      const totalNetwork = getAmountPerCategory(
        dataAccountHistoryElem,
        'Network'
      );

      const totalStorage = getAmountPerCategory(
        dataAccountHistoryElem,
        'Storage'
      );

      return {
        Compute: totalCompute + historyPerService.Compute,
        Storage: totalStorage + historyPerService.Storage,
        Network: totalNetwork + historyPerService.Network,
      };
    },
    { Compute: 0, Storage: 0, Network: 0 }
  );
};

const getPieData = (dataAccountHistory: AccountHistoryType[]) => {
  const dataPerCategory = getDataPerCategory(dataAccountHistory);
  return Object.keys(dataPerCategory).map((categoryKey) => ({
    name: categoryKey,
    value: dataPerCategory[categoryKey],
  }));
};

export { getBarchartData, getPieData };
