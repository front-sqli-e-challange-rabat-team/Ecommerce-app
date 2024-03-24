import React, { useState } from 'react';

interface CategoryItem {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  pictures: string[]; // Array to store picture URLs
}

const CategoryItemsCrud: React.FC = () => {
  const [categoryItems, setCategoryItems] = useState<CategoryItem[]>([
    { id: 1, name: 'Laptop', description: 'High-performance laptop', price: 1000, stock: 10, pictures: Array.from({ length: 4 }, (_, i) => `https://picsum.photos/200/200?random=${i}`) },
    { id: 2, name: 'Headphones', description: 'Wireless headphones', price: 200, stock: 20, pictures: Array.from({ length: 4 }, (_, i) => `https://picsum.photos/200/200?random=${i}`) },
    { id: 3, name: 'Mouse', description: 'Gaming mouse', price: 50, stock: 30, pictures: Array.from({ length: 4 }, (_, i) => `https://picsum.photos/200/200?random=${i}`) },
  ]);
  const [editItem, setEditItem] = useState<CategoryItem | null>(null);
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [newItem, setNewItem] = useState<CategoryItem>({
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0,
    pictures: [],
  });

  const handleEditItem = (item: CategoryItem) => {
    setEditItem(item);
  };

  const handleSaveEdit = () => {
    if (!editItem) return;

    const updatedItems = categoryItems.map((item) =>
      item.id === editItem.id ? editItem : item
    );
    setCategoryItems(updatedItems);
    setEditItem(null);
  };

  const handleCancelEdit = () => {
    setEditItem(null);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!editItem) return;

    const { name, value } = event.target;
    setEditItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (!editItem) return;

    const newPictures = [...editItem.pictures];
    newPictures[index] = event.target.value;

    setEditItem((prevItem) => ({
      ...prevItem,
      pictures: newPictures,
    }));
  };

  const handleAddItem = () => {
    setShowAddForm(true);
  };

  const handleAddFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (name.startsWith("picture")) {
      const pictureIndex = parseInt(name.slice(7)) - 1;
      setNewItem((prevItem) => ({
        ...prevItem,
        pictures: [
          ...prevItem.pictures.slice(0, pictureIndex),
          value,
          ...prevItem.pictures.slice(pictureIndex + 1)
        ]
      }));
    } else {
      setNewItem((prevItem) => ({
        ...prevItem,
        [name]: value,
      }));
    }
  };

  const handleSaveNewItem = () => {
    const newId = categoryItems.length + 1;
    const newItemWithId = { ...newItem, id: newId };
    setCategoryItems([...categoryItems, newItemWithId]);
    setShowAddForm(false);
  };

  const handleDeleteItem = (id: number) => {
    const updatedItems = categoryItems.filter((item) => item.id !== id);
    setCategoryItems(updatedItems);
  };

  return (
    <div className="category-items-crud">
      <h2 className="text-2xl font-semibold mb-4 uppercase text-gray-800">Category Items</h2>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th className="px-6 py-3">
          ID
        </th>
        <th className="px-6 py-3">
          Name
        </th>
        <th className="px-6 py-3">
          Description
        </th>
        <th className="px-6 py-3">
          Price
        </th>
        <th className="px-6 py-3">
          Stock
        </th>
        <th className="px-6 py-3">
          Picture
        </th>
        <th className="px-6 py-3">
          <span className="sr-only">Actions</span>
        </th>
      </tr>
    </thead>
    <tbody>
      {categoryItems.map((item) => (
        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.id}</td>
          <td className="px-6 py-4">{item.name}</td>
          <td className="px-6 py-4">{item.description}</td>
          <td className="px-6 py-4">{item.price}</td>
          <td className="px-6 py-4">{item.stock}</td>
          <td className="px-6 py-4">
            <img src={item.pictures[0]} alt={item.name} className="w-24 h-24" />
          </td>
          <td className="px-6 py-4 text-right">
            <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline " onClick={() => handleEditItem(item)}>Edit</button>
            <button className="font-medium text-red-600 dark:text-red-500 hover:underline ml-2" onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  {editItem && (
  <div className="mt-4 p-4 border border-gray-300 bg-white dark:bg-gray-800">
    <h3 className="text-lg font-semibold mb-2">Edit Item</h3>
    <label className="block mb-2">
      Name:
      <input
        type="text"
        name="name"
        value={editItem.name}
        onChange={handleInputChange}
        className="form-input mt-1 block w-full"
      />
    </label>
    <label className="block mb-2">
      Description:
      <textarea
        name="description"
        value={editItem.description}
        onChange={handleInputChange}
        className="form-textarea mt-1 block w-full"
      />
    </label>
    <label className="block mb-2">
      Price:
      <input
        type="number"
        name="price"
        value={editItem.price}
        onChange={handleInputChange}
        className="form-input mt-1 block w-full"
      />
    </label>
    <label className="block mb-2">
      Stock:
      <input
        type="number"
        name="stock"
        value={editItem.stock}
        onChange={handleInputChange}
        className="form-input mt-1 block w-full"
      />
    </label>
    {editItem.pictures.map((picture, index) => (
      <label key={index} className="block mb-2">
        Picture {index + 1}:
        <input
          type="text"
          name={`picture${index + 1}`}
          value={picture}
          onChange={(e) => handleImageChange(e, index)}
          className="form-input mt-1 block w-full"
        />
      </label>
    ))}
    <div className="mt-4">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={handleSaveEdit}
      >
        Save
      </button>
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleCancelEdit}
      >
        Cancel
      </button>
    </div>
  </div>
)}
{showAddForm && (
  <div className="mt-4 p-4 border border-gray-300 bg-white dark:bg-gray-800">
    <h3 className="text-lg font-semibold mb-2">Add New Item</h3>
    <label className="block mb-2">
      Name:
      <input
        type="text"
        name="name"
        value={newItem.name}
        onChange={handleAddFormChange}
        className="form-input mt-1 block w-full"
      />
    </label>
    <label className="block mb-2">
      Description:
      <textarea
        name="description"
        value={newItem.description}
        onChange={handleAddFormChange}
        className="form-textarea mt-1 block w-full"
      />
    </label>
    <label className="block mb-2">
      Price:
      <input
        type="number"
        name="price"
        value={newItem.price}
        onChange={handleAddFormChange}
        className="form-input mt-1 block w-full"
      />
    </label>
    <label className="block mb-2">
      Stock:
      <input
        type="number"
        name="stock"
        value={newItem.stock}
        onChange={handleAddFormChange}
        className="form-input mt-1 block w-full"
      />
    </label>
    {/* Assuming you want to add 4 picture URLs */}
    {[1, 2, 3, 4].map((index) => (
      <label key={index} className="block mb-2">
        Picture {index} URL:
        <input
          type="text"
          name={`picture${index}`}
          value={newItem.pictures[index - 1]}
          onChange={handleAddFormChange}
          className="form-input mt-1 block w-full"
        />
      </label>
    ))}
    <div className="mt-4">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={handleSaveNewItem}
      >
        Save
      </button>
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowAddForm(false)}
      >
        Cancel
      </button>
    </div>
  </div>
)}
<div className="mt-4">
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={handleAddItem}
  >
    Add Item
  </button>
</div>
</div>
  );
};

export default CategoryItemsCrud;


// pnpm
// turbo dev