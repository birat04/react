import { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expense.title || !expense.amount || !expense.date || !expense.category) {
      alert("Please fill in all fields!");
      return;
    }

    onAddExpense({
      id: crypto.randomUUID(),
      ...expense,
      amount: parseFloat(expense.amount),
      date: new Date(expense.date),
    });

    setExpense({ title: "", amount: "", date: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input type="text" name="title" value={expense.title} onChange={handleChange} placeholder="Title" />
      <input type="number" name="amount" value={expense.amount} onChange={handleChange} placeholder="Amount" />
      <input type="date" name="date" value={expense.date} onChange={handleChange} />
      <select name="category" value={expense.category} onChange={handleChange}>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
