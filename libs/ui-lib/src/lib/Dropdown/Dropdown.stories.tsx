import React from 'react';
import { Dropdown } from './Dropdown';
import { Option } from './Dropdown';

export default {
  component: Dropdown,
  title: 'Dropdown',
};

const options = [
  { value: 'none', label: 'Click to see options' },
  { value: 'value-1', label: 'Option 1' },
  { value: 'value-2', label: 'Option 2' },
  { value: 'value-3', label: 'Option 3' },
];

export const primary = () => {
  return (
    <div style={{ maxWidth: 500, backgroundColor: '#313131' }}>
      <Dropdown
        label="Dropdown Test"
        onChange={(selected) => {
          console.log(selected);
        }}
      >
        {options.map(({ value, label }) => {
          return <Option value={value}>{label}</Option>;
        })}
      </Dropdown>
    </div>
  );
};
