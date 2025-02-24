import React from "react";
import "./global-components.css";

const GreyTop = ({ })=> {
  return(
    <div className="greyTop"></div>
  )
}
// Progress Bar Component
const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

// Next Section & Next Page Button with Gradient
const Button = ({ label, onClick, type = "button", className = "gradient-button" }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {label}
    </button>
  );
};

// Checkbox Group with Square Checkboxes
const CheckboxGroup = ({ label, options, selectedOptions, onChange }) => {
  return (
    <div className="checkbox-group">
      <label className="question-label">{label}</label>
      <div className="checkbox-options">
        {options.map((option) => (
          <label key={option} className="checkbox-item">
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={onChange}
            />
            <span className="custom-checkbox"></span>
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

// Global Textbox Component with Oval Bullet
const Textbox = ({ label, name, value, onChange, placeholder = "Type here..."}) => {
  return (
    <div className="textbox-container">
      <label className="question-label">{label}</label>
      <textarea
        name={name}
        maxLength={label ? label.length : 100}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="textbox-input"
      />
    </div>
  );
};

const QuestionWithInput = ({ label, name, value, onChange, placeholder = " " }) => {
  return (
    <div className="question-container">
      <label className="question-label">
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="question-input"
      />
    </div>
  );
};

const QuestionWithoutInput = ({label}) => {
  return (
    <div className="question-container">
      <label className="question-label">
        {label}
      </label>
    </div>
  );
};

const SubQuestion = ({ label, name, value, onChange, placeholder = " " }) => {
  return (
    <div className="question-container">
      <label className="sub-question-label">
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="question-input"
      />
    </div>
  );
};

// Page Header in Lastica Font
const PageHeader = ({title}) => {
  return <h1 className="page-header">{title}</h1>;
};

// Page Footer in Lastica Font
const PageFooter = () => {
  return (
    <footer className="page-footer">
       <a href="https://lambtele.com" target="_blank" rel="noopener noreferrer">
        LAMBTELE.COM
      </a>
    </footer>
  );
};

export { GreyTop, ProgressBar, Button, CheckboxGroup, Textbox, PageHeader, PageFooter, QuestionWithInput, QuestionWithoutInput, SubQuestion};
