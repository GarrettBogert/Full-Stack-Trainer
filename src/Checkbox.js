import React from "react";

// at least use the same name XD (bothers me)
const Checkbox = ({ label, isChecked, onCheckboxChange }) => {
  console.log(`Checkbox- ${label} isChecked: ${isChecked}`);
  return (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isChecked}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      {label}
    </label>
  </div>
);
  }

export default Checkbox;