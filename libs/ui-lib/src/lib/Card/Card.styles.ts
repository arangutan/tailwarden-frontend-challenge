import styled from 'styled-components';

export const StyledCard = styled.article`
  padding: 1rem;
  border-radius: 8px;
  background-color: #e3ffa8;
  color: #2e2e2e;
  min-height: 100px;
  display: flex;
  position: relative;
  transition: 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    max-width: 100px;
  }

  &:hover {
    transform: translateY(-5px);
  }

  &:nth-child(2) {
    background-color: #9cdea5;
  }

  &:nth-child(3) {
    background-color: #63b9a1;
  }

  &:nth-child(4) {
    background-color: #3f9393;
  }
`;

export const TileHeader = styled.div`
  margin-left: 0.5rem;
  text-transform: capitalize;

  p,
  h3 {
    margin: 0;
  }
`;
