import React from 'react';
import ReusableInput from '../ReusableInput';

interface FormProps {
  title: string;
  formData: {
    name: string;
    description: string;
    price: number;
    stock: number;
    pictures: string[];
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleImageChange?: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  handleSave: () => void;
  handleCancel: () => void;
}

const CategoryItemForm: React.FC<FormProps> = ({
  title,
  formData,
  handleInputChange,
  handleImageChange,
  handleSave,
  handleCancel
}) => {
  return (
    <div className="mt-4 p-4 border border-gray-300 bg-white dark:bg-gray-800">
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <ReusableInput label="Name" name="name" value={formData.name} onChange={handleInputChange} />
      <ReusableInput label="Description" name="description" value={formData.description} onChange={handleInputChange} />
      <ReusableInput label="Price" name="price" type="number" value={formData.price.toString()} onChange={handleInputChange} />
      <ReusableInput label="Stock" name="stock" type="number" value={formData.stock.toString()} onChange={handleInputChange} />
      {formData.pictures.map((picture, index) => (
        <ReusableInput key={index} label={`Picture ${index + 1}`} name={`picture${index + 1}`} value={picture} onChange={(e) => handleImageChange && handleImageChange(e, index)} />
      ))}
      {[1, 2, 3, 4].map((index) => {
        if (!formData.pictures[index - 1]) {
          return (
            <ReusableInput key={index} label={`Picture ${index}`} name={`picture${index}`} value={formData.pictures[index - 1] || ''} onChange={(e) => handleInputChange(e)} />
          );
        }
        return null;
      })}
      <div className="mt-4">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleSave} > Save </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleCancel} > Cancel </button>
      </div>
    </div>
  );
};

export default CategoryItemForm;
