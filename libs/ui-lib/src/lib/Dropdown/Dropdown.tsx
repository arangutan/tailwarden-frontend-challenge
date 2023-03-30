import React, { FormEvent, ReactElement, useState } from 'react';
import { StyledOption, StyledContainer, StyledSelect } from './Dropdown.styles';
import { IconArrowDown } from '../Icons/Icons';

export interface DropdownProps {
  onChange: (selected: string) => void;
  label: string;
  children: ReactElement[];
  defaultValue?: string;
}

export interface OptionProps {
  children: string;
  value: string;
}

export function Dropdown({
  onChange,
  label,
  children,
  defaultValue = '',
}: DropdownProps) {
  const [optionValue, setOptionValue] = useState(defaultValue);

  const handleSelect = (event: FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setOptionValue(value);
    onChange(value);
  };

  return (
    <StyledContainer>
      <StyledSelect
        defaultValue={optionValue}
        id={`${label}-dropdown`}
        name={`${label}-dropdown`}
        onChange={(event: FormEvent<HTMLSelectElement>) => handleSelect(event)}
      >
        {children}
      </StyledSelect>
      <IconArrowDown />
    </StyledContainer>
  );
}

export function Option({ value, children }: OptionProps) {
  return <StyledOption value={value}>{children}</StyledOption>;
}
