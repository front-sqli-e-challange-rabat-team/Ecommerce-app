import React from 'react';
import ReusableInput from '../ReusableInput';

interface FormProps {
  title: string;
  formData: {
    customerName: string;
    email: string;
    totalPrice: string;
    status: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSave: () => void;
  handleCancel: () => void;
}

const ReusableForm: React.FC<FormProps> = ({ title, formData, handleInputChange, handleSave, handleCancel }) => {
  return (
    <div className="mt-4 p-4 border border-gray-300 bg-white dark:bg-gray-800">
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <ReusableInput label="Customer Name" name="customerName" value={formData.customerName} onChange={handleInputChange} />
      <ReusableInput label="Email" name="email" value={formData.email} onChange={handleInputChange} />
      <ReusableInput label="Total Price" type="number" name="totalPrice" value={formData.totalPrice} onChange={handleInputChange} />
      <label className="block mb-2"> Status:
        <select name="status" value={formData.status} onChange={handleInputChange} className="form-select mt-1 block w-full" >
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>
      </label>
      <div className="mt-4">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleSave} > Save </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleCancel} > Cancel </button>
      </div>
    </div>
  );
};

export default ReusableForm;
