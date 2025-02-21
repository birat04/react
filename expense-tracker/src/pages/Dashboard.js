import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
};

export default Dashboard;