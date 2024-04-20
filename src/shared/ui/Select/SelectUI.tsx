import React from 'react';

interface SelectUIProps {
  options: string[];
}

const SelectUI: React.FC<SelectUIProps> = ({ options }) => {
  return (
    <select>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  );
};

export default SelectUI;