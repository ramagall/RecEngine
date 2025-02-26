import React, { useState } from "react";
import { GreyTop, ProgressBar, Button, CheckboxGroup, Textbox, PageHeader, PageFooter, QuestionWithInput } from "../global/global-components";
import { useNavigate } from "react-router-dom";
import './general-tech.css';

const GeneralTechnology = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(25);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [textResponse, setTextResponse] = useState("");

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    const updatedOptions = checked
      ? [...selectedOptions, value]
      : selectedOptions.filter((item) => item !== value);
  
    setSelectedOptions(updatedOptions);
  
    // Store the selection in localStorage
    localStorage.setItem("selectedOptions", JSON.stringify(updatedOptions));
  };  

  const handleNext = () => {
    if (selectedOptions.includes("Phones")) {
      navigate("/phones");
    } if (selectedOptions.includes("Internet")) {
      navigate("/internet");
    } if (selectedOptions.includes("Cybersecurity")) {
      navigate("/cybersecurity");
    } if (selectedOptions.includes("Backup & Disaster Recovery")) {
      navigate("/backup");
    } 
  };

  return (
    <div className="form-container">
      <GreyTop></GreyTop>
      <ProgressBar progress={progress} />
      <PageHeader title="About you..." />
      <CheckboxGroup
        label="Are you a non-profit organization, religious institution, or school?"
        options={["Yes", "No"]}
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
      />
      <CheckboxGroup
        label="What IT solutions are you looking for? (Select all that apply)"
        options={["Phones", "Internet", "Cybersecurity", "Backup & Disaster Recovery"]}
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
      />

      <Textbox
        label="In a couple sentences, describe your organization’s technological needs and any planned IT projects."
        name="techNeeds"
        value={textResponse}
        onChange={(e) => setTextResponse(e.target.value)}
        placeholder="Type here..."
      />

      <Button
        label="Next Section"
        onClick={() => {
          handleNext(); // Conditional navigation
          setProgress(progress + 25); // Update progress
        }}
      />
      <PageFooter />
    </div>
  );
};

export default GeneralTechnology;
