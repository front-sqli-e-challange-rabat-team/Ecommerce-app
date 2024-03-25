import React, { useState } from 'react';
import ReusableForm from './ReusableForm';
import { OrdersTableSeed } from './OrdersTableSeed';

interface Order {
  id: number;
  customerName: string;
  email: string;
  totalPrice: number;
  status: string;
}

const OrdersTable: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(OrdersTableSeed);
  const [editOrder, setEditOrder] = useState<Order | null>(null);
  const [newOrder, setNewOrder] = useState<Order>({
    id: 0,
    customerName: '',
    email: '',
    totalPrice: 0,
    status: ''
  });
  const [showAddOrderForm, setShowAddOrderForm] = useState(false);

  const handleEditOrder = (order: Order) => {
    setEditOrder(order);
  };

  const handleSaveEdit = () => {
    if (!editOrder) return;

    const updatedOrders = orders.map(order =>
      order.id === editOrder.id ? editOrder : order
    );
    setOrders(updatedOrders);
    setEditOrder(null);
  };

  const handleCancelEdit = () => {
    setEditOrder(null);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    if (editOrder) {
      setEditOrder(prevOrder => ({
        ...prevOrder,
        [name]: value
      }));
    } else {
      setNewOrder(prevOrder => ({
        ...prevOrder,
        [name]: value
      }));
    }
  };

  const handleAddOrder = () => {
    setShowAddOrderForm(true);
  };

  const handleSaveNewOrder = () => {
    const newOrderWithId = { ...newOrder, id: orders.length + 1 };
    setOrders([...orders, newOrderWithId]);
    setNewOrder({
      id: 0,
      customerName: '',
      email: '',
      totalPrice: 0,
      status: ''
    });
    setShowAddOrderForm(false);
  };

  const handleDeleteOrder = (id: number) => {
    const updatedOrders = orders.filter(order => order.id !== id);
    setOrders(updatedOrders);
  };

  return (
    <div className="orders-table">
      <h2 className="text-2xl font-semibold mb-4 uppercase text-gray-800">Orders Table</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Customer Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Total Price</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3"> <span className="sr-only">Actions</span> </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{order.id}</td>
                <td className="px-6 py-4">{order.customerName}</td>
                <td className="px-6 py-4">{order.email}</td>
                <td className="px-6 py-4">{order.totalPrice}</td>
                <td className="px-6 py-4">{order.status}</td>
                <td className="px-6 py-4 text-right">
                  <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => handleEditOrder(order)}>Edit</button>
                  <button className="font-medium text-red-600 dark:text-red-500 hover:underline ml-2" onClick={() => handleDeleteOrder(order.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editOrder && (
        <ReusableForm title="Edit Order" formData={editOrder} handleInputChange={handleInputChange} handleSave={handleSaveEdit} handleCancel={handleCancelEdit} />
      )}
      {showAddOrderForm && (
        <ReusableForm title="Add Order" formData={newOrder} handleInputChange={handleInputChange} handleSave={handleSaveNewOrder} handleCancel={() => setShowAddOrderForm(false)} />
      )}
      <div className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddOrder} > Add Order </button>
      </div>
    </div>
  );
};
export default OrdersTable;

