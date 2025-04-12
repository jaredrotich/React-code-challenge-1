import { useState } from "react";

// To handle search
const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Expense Tracker</h1>

      
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>

  )

  export default Search;