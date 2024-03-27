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
    colors: string[] | string;
    sizes: string[] | string;
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
  const colorsValue = Array.isArray(formData.colors) ? formData.colors.join(', ') : formData.colors;
  const sizesArray = Array.isArray(formData.sizes) ? formData.sizes : [];

  const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    let updatedSizes: string[];

    if (checked) {
      updatedSizes = [...sizesArray, value];
    } else {
      updatedSizes = sizesArray.filter((size: string) => size !== value);
    }

    handleInputChange({
      target: {
        name: 'sizes',
        value: updatedSizes
      }
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="mt-4 p-4 border border-gray-300 bg-white dark:bg-gray-800 w-full">
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <ReusableInput label="Name" name="name" value={formData.name} onChange={handleInputChange} />
      <ReusableInput label="Description" name="description" value={formData.description} onChange={handleInputChange} />
      <ReusableInput label="Price" name="price" type="number" value={formData.price.toString()} onChange={handleInputChange} />
      <ReusableInput label="Stock" name="stock" type="number" value={formData.stock.toString()} onChange={handleInputChange} />
      <ReusableInput label="Colors" name="colors" value={colorsValue} onChange={handleInputChange} />

      <div className="flex flex-col justify-center">
        
        <label className="mr-2 text-white">Sizes:</label>
        <div>
            {sizeOptions.map(size => (
            <label key={size} className="mr-2 text-white">
                <input
                type="checkbox"
                name="sizes"
                value={size}
                checked={sizesArray.includes(size)}
                onChange={handleSizeChange}
                className="mr-1"
                />
                {size}
            </label>
            ))}
        </div>
      </div>

      {Array.from({ length: 4 }).map((_, index) => (
        <ReusableInput
          key={index}
          label={`Picture ${index + 1}`}
          name={`picture${index + 1}`}
          value={formData.pictures[index] || ''}
          onChange={(e) => handleInputChange(e)}
        />
      ))}

      <div className="mt-4">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleSave}>Save</button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default CategoryItemForm;
