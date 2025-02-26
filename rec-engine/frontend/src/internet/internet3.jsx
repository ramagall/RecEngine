import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GreyTop, ProgressBar, Button, CheckboxGroup, PageHeader, PageFooter } from "../global/global-components.jsx";

const Internet3 = () => {
  const [progress, setProgress] = useState(75);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedOptions((prev) =>
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
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
      />

      <CheckboxGroup
        label="Do you have any compliance or security requirements?"
        options={["CCPA", "FDCC", "FEDRAMP", "FINRA", "ITAR", "NERC", "FISMA", "GDPR", "HIPPA", "NIST", "SOC2", "Other:" ]}
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
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
