import { useState } from "react";

function expenseTable() {
    return (
        <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.length === 0 ? (
            <tr>
              <td> </td>
              <td> </td>
            </tr>
          ) : (
            filteredExpenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    

    );
}

export default Table;