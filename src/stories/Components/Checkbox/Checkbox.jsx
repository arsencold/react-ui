import React from "react";

const Checkbox = ({ label, onChange, isChecked, disabled }) => {
  return (
    <label>
      <input
        disabled={disabled}
        type="checkbox"
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
        color={{ color: "red" }}
      />
      <span>{label}</span>
    </label>
  );
};

export { Checkbox };
