import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GreyTop, ProgressBar, Button, CheckboxGroup, PageHeader, PageFooter } from "../global/global-components.jsx";

const Internet = () => {
  const [progress, setProgress] = useState(75);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  // Handle Checkbox Selection
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  // Handle Navigation Conditionally
  const handleNext = () => {
    navigate("/internet2"); // Go to Internet2 if selected

  };

  return (
    <div className="form-container">
      <GreyTop />
      <ProgressBar progress={progress} />
      <PageHeader title="Internet" />

      {/* Fixed CheckboxGroup */}
      <CheckboxGroup
        label="Do you need call recording?"
        options={["Yes", "No"]}
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
      />

      {/* Button with proper navigation */}
      <Button
        label="Next Page"
        onClick={() => {
          handleNext();
          setProgress((prev) => prev + 25);
        }}
      />

      <PageFooter />
    </div>
  );
};

export default Internet;
