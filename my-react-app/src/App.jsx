import { useState } from 'react'
import './App.css'
import Header from "./Header"
import Tablerow from "./Tablerow"

const products = [
  {
    id: 1,
    category: "fruits",
    name: "apple",
    stocked: "true",
    amount: 150,
  },
  {
    id: 2,
    category: "fruits",
    name: "dragonfruit",
    stocked: "true",
    amount: 150,
  },
  {
    id: 3,
    category: "fruits",
    name: "passionfruit",
    stocked: "false",
    amount: 200,
  },
  {
    id: 4,
    category: "vegetables",
    name: "spinach",
    stocked: "true",
    amount: 200,
  },
  {
    id: 5,
    category: "vegetables",
    name: "pumpkin",
    stocked: "true",
    amount: 400,
  },
  {
    id: 6,
    category: "vegetables",
    name: "peas",
    stocked: "true",
    amount: 150,
  }
]

function App() {

  
    //state to store expenses
    const [count, setCount] = useState(0)
    const [expenses, setExpenses] = useState([]);
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [searchTerm, setSearchTerm] = useState("")
  
    //handle adding new expense
    const handleAddProduct = (e) => {
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
    <div className="app">
    <Header />
    <Tablerow products={products}/>
    <div className="button">

    <form onSubmit={handleAddProduct}>
    <input
      type="text"
      placeholder="Product name"
      value={description}
      onChange={(e) => setname(e.target.value)}
    />
    <input
      type="number"
      placeholder="Amount"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
    />
    <button type="submit">Add Product</button>
  </form>


    </div>
    
    <main className="main-content">
    
      <productlist products={products} />
    </main>

  </div>
  )
}

export default App
