import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = () => {
  const [formData, setFormData] = useState({ title: '', amount: '', category: '' });

  const { title, amount, category } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:5000/api/expenses', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res.data);
      setFormData({ title: '', amount: '', category: '' }); // Clear form
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="title" value={title} onChange={onChange} placeholder="Title" required />
      <input type="number" name="amount" value={amount} onChange={onChange} placeholder="Amount" required />
      <input type="text" name="category" value={category} onChange={onChange} placeholder="Category" required />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;