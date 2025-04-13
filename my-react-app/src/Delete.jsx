import React from "react";
import './Delete.css'

const DeleteButton = ({ onDelete }) => {
    return (
      <button
        onClick={onDelete}
    
      >
        Delete
      </button>
    );
  };
  
  export default DeleteButton;