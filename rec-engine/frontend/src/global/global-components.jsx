import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div style={{ width: "100%", backgroundColor: "#e0e0e0", borderRadius: "10px", overflow: "hidden", marginBottom: "20px" }}>
      <div style={{ width: `${progress}%`, height: "20px", backgroundColor: "lightcyan" }}></div>
    </div>
  );
};

const CheckboxGroup = ({ label, options, selectedOptions, onChange }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label style={{ fontWeight: "bold", display: "block" }}>{label}</label>
      <div style={{ marginTop: "10px" }}>
        {options.map((option) => (
          <label key={option} style={{ display: "block", marginBottom: "5px" }}>
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={onChange}
              style={{ marginRight: "10px" }}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};
export {ProgressBar, CheckboxGroup};
