import React from "react";
import "./Tablerow.css";

const Tablerow = ({ products }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Stocked</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.amount}</td>
              <td>{product.stocked === "true" ? "✅" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  

export default Tablerow;
