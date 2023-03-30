import styled from 'styled-components';

export const AccountHistoryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  margin-top: 1.25rem;

  @media (max-width: 930px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
