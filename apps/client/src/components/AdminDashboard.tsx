import React, { useState } from 'react';
import CategoryCrud from './categoryCrud';
import CategoryItemsCrud from './CategoryItem';
import UsersTable from './UsersTable';
import OrdersTable from './OrdersTable';

enum Tabs {
  CategoryCrud = 'CategoryCrud',
  CategoryItemsCrud = 'CategoryItemsCrud',
  UsersTable = 'UsersTable',
  OrdersTable = 'OrdersTable',
}

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.CategoryCrud);

  const renderTabContent = () => {
    switch (activeTab) {
      case Tabs.CategoryCrud:
        return <CategoryCrud />;
      case Tabs.CategoryItemsCrud:
        return <CategoryItemsCrud />;
      case Tabs.UsersTable:
        return <UsersTable />;
      case Tabs.OrdersTable:
        return <OrdersTable />;
      default:
        return null;
    }
  };

  return (
    
    <div className="admin-dashboard">
      <h1 className="text-2xl text-gray-800 font-semibold mb-8 ">Admin Dashboard</h1>
      <div className="p-10 rounded-2xl bg-white shadow-md">
        <div className="flex mb-8 justify-center items-center">
            <button
            className={`inline-block p-4 border-b-2 rounded-t-lg hover:border-gray-300 hover:text-gray-300 ${activeTab === Tabs.CategoryCrud ? ' text-blue-500 border-blue-500' : 'text-gray-500 border-gray-200'}`}
            onClick={() => setActiveTab(Tabs.CategoryCrud)}
            >
            Category
            </button>
            <button
            className={`inline-block p-4 border-b-2 rounded-t-lg hover:border-gray-300 hover:text-gray-300 ${activeTab === Tabs.CategoryItemsCrud ? ' text-blue-500 border-blue-500' : 'text-gray-500 border-gray-200'}`}
            onClick={() => setActiveTab(Tabs.CategoryItemsCrud)}
            >
            Category Items
            </button>
            <button
            className={`inline-block p-4 border-b-2 rounded-t-lg hover:border-gray-300 hover:text-gray-300 ${activeTab === Tabs.UsersTable ? ' text-blue-500 border-blue-500' : 'text-gray-500 border-gray-200'}`}
            onClick={() => setActiveTab(Tabs.UsersTable)}
            >
            Users Table
            </button>
            <button
            className={`inline-block p-4 border-b-2 rounded-t-lg hover:border-gray-300 hover:text-gray-300 ${activeTab === Tabs.OrdersTable ? ' text-blue-500 border-blue-500' : 'text-gray-500 border-gray-200'}`}
            onClick={() => setActiveTab(Tabs.OrdersTable)}
            >
            Orders Table
            </button>
        </div>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
