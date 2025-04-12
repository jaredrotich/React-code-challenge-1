import { useState } from "react";
//To handle adding new expenses
const handleAddExpense = (e) => {
    e.preventDefault();
    if (description && amount) {
      setExpenses([
        ...expenses,
        { description, amount: parseFloat(amount), id: Date.now() },
      ]);
      setDescription("");
      setAmount("");
    }
  };
