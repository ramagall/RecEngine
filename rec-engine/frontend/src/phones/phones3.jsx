import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GreyTop, ProgressBar, Button, CheckboxGroup, PageHeader, PageFooter } from "../global/global-components.jsx";

const Phones3 = () => {
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

    if (storedOptions.includes("Internet")) {
      navigate("/internet1"); // Go to Internet1 if selected
    } // We will put more conditions here later
  };

  return (
    <div className="form-container">
      <GreyTop />
      <ProgressBar progress={progress} />
      <PageHeader title="Phones Continued" />

      {/* Fixed CheckboxGroup with state */}
      <CheckboxGroup
        label="Do you need call recording?"
        options={["Yes", "No"]}
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
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

export default Phones3;
