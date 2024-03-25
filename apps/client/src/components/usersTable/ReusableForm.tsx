import React from 'react';
import ReusableInput from '../ReusableInput';

interface FormProps {
  title: string;
  formData: {
    name: string;
    email: string;
    role: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSave: () => void;
  handleCancel: () => void;
}

const ReusableForm: React.FC<FormProps> = ({
  title,
  formData,
  handleInputChange,
  handleSave,
  handleCancel
}) => {
  return (
    <div className="mt-4 p-4 border border-gray-300 bg-white dark:bg-gray-800">
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <ReusableInput label="Name" name="name" value={formData.name} onChange={handleInputChange} />
      <ReusableInput label="Email" name="email" value={formData.email} onChange={handleInputChange} />
      <ReusableInput label="Role" name="role" value={formData.role} onChange={handleInputChange} />
      <div className="mt-4">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleSave} > Save </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleCancel} > Cancel </button>
      </div>
    </div>
  );
};

export default ReusableForm;
