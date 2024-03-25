import React, { useState } from 'react';
import ReusableForm from './ReusableForm';
import { usersSeed } from './userSeeds';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const UsersTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>(usersSeed);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [newUser, setNewUser] = useState<User>({ id: 0, name: '', email: '', role: '' });
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  const handleEditUser = (user: User) => {
    setEditUser(user);
  };

  const handleSaveEdit = () => {
    if (!editUser) return;

    const updatedUsers = users.map(user =>
      user.id === editUser.id ? editUser : user
    );
    setUsers(updatedUsers);
    setEditUser(null);
  };

  const handleCancelEdit = () => {
    setEditUser(null);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (editUser) {
      setEditUser(prevUser => ({
        ...prevUser,
        [name]: value,
      }));
    } else {
      setNewUser(prevUser => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  const handleAddUser = () => {
    setShowAddUserForm(true);
  };

  const handleSaveNewUser = () => {
    const newUserWithId = { ...newUser, id: users.length + 1 };
    setUsers([...users, newUserWithId]);
    setNewUser({ id: 0, name: '', email: '', role: '' });
    setShowAddUserForm(false);
  };

  const handleDeleteUser = (id: number) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="users-table">
      <h2 className="text-2xl font-semibold mb-4 uppercase text-gray-800">Users Table</h2>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">ID</th>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3">Role</th>
            <th scope="col" className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.id}</td>
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.role}</td>
              <td className="px-6 py-4 text-right">
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => handleEditUser(user)}>Edit</button>
                <button className="font-medium text-red-600 dark:text-red-500 hover:underline ml-2" onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editUser && (
        <ReusableForm title="Edit User" formData={editUser} handleInputChange={handleInputChange} handleSave={handleSaveEdit} handleCancel={handleCancelEdit} />
      )}
      {showAddUserForm && (
        <ReusableForm title="Add User" formData={newUser} handleInputChange={handleInputChange} handleSave={handleSaveNewUser} handleCancel={() => setShowAddUserForm(false)} />
      )}
      <div className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddUser} > Add User </button>
      </div>
    </div>
  );
};

export default UsersTable;
