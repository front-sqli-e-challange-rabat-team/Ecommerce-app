import React, { useState } from 'react';

interface Order {
  id: number;
  customerName: string;
  email: string;
  totalPrice: number;
  status: string;
}

const OrdersTable: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
    { id: 1, customerName: 'John Doe', email: 'john@example.com', totalPrice: 100, status: 'Pending' },
    { id: 2, customerName: 'Jane Smith', email: 'jane@example.com', totalPrice: 200, status: 'Shipped' },
    { id: 3, customerName: 'Alice Johnson', email: 'alice@example.com', totalPrice: 150, status: 'Pending' },
  ]);
  const [editOrder, setEditOrder] = useState<Order | null>(null);
  const [newOrder, setNewOrder] = useState<Order>({ id: 0, customerName: '', email: '', totalPrice: 0, status: '' });
  const [showAddOrderForm, setShowAddOrderForm] = useState(false);

  const handleEditOrder = (order: Order) => {
    setEditOrder(order);
  };

  const handleSaveEdit = () => {
    if (!editOrder) return;

    const updatedOrders = orders.map((order) =>
      order.id === editOrder.id ? editOrder : order
    );
    setOrders(updatedOrders);
    setEditOrder(null);
  };

  const handleCancelEdit = () => {
    setEditOrder(null);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (editOrder) {
      const { name, value } = event.target;
      setEditOrder((prevOrder) => ({
        ...prevOrder,
        [name]: value,
      }));
    } else {
      const { name, value } = event.target;
      setNewOrder((prevOrder) => ({
        ...prevOrder,
        [name]: value,
      }));
    }
  };

  const handleAddOrder = () => {
    setShowAddOrderForm(true);
  };

  const handleSaveNewOrder = () => {
    const newOrderWithId = { ...newOrder, id: orders.length + 1 };
    setOrders([...orders, newOrderWithId]);
    setNewOrder({ id: 0, customerName: '', email: '', totalPrice: 0, status: '' });
    setShowAddOrderForm(false);
  };

  const handleDeleteOrder = (id: number) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
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
        <th className="px-6 py-3">
          <span className="sr-only">Actions</span>
        </th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order) => (
        <tr key={order.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{order.id}</td>
          <td className="px-6 py-4">{order.customerName}</td>
          <td className="px-6 py-4">{order.email}</td>
          <td className="px-6 py-4">{order.totalPrice}</td>
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
        <div className="mt-4 p-4 border border-gray-300 bg-white dark:bg-gray-800">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Edit Order</h3>
          <label className="block mb-2">
            Customer Name:
            <input
              type="text"
              name="customerName"
              value={editOrder.customerName}
              onChange={handleInputChange}
              className="form-input mt-1 block w-full"
            />
          </label>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              name="email"
              value={editOrder.email}
              onChange={handleInputChange}
              className="form-input mt-1 block w-full"
            />
          </label>
          <label className="block mb-2">
            Total Price:
            <input
              type="number"
              name="totalPrice"
              value={editOrder.totalPrice}
              onChange={handleInputChange}
              className="form-input mt-1 block w-full"
            />
          </label>
          <label className="block mb-2">
            Status:
            <select
              name="status"
              value={editOrder.status}
              onChange={handleInputChange}
              className="form-select mt-1 block w-full"
            >
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
          </label>
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
      {showAddOrderForm && (
        <div className="mt-4 p-4 border border-gray-300 bg-white dark:bg-gray-800">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Add Order</h3>
          <label className="block mb-2">
            Customer Name:
            <input
              type="text"
              name="customerName"
              value={newOrder.customerName}
              onChange={handleInputChange}
              className="form-input mt-1 block w-full"
            />
          </label>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              name="email"
              value={newOrder.email}
              onChange={handleInputChange}
              className="form-input mt-1 block w-full"
            />
          </label>
          <label className="block mb-2">
            Total Price:
            <input
              type="number"
              name="totalPrice"
              value={newOrder.totalPrice}
              onChange={handleInputChange}
              className="form-input mt-1 block w-full"
            />
          </label>
          <label className="block mb-2">
            Status:
            <select
              name="status"
              value={newOrder.status}
              onChange={handleInputChange}
              className="form-select mt-1 block w-full"
            >
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
          </label>
          <div className="mt-4">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleSaveNewOrder}
            >
              Save
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowAddOrderForm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddOrder}
        >
          Add Order
        </button>
      </div>
    </div>
  );
};

export default OrdersTable;
