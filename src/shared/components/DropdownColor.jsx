import React from 'react';
import Dropdown from '../lib/components/Dropdown';

const DropdownColor = () => {
  const colors = ['red', 'black', 'yellow'];
  const onChange = (value) => {
    console.log('---', value, '---');
  };
  return (
    <div>
      <Dropdown
        title="Please select color"
        options={colors}
        onChange={onChange}
      />
    </div>
  );
};

export default DropdownColor;
