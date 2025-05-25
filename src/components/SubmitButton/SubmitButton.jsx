// Import
import React from "react";
import "./SubmitButton.css";

// Code
const SubmitButton = ({ text, onClick }) => {
  return (
    <button type="submit" className="btn btn-meli" onClick={onClick}>
      {text}
    </button>
  );
};

// Export
export default SubmitButton;
