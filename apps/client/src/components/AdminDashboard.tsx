import React, { useState } from 'react';
import CategoryCrud from './categoryCrud/categoryCrud';
import CategoryItemsCrud from './categoryItem/CategoryItem';
import UsersTable from './usersTable/UsersTable';
import OrdersTable from './ordersTable/OrdersTable';

enum Tabs {
  CategoryCrud = 'CategoryCrud',
  CategoryItemsCrud = 'CategoryItemsCrud',
  UsersTable = 'UsersTable',
  OrdersTable = 'OrdersTable',
}

const tabButtons = [
  {
    label: 'Category',
    tab: Tabs.CategoryCrud,
  },
  {
    label: 'Category Items',
    tab: Tabs.CategoryItemsCrud,
  },
  {
    label: 'Users Table',
    tab: Tabs.UsersTable,
  },
  {
    label: 'Orders Table',
    tab: Tabs.OrdersTable,
  },
];

const onTabSelected = (tab: Tabs, setActiveTab: React.Dispatch<React.SetStateAction<Tabs>>) => {
  setActiveTab(tab);
};

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.CategoryCrud);

  return (
    <div className="admin-dashboard flex flex-col items-center justify-center">
      <h1 className="text-2xl text-gray-800 font-semibold mb-8 ">Admin Dashboard</h1>
      <div className="p-10 rounded-2xl bg-white shadow-md">
        <div className="flex mb-8 justify-center items-center">
          {tabButtons.map((button) => (
            <button
              key={button.tab}
              className={`inline-block p-4 border-b-2 rounded-t-lg hover:border-gray-300 hover:text-gray-300 ${activeTab === button.tab ? ' text-blue-500 border-blue-500' : 'text-gray-500 border-gray-200'}`}
              onClick={() => onTabSelected(button.tab, setActiveTab)}
            >
              {button.label}
            </button>
          ))}
        </div>
        {activeTab === Tabs.CategoryCrud && <CategoryCrud />}
        {activeTab === Tabs.CategoryItemsCrud && <CategoryItemsCrud />}
        {activeTab === Tabs.UsersTable && <UsersTable />}
        {activeTab === Tabs.OrdersTable && <OrdersTable />}
      </div>
    </div>
  );
};

export default AdminDashboard;
