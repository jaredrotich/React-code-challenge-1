import { useState } from 'react'
import './App.css'

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
    <>
      
        
      
    </>
  )
}

export default App
