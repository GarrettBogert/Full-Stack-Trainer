import React from "react";

export default function Checkbox({ label, isChecked, onCheckboxChange }) {
  return (
    <div className="form-check categorybox">
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

