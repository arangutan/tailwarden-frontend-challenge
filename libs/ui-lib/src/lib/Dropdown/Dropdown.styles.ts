import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-grow: 1;
  position: relative;
  cursor: pointer;
  margin-bottom: 10px;

  svg {
    width: 15px;
    height: 15px;
    fill: #969593;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 0;
  border-bottom: 1px solid #a6a6a6;
  background-color: transparent;
  padding-right: 1.5rem;
  appearance: none;
  color: #f1f1f1;
  width: 100%;
`;

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? 'lightgrey' : 'black')};
`;

export const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;

export const StyledButton = styled.input`
  max-width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: solid 2px blue;
  padding: 0.5rem;
  border-radius: 1rem;
`;
