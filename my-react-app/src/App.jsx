import { useState } from 'react'
import './App.css'
import Table from './Table.jsx';



function App() {
  //state to store expenses
  const [count, setCount] = useState(0)
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [searchTerm, setSearchTerm] = useState("")

  //handle adding new expense
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


  return (
    
    <form onSubmit={handleAddExpense}>
    <input
      type="text"
      placeholder="Expense Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
    <input
      type="number"
      placeholder="Amount"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
    />
    <button type="submit">Add Expense</button>
  </form>
  )
}

export default App
