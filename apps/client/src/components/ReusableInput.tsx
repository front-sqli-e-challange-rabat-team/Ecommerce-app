import React from 'react';

interface InputProps {
  label: string;
  type?: string;
  name: string;
  value: string | number | string[] | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ReusableInput: React.FC<InputProps> = ({ label, type = 'text', name, value, onChange }) => {
  return (
    <label className="block mb-2 text-white w-100">
      {label}:
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="form-input mt-1 block w-full text-gray-800"
      />
    </label>
  );
};

export default ReusableInput;
