import React, { useState } from 'react';

interface Category {
  id: number;
  name: string;
  description: string;
}

const CategoryCrud: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: 'Electronics', description: 'Electronic gadgets and devices' },
    { id: 2, name: 'Clothing', description: 'Apparel and clothing items' },
    { id: 3, name: 'Books', description: 'Various genres of books' },
  ]);
  const [newCategory, setNewCategory] = useState<Category>({ id: 0, name: '', description: '' });
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false);
  const [showEditCategoryForm, setShowEditCategoryForm] = useState(false);
  const [categoryToEdit, setCategoryToEdit] = useState<Category | null>(null);

  const handleEditCategory = (category: Category) => {
    setShowEditCategoryForm(true);
    setCategoryToEdit(category);
  };

  const handleDeleteCategory = (id: number) => {
    const updatedCategories = categories.filter(category => category.id !== id);
    setCategories(updatedCategories);
  };

  const handleAddCategory = () => {
    setShowAddCategoryForm(true);
  };

  const handleSaveCategory = () => {
    if (categoryToEdit) {
      const updatedCategories = categories.map((category) => {
        if (category.id === categoryToEdit.id) {
          return {
            ...category,
            name: categoryToEdit.name,
            description: categoryToEdit.description,
          };
        }
        return category;
      });
      setCategories(updatedCategories);
      setShowEditCategoryForm(false);
      setCategoryToEdit(null);
    } else {
      
      const newCategoryWithId = { ...newCategory, id: categories.length + 1 };
      setCategories([...categories, newCategoryWithId]);
      setShowAddCategoryForm(false);
      setNewCategory({ id: 0, name: '', description: '' }); 
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (categoryToEdit) {
      setCategoryToEdit((prevCategory) => ({
        ...prevCategory,
        [name]: value,
      }));
    } else {
      setNewCategory((prevCategory) => ({
        ...prevCategory,
        [name]: value,
      }));
    }
  };

  return (
    <div className="category-crud flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mb-4 uppercase text-gray-800">Category</h2>
      <table className="w-full text-sm text-left text-gray-500">
    <thead className="text-xs uppercase bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          ID
        </th>
        <th scope="col" className="px-6 py-3">
          Name
        </th>
        <th scope="col" className="px-6 py-3">
          Description
        </th>
        <th scope="col" className="px-6 py-3">
          Actions
        </th>
      </tr>
    </thead>
    <tbody>
      {categories.map((category, index) => (
        <tr key={category.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-blue-900'} border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}>
          <td className="px-6 py-4">{category.id}</td>
          <td className="px-6 py-4">{category.name}</td>
          <td className="px-6 py-4">{category.description}</td>
          <td className="px-6 py-4 text-right">
            <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => handleEditCategory(category)}>Edit</button>
            <button className="font-medium text-red-600 dark:text-red-500 hover:underline ml-2" onClick={() => handleDeleteCategory(category.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  {showAddCategoryForm && (
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 p-4 border border-gray-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 w-full">
    <h3 className="text-lg font-semibold mb-2">Add Category</h3>
    <label className="block mb-2"> Name:
      <input type="text" name="name" value={newCategory.name} onChange={handleInputChange} className="form-input mt-1 block w-full text-gray-800" />
    </label>
    <label className="block mb-2"> Description:
      <textarea name="description" value={newCategory.description} onChange={handleInputChange} className="form-textarea mt-1 block w-full text-gray-800" />
    </label>
    <div className="mt-4">
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleSaveCategory} > Save </button>
      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowAddCategoryForm(false)} > Cancel </button>
    </div>
  </div>
)}
{showEditCategoryForm && categoryToEdit && (
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 p-4 border border-gray-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 w-full">
    <h3 className="text-lg font-semibold mb-2">Edit Category</h3>
    <label className="block mb-2"> Name:
      <input type="text" name="name" value={categoryToEdit.name} onChange={handleInputChange} className="form-input mt-1 block w-full text-gray-800" />
    </label>
    <label className="block mb-2"> Description:
      <textarea name="description" value={categoryToEdit.description} onChange={handleInputChange} className="form-textarea mt-1 block w-full text-gray-800" />
    </label>
    <div className="mt-4">
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleSaveCategory} > Save </button>
      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowEditCategoryForm(false)} > Cancel </button>
    </div>
  </div>
)}
<div className="mt-4">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddCategory} > Add Category </button>
</div>
</div>

  );
};

export default CategoryCrud;
