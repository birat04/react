const ExpenseItem = ({ expense }) => {
    const { title, amount, category, date } = expense;
  
    return (
      <div className="flex justify-between items-center bg-gray-50 p-4 mb-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">{category}</p>
          <p className="text-xs text-gray-400">{new Date(date).toLocaleDateString()}</p>
        </div>
        <div className="flex items-center">
          <span className="text-xl font-bold text-green-500">₹{amount}</span>
        </div>
      </div>
    );
  };
  
  export default ExpenseItem;
  