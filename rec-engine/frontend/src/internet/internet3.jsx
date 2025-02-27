import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GreyTop, ProgressBar, Button, CheckboxGroup, PageHeader, PageFooter } from "../global/global-components.jsx";

const Internet3 = () => {
  const [progress, setProgress] = useState(75);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const [internet3Q1, setInternet3Q1] = useState([]);
  const [internet3Q2, setInternet3Q2] = useState([]);

  const handleCheckboxChange = (setOption) => (event) => {
    const { value, checked } = event.target;
    setOption((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  // Handle Navigation Conditionally
  const handleNext = () => {
    const storedOptions = JSON.parse(localStorage.getItem("selectedOptions")) || [];

    if (storedOptions.includes("Cybersecurity")) {
      navigate("/cyber1"); // Go to Cyber1 if selected
    } if (storedOptions.includes("Backup & Disaster Recovery")) {
      navigate("/backup1"); // Go to backup1 if selected
    } else {
        navigate("/thanku");
      }
  };

  return (
    <div className="form-container">
      <GreyTop />
      <ProgressBar progress={progress} />
      <PageHeader title="Internet Continued" />

      <CheckboxGroup
        label="Do you need to connect to any public cloud providers?"
        options={["Yes", "No", "Unsure"]}
        selectedOptions={internet3Q1}
        onChange={handleCheckboxChange(setInternet3Q1)}
      />

      <CheckboxGroup
        label="Do you have any compliance or security requirements?"
        options={["CCPA", "FDCC", "FEDRAMP", "FINRA", "ITAR", "NERC", "FISMA", "GDPR", "HIPPA", "NIST", "SOC2", "Other:" ]}
        selectedOptions={internet3Q2}
        onChange={handleCheckboxChange(setInternet3Q2)}
        columns={2}
      />

      <Button
        label="Next Section"
        onClick={() => {
          handleNext();
          setProgress((prev) => prev + 25);
        }}
      />
      <PageFooter />
    </div>
  );
};

export default Internet3;
