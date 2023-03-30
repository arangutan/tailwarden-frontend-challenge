import styled from 'styled-components';

export const AccountStatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  margin-top: 1.25rem;

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
