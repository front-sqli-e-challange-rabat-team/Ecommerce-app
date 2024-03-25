// ReusableInput.tsx
import React from 'react';

interface InputProps {
  label: string;
  type?: string;
  name: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ReusableInput: React.FC<InputProps> = ({ label, type = 'text', name, value, onChange }) => {
  return (
    <label className="block mb-2 text-white">
      {label}:
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="form-input mt-1 block w-full"
      />
    </label>
  );
};

export default ReusableInput;
